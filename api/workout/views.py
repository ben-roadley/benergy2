"""API views for the workout app.

This module exposes a DRF viewset for CRUD operations on `Workout` and
an endpoint to submit workout results. The viewset enforces per-user
querysets and applies additional permission checks when attempting to
edit workouts that already have training logs.
"""

from drf_spectacular.utils import extend_schema, extend_schema_view
from rest_framework import status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.exceptions import PermissionDenied
from rest_framework.mixins import (
    CreateModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from users.services import get_or_create_profile
from workout.serializers import (
    WarmupSuggestionsResponseSerializer,
    WorkoutEditorSerializer,
    WorkoutListSerializer,
    WorkoutLogReadSerializer,
    WorkoutResultSerializer,
    WorkoutSerializer,
    WorkoutVolumeInsightsSerializer,
)
from workout.services import (
    compute_volume_insights,
    is_workout_editable,
    validate_allowed_update,
    workout_log_create,
)
from workout.warmup_suggestions_service import (
    WarmupSuggestionError,
    force_regenerate_warmup_suggestions,
    get_or_generate_warmup_suggestions,
)

from .models import Workout, WorkoutLog


@extend_schema_view(
    list=extend_schema(summary="List workouts"),
    retrieve=extend_schema(summary="Retrieve a workout"),
    create=extend_schema(summary="Create a workout"),
    update=extend_schema(summary="Update a workout"),
    partial_update=extend_schema(summary="Partially update a workout"),
)
class WorkoutViewSet(
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    GenericViewSet,
):
    """ViewSet that exposes list/create/retrieve/update for `Workout`.

    - Uses `WorkoutListSerializer` for lists, `WorkoutEditorSerializer`
      for create/update operations and `WorkoutSerializer` for detail
      views.
    - Enforces that users only see their own workouts via `get_queryset`.
    - Overrides `update` to add stricter permission checks when a
      workout already has logs (only limited SetOfReps updates allowed).
    """

    serializer_class = WorkoutSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return workouts that belong to the authenticated user."""
        return Workout.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        """Choose serializer class based on the current action."""
        if self.action == "list":
            return WorkoutListSerializer
        if self.action in ("create", "update", "partial_update"):
            return WorkoutEditorSerializer
        return WorkoutSerializer

    def perform_create(self, serializer):
        """Attach the current user when creating a new `Workout`."""
        serializer.save(user=self.request.user)

    def update(self, request, *args, **kwargs):
        """Add validation for non-editable workouts before performing update.

        If a workout already has associated logs, only an `exercises` payload
        that modifies allowed SetOfReps fields is permitted; otherwise a
        `PermissionDenied` is raised.
        """
        instance = self.get_object()

        if not is_workout_editable(workout=instance):
            allowed_top = {"exercises"}
            incoming_keys = set(request.data.keys())
            disallowed = incoming_keys - allowed_top
            if disallowed:
                raise PermissionDenied(
                    "Workout cannot be edited because training logs exist; "
                    "only SetOfReps info/nb_reps/weight can be updated."
                )

            exercises = request.data.get("exercises")
            if exercises is None:
                raise PermissionDenied(
                    "Workout cannot be edited because training logs exist; "
                    "include 'exercises' with only SetOfReps edits."
                )

            ok, msg = validate_allowed_update(
                workout=instance, exercises_data=exercises
            )
            if not ok:
                raise PermissionDenied(msg)

        return super().update(request, *args, **kwargs)

    def partial_update(self, request, *args, **kwargs):
        """Proxy to DRF's `partial_update` implementation."""
        return super().partial_update(request, *args, **kwargs)

    @extend_schema(
        summary="List completed training sessions for a workout",
        responses={200: WorkoutLogReadSerializer(many=True)},
    )
    @action(detail=True, methods=["get"], url_path="logs")
    def logs(self, request, pk=None):
        """Return all completed training sessions for the given workout.

        Sessions are ordered newest-first. Entries are prefetched to avoid
        N+1 queries when the serializer groups them by exercise.
        """
        workout = self.get_object()
        logs = WorkoutLog.objects.filter(workout=workout).prefetch_related(
            "entries__set_of_reps__exercise__exercise_definition"
        )
        serializer = WorkoutLogReadSerializer(logs, many=True)
        return Response(serializer.data)

    @extend_schema(
        summary="Get volume insights for a workout",
        responses={200: WorkoutVolumeInsightsSerializer},
    )
    @action(detail=True, methods=["get"], url_path="insights/volume")
    def insights_volume(self, request, pk=None):
        """Return volume-over-time data for each exercise in the workout.

        Computes training volume (sets × reps × weight) per session for each
        exercise. Bodyweight exercises use the user's profile weight as a
        fallback. Returns an empty sessions list when no logs exist.
        """
        workout = self.get_object()
        try:
            profile = get_or_create_profile(user=request.user)
            profile_weight_kg = profile.weight_kg
        except Exception:
            profile_weight_kg = None

        data = compute_volume_insights(
            workout=workout,
            profile_weight_kg=profile_weight_kg,
        )
        serializer = WorkoutVolumeInsightsSerializer(data)
        return Response(serializer.data)

    @extend_schema(
        summary="Get or generate warm-up suggestions for a workout",
        responses={200: WarmupSuggestionsResponseSerializer, 503: None},
    )
    @action(detail=True, methods=["get", "post"], url_path="warmup-suggestions")
    def warmup_suggestions(self, request, pk=None):
        """Return cached warm-up suggestions, regenerating when stale.

        GET returns cached suggestions, regenerating automatically when the
        workout's exercise list has changed since the last generation.
        POST forces immediate regeneration regardless of the cached state.
        Both methods return 503 if the LLM call fails.
        """
        workout = self.get_object()

        try:
            profile = get_or_create_profile(user=request.user)
        except Exception:
            profile = None

        try:
            if request.method == "POST":
                suggestion = force_regenerate_warmup_suggestions(
                    workout=workout, profile=profile
                )
            else:
                suggestion = get_or_generate_warmup_suggestions(
                    workout=workout, profile=profile
                )
        except WarmupSuggestionError as exc:
            return Response(
                {"detail": str(exc)},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        serializer = WarmupSuggestionsResponseSerializer(
            {
                "suggestions": suggestion.suggestions,
                "generated_at": suggestion.generated_at,
            }
        )
        return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
@extend_schema(
    request=WorkoutResultSerializer,
    responses={201: None},
    summary="Submit completed workout results",
)
def submit_workout_results(request):
    """Endpoint to accept a user's completed workout results.

    Validates the incoming payload using `WorkoutResultSerializer` and
    delegates creation of `WorkoutLog` and `WorkoutLogEntry` records to
    the `workout_log_create` service helper.
    """
    serializer = WorkoutResultSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)

    workout_log_create(
        user=request.user,
        workout_id=serializer.validated_data["workout_id"],
        results=serializer.validated_data["results"],
    )

    return Response(
        {"message": "Workout results saved."}, status=status.HTTP_201_CREATED
    )

from drf_spectacular.utils import extend_schema, extend_schema_view
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.mixins import ListModelMixin
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from catalog.models import ExerciseDefinition
from catalog.serializers import ExerciseDefinitionSerializer, ExerciseDefinitionAllSerializer


@extend_schema(tags=["exercise definitions"])
@extend_schema_view(
    list=extend_schema(summary="Search exercise definitions"),
    all=extend_schema(summary="List all exercise definitions"),
)
class ExerciseDefinitionViewSet(ListModelMixin, GenericViewSet):
    """Expose search and full-list endpoints for exercise definitions."""

    serializer_class = ExerciseDefinitionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return the queryset for the current action.

        The default list action serves autocomplete search and requires a
        `q` parameter of at least 2 characters. The `all` action returns the
        full catalog ordered by slug.
        """
        if self.action == "all":
            return ExerciseDefinition.objects.all().order_by("slug")

        q = self.request.query_params.get("q", "")
        if len(q) < 2:
            raise ValidationError(
                "Query parameter 'q' must be at least 2 characters long."
            )
        return ExerciseDefinition.objects.filter(name__icontains=q)[:30]

    def get_serializer_class(self):
        """Return the serializer matching the current action."""
        if self.action == "all":
            return ExerciseDefinitionAllSerializer
        return ExerciseDefinitionSerializer


    # @action(detail=False, methods=["get"], url_path="all", permission_classes=[AllowAny])
    @action(detail=False, methods=["get"], url_path="all")
    def all(self, request):
        """Return the full exercise definition catalog."""
        serializer = self.get_serializer(self.get_queryset(), many=True)
        return Response(serializer.data)

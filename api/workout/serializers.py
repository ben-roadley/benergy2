"""Serializers for the workout API.

This module contains lightweight, declarative serializers used by the
API views. Heavy ORM operations (creation/update of nested models and
business validation) are delegated to `workout.services` so serializers
remain focused on input validation and representation.
"""

from rest_framework import serializers

from catalog.serializers import ExerciseDefinitionSerializer
from workout.models import Exercise, SetOfReps, Workout, WorkoutLog, WorkoutLogEntry
from workout.services import (
    create_workout_with_exercises,
    is_workout_editable,
    is_workout_stagnating,
    update_workout_from_payload,
)


class SetOfRepsSerializer(serializers.ModelSerializer):
    """Read-only serializer for `SetOfReps` used in API responses."""

    class Meta:
        model = SetOfReps
        fields = ["id", "order", "nb_reps", "weight"]


class ExerciseSerializer(serializers.ModelSerializer):
    """Read-only serializer for `Exercise` including nested sets."""

    sets_of_reps = SetOfRepsSerializer(many=True, read_only=True)
    exercise_definition = ExerciseDefinitionSerializer(read_only=True)
    exercise_name = serializers.CharField(
        source="exercise_definition.name", read_only=True
    )
    rest_time_after = serializers.IntegerField(read_only=True)

    class Meta:
        model = Exercise
        fields = ["order", "exercise_name", "exercise_definition", "sets_of_reps", "rest_time_after"]


class WorkoutListSerializer(serializers.ModelSerializer):
    """Compact serializer for listing workouts with status flags."""

    is_stagnating = serializers.SerializerMethodField()
    is_editable = serializers.SerializerMethodField()

    class Meta:
        model = Workout
        fields = ["id", "name", "description", "is_stagnating", "is_editable"]

    def get_is_stagnating(self, obj):
        request = self.context.get("request")
        if not request or not request.user.is_authenticated:
            return False
        return is_workout_stagnating(user=request.user, workout=obj)

    def get_is_editable(self, obj):
        return is_workout_editable(workout=obj)


class WorkoutSerializer(serializers.ModelSerializer):
    """Detailed workout serializer including nested exercises."""

    exercises = ExerciseSerializer(many=True, read_only=True)
    is_editable = serializers.SerializerMethodField()

    class Meta:
        model = Workout
        fields = ["id", "name", "description", "exercises", "is_editable"]

    def get_is_editable(self, obj):
        return is_workout_editable(workout=obj)



class LastWorkoutSessionSerializer(serializers.Serializer):
    """Serializer for the last workout session endpoint."""

    workout_name = serializers.CharField(read_only=True)
    completed_at = serializers.DateTimeField(read_only=True)



class SetOfRepsWriteSerializer(serializers.Serializer):
    """Write-oriented serializer for SetOfReps used inside editor payloads."""

    nb_reps = serializers.IntegerField(min_value=1)
    weight = serializers.DecimalField(
        max_digits=6, decimal_places=2, required=False, allow_null=True, default=None
    )


class ExerciseWriteSerializer(serializers.Serializer):
    """Write-oriented serializer for Exercise payloads in the editor."""

    exercise_definition_slug = serializers.CharField(max_length=100)
    sets_of_reps = SetOfRepsWriteSerializer(many=True)
    rest_time_after = serializers.IntegerField(min_value=0, required=False, default=60)


class WorkoutEditorSerializer(serializers.ModelSerializer):
    """Serializer used for creating and editing workouts.

    Creation and update operations delegate nested persistence to
    the service layer (`create_workout_with_exercises` and
    `update_workout_from_payload`) to keep serializer logic concise.
    Validation ensures a workout has at least one exercise and each
    exercise contains at least one set.
    """

    exercises = ExerciseWriteSerializer(many=True, required=False)

    class Meta:
        model = Workout
        fields = ["id", "name", "description", "exercises"]
        read_only_fields = ["id"]

    def validate_exercises(self, value):
        if not value:
            raise serializers.ValidationError(
                "A workout must have at least one exercise."
            )
        for ex in value:
            if not ex.get("sets_of_reps"):
                raise serializers.ValidationError(
                    "Each exercise must have at least one set."
                )
        return value

    def create(self, validated_data):
        exercises_data = validated_data.pop("exercises", None)
        if exercises_data is None:
            raise serializers.ValidationError(
                "A workout must have at least one exercise."
            )
        try:
            return create_workout_with_exercises(
                workout_data=validated_data, exercises_data=exercises_data
            )
        except ValueError as exc:
            raise serializers.ValidationError(str(exc))

    def update(self, instance, validated_data):
        exercises_data = validated_data.pop("exercises", None)
        try:
            return update_workout_from_payload(
                workout=instance,
                workout_data=validated_data,
                exercises_data=exercises_data,
            )
        except ValueError as exc:
            raise serializers.ValidationError(str(exc))

    def to_representation(self, instance):
        return WorkoutSerializer(instance).data


class WorkoutLogEntrySerializer(serializers.ModelSerializer):
    """Serializer for individual workout log entries used when returning logs."""

    set_of_reps = serializers.PrimaryKeyRelatedField(
        queryset=SetOfReps.objects.all(), required=False, allow_null=True
    )

    class Meta:
        model = WorkoutLogEntry
        fields = [
            "set_of_reps",
            "nb_reps_target",
            "nb_reps_actual",
            "weight_actual",
            "weight_target",
        ]


class WorkoutResultSerializer(serializers.Serializer):
    """Serializer for the payload submitted by the frontend after a workout.

    Accepts a `workout_id` and a list of `results`. The `results` list
    is intentionally permissive to accept either camelCase or snake_case
    keys; the service layer normalises the values.
    """

    workout_id = serializers.IntegerField()
    # Accept arbitrary dicts so frontend can send camelCase or snake_case;
    # services will map keys as needed.
    results = serializers.ListField(child=serializers.DictField())


class WarmupSuggestionItemSerializer(serializers.Serializer):
    """Serializer for a single AI-generated warm-up suggestion."""

    name = serializers.CharField()
    description = serializers.CharField()


class WorkoutLogSetSerializer(serializers.Serializer):
    """Read-only serializer for a single set result within a log entry."""

    set_order = serializers.IntegerField()
    nb_reps_actual = serializers.IntegerField()
    nb_reps_target = serializers.IntegerField()
    weight_actual = serializers.DecimalField(
        max_digits=6, decimal_places=2, allow_null=True
    )
    weight_target = serializers.DecimalField(
        max_digits=6, decimal_places=2, allow_null=True
    )


class WorkoutLogExerciseSerializer(serializers.Serializer):
    """Read-only serializer for one exercise's worth of sets within a log."""

    exercise_name = serializers.CharField()
    exercise_order = serializers.IntegerField()
    sets = WorkoutLogSetSerializer(many=True)


class WorkoutLogReadSerializer(serializers.ModelSerializer):
    """Read-only serializer for a completed workout session and its entries.

    Entries are grouped by exercise and returned as an ordered list of
    exercises, each containing a list of set results. Requires the queryset
    to prefetch `entries__set_of_reps__exercise` to avoid N+1 queries.
    """

    workout_name = serializers.CharField(source="workout.name", read_only=True)
    exercises = serializers.SerializerMethodField()

    class Meta:
        model = WorkoutLog
        fields = ["id", "workout_name", "completed_at", "exercises"]

    def get_exercises(self, obj):
        """Group log entries by exercise, ordered by exercise_order."""
        grouped = {}
        for entry in obj.entries.all():
            sor = entry.set_of_reps
            ex = sor.exercise
            key = ex.order
            if key not in grouped:
                grouped[key] = {
                    "exercise_name": ex.exercise_definition.name,
                    "exercise_order": ex.order,
                    "sets": [],
                }
            grouped[key]["sets"].append(
                {
                    "set_order": sor.order,
                    "nb_reps_actual": entry.nb_reps_actual,
                    "nb_reps_target": entry.nb_reps_target,
                    "weight_actual": entry.weight_actual,
                    "weight_target": entry.weight_target,
                }
            )
        return list(grouped.values())


class WarmupSuggestionsResponseSerializer(serializers.Serializer):
    """Serializer for the warm-up suggestions endpoint response."""

    suggestions = WarmupSuggestionItemSerializer(many=True)
    generated_at = serializers.DateTimeField()


class ExerciseVolumeSerializer(serializers.Serializer):
    """Serializer for per-exercise volume data in the insights response."""

    name = serializers.CharField()
    order = serializers.IntegerField()
    is_bodyweight = serializers.BooleanField()
    volume_per_session = serializers.ListField(child=serializers.FloatField())


class WorkoutVolumeInsightsSerializer(serializers.Serializer):
    """Serializer for the workout volume insights endpoint response."""

    workout_name = serializers.CharField()
    bodyweight_kg = serializers.FloatField(allow_null=True)
    sessions = serializers.ListField(child=serializers.CharField())
    total_volume = serializers.ListField(child=serializers.FloatField())
    exercises = ExerciseVolumeSerializer(many=True)

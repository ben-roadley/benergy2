from rest_framework import serializers

from catalog.models import ExerciseDefinition


class ExerciseDefinitionSerializer(serializers.ModelSerializer):
    """Read-only serializer for ExerciseDefinition used in autocomplete responses."""

    class Meta:
        model = ExerciseDefinition
        fields = ["slug", "name", "category", "equipment", "primary_muscles", "level"]
        read_only_fields = fields


class ExerciseDefinitionAllSerializer(serializers.ModelSerializer):
    """Read-only serializer for ExerciseDefinition used in responses listing all exercises."""

    class Meta:
        model = ExerciseDefinition
        fields = "__all__"
from rest_framework import generics
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated

from catalog.models import ExerciseDefinition
from catalog.serializers import ExerciseDefinitionSerializer


class ExerciseDefinitionListView(generics.ListAPIView):
    """List ExerciseDefinitions matching a search query for autocomplete."""

    serializer_class = ExerciseDefinitionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Return up to 30 ExerciseDefinitions whose name contains the query.

        Requires a `q` parameter of at least 2 characters. Returns a 400
        error if the parameter is missing or too short.
        """
        q = self.request.query_params.get("q", "")
        if len(q) < 2:
            raise ValidationError(
                "Query parameter 'q' must be at least 2 characters long."
            )
        return ExerciseDefinition.objects.filter(name__icontains=q)[:30]

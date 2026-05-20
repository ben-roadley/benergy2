"""API views for user profile management."""

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from users.models import (
    VALID_EQUIPMENT,
    VALID_GOALS,
    FitnessLevelChoices,
    SessionDurationChoices,
    SexChoices,
    SleepQualityChoices,
    StressLevelChoices,
)
from users.serializers import UserProfileSerializer
from users.services import clear_profile, get_or_create_profile, update_profile


@api_view(["GET", "PATCH"])
@permission_classes([IsAuthenticated])
def profile_view(request):
    """Retrieve or partially update the authenticated user's profile."""
    profile = get_or_create_profile(user=request.user)

    if request.method == "GET":
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

    serializer = UserProfileSerializer(profile, data=request.data, partial=True)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    updated = update_profile(profile=profile, validated_data=serializer.validated_data)
    return Response(UserProfileSerializer(updated).data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def profile_clear_view(request):
    """Reset all optional profile fields to their defaults."""
    profile = get_or_create_profile(user=request.user)
    cleared = clear_profile(profile=profile)
    return Response(UserProfileSerializer(cleared).data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile_options_view(request):
    """Return all valid choices for profile fields."""
    return Response(
        {
            "goals": VALID_GOALS,
            "equipment": VALID_EQUIPMENT,
            "sex": [c.value for c in SexChoices],
            "fitness_level": [c.value for c in FitnessLevelChoices],
            "session_duration": [c.value for c in SessionDurationChoices],
            "sleep_quality": [c.value for c in SleepQualityChoices],
            "stress_level": [c.value for c in StressLevelChoices],
        }
    )

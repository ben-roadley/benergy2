"""Service functions for user profile business logic."""

from users.models import UserProfile


def get_or_create_profile(*, user) -> UserProfile:
    """Return the UserProfile for the given user.

    Creates a blank profile with default values if one does not yet exist.
    """
    profile, _ = UserProfile.objects.get_or_create(user=user)
    return profile


def update_profile(*, profile: UserProfile, validated_data: dict) -> UserProfile:
    """Apply validated_data to profile fields and save.

    Only fields present in validated_data are updated; omitted fields are unchanged.
    validated_data must already have been validated by UserProfileSerializer.
    """
    for field, value in validated_data.items():
        setattr(profile, field, value)
    profile.save()
    return profile


def clear_profile(*, profile: UserProfile) -> UserProfile:
    """Reset all optional profile fields to their defaults.

    Nullable fields (date_of_birth, weight_kg, height_cm, training_days_per_week)
    are set to None. Text/char fields are set to ''. JSON fields (goals, equipment)
    are set to []. The user relation is never modified.
    """
    profile.display_name = ""
    profile.date_of_birth = None
    profile.sex = ""
    profile.weight_kg = None
    profile.height_cm = None
    profile.fitness_level = ""
    profile.goals = []
    profile.equipment = []
    profile.session_duration = ""
    profile.training_days_per_week = None
    profile.injury_history = ""
    profile.lifestyle_description = ""
    profile.sleep_quality = ""
    profile.stress_level = ""
    profile.save()
    return profile

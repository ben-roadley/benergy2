"""Unit tests for users.services."""

import pytest
from django.contrib.auth import get_user_model

from users.models import UserProfile
from users.services import clear_profile, get_or_create_profile, update_profile

User = get_user_model()


@pytest.fixture
def user(db):
    return User.objects.create_user("testuser", "test@example.com", "pass")


@pytest.fixture
def profile(user):
    return get_or_create_profile(user=user)


class TestGetOrCreateProfile:
    def test_creates_blank_profile_on_first_call(self, user, db):
        assert not UserProfile.objects.filter(user=user).exists()
        p = get_or_create_profile(user=user)
        assert p.pk is not None
        assert p.user == user

    def test_returns_existing_profile_on_second_call(self, user, db):
        p1 = get_or_create_profile(user=user)
        p2 = get_or_create_profile(user=user)
        assert p1.pk == p2.pk

    def test_blank_profile_has_default_values(self, user, db):
        p = get_or_create_profile(user=user)
        assert p.display_name == ""
        assert p.date_of_birth is None
        assert p.goals == []
        assert p.equipment == []


class TestUpdateProfile:
    def test_updates_specified_fields(self, profile, db):
        updated = update_profile(
            profile=profile,
            validated_data={"display_name": "Ben", "weight_kg": "70.0"},
        )
        assert updated.display_name == "Ben"
        assert str(updated.weight_kg) == "70.0"

    def test_leaves_other_fields_unchanged(self, profile, db):
        profile.height_cm = 175
        profile.save()
        update_profile(profile=profile, validated_data={"display_name": "Ben"})
        profile.refresh_from_db()
        assert profile.height_cm == 175

    def test_persists_to_database(self, profile, db):
        update_profile(profile=profile, validated_data={"display_name": "Ben"})
        profile.refresh_from_db()
        assert profile.display_name == "Ben"


class TestClearProfile:
    def test_clears_nullable_fields_to_none(self, profile, db):
        update_profile(
            profile=profile,
            validated_data={
                "weight_kg": "70.0",
                "height_cm": 175,
                "training_days_per_week": 4,
            },
        )
        cleared = clear_profile(profile=profile)
        assert cleared.weight_kg is None
        assert cleared.height_cm is None
        assert cleared.training_days_per_week is None

    def test_clears_text_fields_to_empty_string(self, profile, db):
        update_profile(
            profile=profile,
            validated_data={"display_name": "Ben", "lifestyle_description": "Desk job"},
        )
        cleared = clear_profile(profile=profile)
        assert cleared.display_name == ""
        assert cleared.lifestyle_description == ""

    def test_clears_json_fields_to_empty_list(self, profile, db):
        update_profile(
            profile=profile,
            validated_data={
                "goals": ["strength_gain"],
                "equipment": ["resistance_bands"],
            },
        )
        cleared = clear_profile(profile=profile)
        assert cleared.goals == []
        assert cleared.equipment == []

    def test_does_not_change_user(self, profile, user, db):
        cleared = clear_profile(profile=profile)
        assert cleared.user == user

    def test_persists_clear_to_database(self, profile, db):
        update_profile(profile=profile, validated_data={"display_name": "Ben"})
        clear_profile(profile=profile)
        profile.refresh_from_db()
        assert profile.display_name == ""

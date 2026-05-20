"""API tests for user profile endpoints."""

from datetime import date, timedelta

from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from users.models import VALID_EQUIPMENT, VALID_GOALS, UserProfile

User = get_user_model()


class ProfileViewTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user("ben", "ben@example.com", "pass")
        self.profile_url = reverse("profile")
        self.clear_url = reverse("profile-clear")
        self.options_url = reverse("profile-options")

    # --- Authentication ---

    def test_get_profile_unauthenticated_returns_403(self):
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_patch_profile_unauthenticated_returns_403(self):
        response = self.client.patch(
            self.profile_url, {}, content_type="application/json"
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_clear_profile_unauthenticated_returns_403(self):
        response = self.client.post(self.clear_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_options_unauthenticated_returns_403(self):
        response = self.client.get(self.options_url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # --- GET profile ---

    def test_get_profile_creates_blank_profile_on_first_access(self):
        self.client.force_authenticate(user=self.user)
        self.assertFalse(UserProfile.objects.filter(user=self.user).exists())
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(UserProfile.objects.filter(user=self.user).exists())
        self.assertEqual(response.data["display_name"], "")
        self.assertEqual(response.data["goals"], [])

    def test_get_profile_returns_existing_data(self):
        self.client.force_authenticate(user=self.user)
        UserProfile.objects.create(user=self.user, display_name="Ben")
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["display_name"], "Ben")

    # --- PATCH profile ---

    def test_patch_updates_display_name(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url, {"display_name": "Ben"}, content_type="application/json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["display_name"], "Ben")

    def test_patch_partial_does_not_affect_other_fields(self):
        self.client.force_authenticate(user=self.user)
        UserProfile.objects.create(user=self.user, height_cm=175)
        self.client.patch(
            self.profile_url, {"display_name": "Ben"}, content_type="application/json"
        )
        self.user.profile.refresh_from_db()
        self.assertEqual(self.user.profile.height_cm, 175)

    def test_patch_invalid_goal_returns_400(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"goals": ["eat_cake"]},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("goals", response.data)

    def test_patch_goals_not_a_list_returns_400(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"goals": "strength_gain"},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("goals", response.data)

    def test_patch_invalid_equipment_returns_400(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"equipment": ["treadmill"]},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("equipment", response.data)

    def test_patch_future_date_of_birth_returns_400(self):
        self.client.force_authenticate(user=self.user)
        future = (date.today() + timedelta(days=1)).isoformat()
        response = self.client.patch(
            self.profile_url,
            {"date_of_birth": future},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("date_of_birth", response.data)

    def test_patch_today_date_of_birth_returns_400(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"date_of_birth": date.today().isoformat()},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_patch_null_date_of_birth_returns_200(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"date_of_birth": None},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIsNone(response.data["date_of_birth"])

    def test_patch_negative_weight_returns_400(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"weight_kg": "-1.0"},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("weight_kg", response.data)

    def test_patch_valid_goals_accepted(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(
            self.profile_url,
            {"goals": ["strength_gain", "general_health"]},
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["goals"], ["strength_gain", "general_health"])

    # --- POST clear ---

    def test_clear_resets_all_fields_to_defaults(self):
        self.client.force_authenticate(user=self.user)
        UserProfile.objects.create(
            user=self.user,
            display_name="Ben",
            weight_kg="70.0",
            goals=["strength_gain"],
            equipment=["resistance_bands"],
        )
        response = self.client.post(self.clear_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["display_name"], "")
        self.assertIsNone(response.data["weight_kg"])
        self.assertEqual(response.data["goals"], [])
        self.assertEqual(response.data["equipment"], [])

    # --- GET options ---

    def test_options_returns_expected_keys(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.options_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        for key in (
            "goals",
            "equipment",
            "sex",
            "fitness_level",
            "session_duration",
            "sleep_quality",
            "stress_level",
        ):
            self.assertIn(key, response.data)

    def test_options_goals_matches_valid_goals_constant(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.options_url)
        self.assertEqual(response.data["goals"], VALID_GOALS)

    def test_options_equipment_matches_valid_equipment_constant(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.options_url)
        self.assertEqual(response.data["equipment"], VALID_EQUIPMENT)

    # --- Session endpoint includes display_name ---

    def test_session_endpoint_includes_display_name(self):
        self.client.force_authenticate(user=self.user)
        UserProfile.objects.create(user=self.user, display_name="Ben")
        response = self.client.get(reverse("auth-session"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("display_name", response.data["user"])
        self.assertEqual(response.data["user"]["display_name"], "Ben")

    def test_session_endpoint_display_name_empty_when_no_profile(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(reverse("auth-session"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["user"]["display_name"], "")

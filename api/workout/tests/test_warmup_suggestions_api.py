"""API tests for the warm-up suggestions endpoint."""

from unittest.mock import patch

from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from catalog.models import ExerciseDefinition
from workout.models import Exercise, SetOfReps, WarmupSuggestion, Workout
from workout.warmup_suggestions_service import WarmupSuggestionError

User = get_user_model()

FAKE_SUGGESTIONS = [
    {"name": "Arm circles", "description": "Loosens the shoulder girdle."}
]


class WarmupSuggestionsAPITest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="ws_api_user", password="pass")
        self.other_user = User.objects.create_user(
            username="ws_other_user", password="pass"
        )

        self.workout = Workout.objects.create(
            user=self.user, name="Upper Body"
        )
        ed1 = ExerciseDefinition.objects.create(
            slug="ws-api-bench",
            name="Bench Press",
            category="Strength",
            level="intermediate",
        )
        ed2 = ExerciseDefinition.objects.create(
            slug="ws-api-pullups",
            name="Pull-ups",
            category="Strength",
            level="beginner",
        )
        ex = Exercise.objects.create(
            workout=self.workout, order=1, exercise_definition=ed1
        )
        SetOfReps.objects.create(exercise=ex, order=1, nb_reps=8, weight=60)

        self.other_workout = Workout.objects.create(
            user=self.other_user, name="Other Workout"
        )
        ex2 = Exercise.objects.create(
            workout=self.other_workout, order=1, exercise_definition=ed2
        )
        SetOfReps.objects.create(exercise=ex2, order=1, nb_reps=6)

        self.url = reverse("workout-warmup-suggestions", args=[self.workout.id])
        self.other_url = reverse(
            "workout-warmup-suggestions", args=[self.other_workout.id]
        )

    # ---- GET ----

    def test_get_unauthenticated_returns_401_or_403(self):
        res = self.client.get(self.url)
        self.assertIn(
            res.status_code,
            (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN),
        )

    def test_get_other_users_workout_returns_404(self):
        self.client.force_authenticate(user=self.user)
        res = self.client.get(self.other_url)
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)

    def test_get_returns_200_with_suggestions(self):
        self.client.force_authenticate(user=self.user)

        with patch(
            "workout.warmup_suggestions_service.call_llm",
            return_value=FAKE_SUGGESTIONS,
        ):
            res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertIn("suggestions", res.data)
        self.assertIn("generated_at", res.data)
        self.assertEqual(len(res.data["suggestions"]), 1)
        self.assertEqual(res.data["suggestions"][0]["name"], "Arm circles")

    def test_get_returns_cached_suggestions_without_calling_llm(self):
        from workout.warmup_suggestions_service import compute_exercises_hash

        current_hash = compute_exercises_hash(self.workout)
        WarmupSuggestion.objects.create(
            workout=self.workout,
            exercises_hash=current_hash,
            suggestions=FAKE_SUGGESTIONS,
        )

        self.client.force_authenticate(user=self.user)
        with patch("workout.warmup_suggestions_service.call_llm") as mock_call:
            res = self.client.get(self.url)

        mock_call.assert_not_called()
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data["suggestions"][0]["name"], "Arm circles")

    def test_get_returns_503_when_llm_fails(self):
        self.client.force_authenticate(user=self.user)

        with patch(
            "workout.warmup_suggestions_service.call_llm",
            side_effect=WarmupSuggestionError("LLM unavailable"),
        ):
            res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)
        self.assertIn("detail", res.data)

    def test_get_returns_503_when_not_configured(self):
        self.client.force_authenticate(user=self.user)

        with patch(
            "workout.warmup_suggestions_service.call_llm",
            side_effect=WarmupSuggestionError("AI suggestions are not configured."),
        ):
            res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)

    # ---- POST (force regenerate) ----

    def test_post_unauthenticated_returns_401_or_403(self):
        res = self.client.post(self.url)
        self.assertIn(
            res.status_code,
            (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN),
        )

    def test_post_other_users_workout_returns_404(self):
        self.client.force_authenticate(user=self.user)
        res = self.client.post(self.other_url)
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)

    def test_post_forces_regeneration_even_when_cache_is_fresh(self):
        from workout.warmup_suggestions_service import compute_exercises_hash

        current_hash = compute_exercises_hash(self.workout)
        WarmupSuggestion.objects.create(
            workout=self.workout,
            exercises_hash=current_hash,
            suggestions=FAKE_SUGGESTIONS,
        )
        new_suggestions = [{"name": "New Exercise", "description": "Brand new tip."}]

        self.client.force_authenticate(user=self.user)
        with patch(
            "workout.warmup_suggestions_service.call_llm",
            return_value=new_suggestions,
        ) as mock_call:
            res = self.client.post(self.url)

        mock_call.assert_called_once()
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data["suggestions"][0]["name"], "New Exercise")

    def test_get_continues_when_profile_raises(self):
        """When profile raises, suggestions are still returned."""
        self.client.force_authenticate(user=self.user)

        with patch(
            "workout.views.get_or_create_profile",
            side_effect=Exception("profile unavailable"),
        ), patch(
            "workout.warmup_suggestions_service.call_llm",
            return_value=FAKE_SUGGESTIONS,
        ):
            res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertIn("suggestions", res.data)

    def test_post_returns_503_when_llm_fails(self):
        self.client.force_authenticate(user=self.user)

        with patch(
            "workout.warmup_suggestions_service.call_llm",
            side_effect=WarmupSuggestionError("LLM unavailable"),
        ):
            res = self.client.post(self.url)

        self.assertEqual(res.status_code, status.HTTP_503_SERVICE_UNAVAILABLE)
        self.assertIn("detail", res.data)

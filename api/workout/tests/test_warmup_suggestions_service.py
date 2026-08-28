"""Unit tests for workout.warmup_suggestions_service."""

import json
import sys
from unittest.mock import MagicMock, patch

import pytest
from django.contrib.auth.models import User

from catalog.models import ExerciseDefinition
from workout.models import Exercise, SetOfReps, WarmupSuggestion, Workout
from workout.warmup_suggestions_service import (
    WarmupSuggestionError,
    build_warmup_prompt,
    call_llm,
    compute_exercises_hash,
    force_regenerate_warmup_suggestions,
    get_or_generate_warmup_suggestions,
)


@pytest.fixture
def user(db):
    return User.objects.create_user("ws_user", "ws@test.com", "pass")


@pytest.fixture
def workout(user):
    w = Workout.objects.create(user=user, name="Strength A")
    ed1 = ExerciseDefinition.objects.create(
        slug="ws-bench-press",
        name="Bench Press",
        category="Strength",
        level="intermediate",
    )
    ed2 = ExerciseDefinition.objects.create(
        slug="ws-squats",
        name="Squats",
        category="Strength",
        level="intermediate",
    )
    e1 = Exercise.objects.create(workout=w, order=1, exercise_definition=ed1)
    e2 = Exercise.objects.create(workout=w, order=2, exercise_definition=ed2)
    SetOfReps.objects.create(exercise=e1, order=1, nb_reps=8, weight=60)
    SetOfReps.objects.create(exercise=e2, order=1, nb_reps=10)
    return w


@pytest.fixture
def empty_workout(user):
    return Workout.objects.create(user=user, name="Empty")


def _make_fake_profile(
    fitness_level="intermediate",
    goals=None,
    injury_history="",
):
    p = MagicMock()
    p.fitness_level = fitness_level
    p.goals = goals if goals is not None else ["strength_gain"]
    p.injury_history = injury_history
    return p


# ---- compute_exercises_hash ----


class TestComputeExercisesHash:
    def test_returns_64_char_hex_string(self, workout):
        h = compute_exercises_hash(workout)
        assert len(h) == 64
        assert all(c in "0123456789abcdef" for c in h)

    def test_same_workout_produces_same_hash(self, workout):
        assert compute_exercises_hash(workout) == compute_exercises_hash(workout)

    def test_hash_changes_when_exercise_name_changes(self, workout, db):
        h1 = compute_exercises_hash(workout)
        ed_new = ExerciseDefinition.objects.create(
            slug="ws-pull-ups",
            name="Pull-ups",
            category="Strength",
            level="intermediate",
        )
        Exercise.objects.filter(workout=workout, order=1).update(
            exercise_definition=ed_new
        )
        workout.refresh_from_db()
        h2 = compute_exercises_hash(workout)
        assert h1 != h2

    def test_hash_changes_when_exercise_order_changes(self, user, db):
        """The hash reflects exercise order, not just the set of names."""
        w = Workout.objects.create(user=user, name="Order Test")
        ed_a = ExerciseDefinition.objects.create(
            slug="ws-ex-a", name="A", category="Strength", level="beginner"
        )
        ed_b = ExerciseDefinition.objects.create(
            slug="ws-ex-b", name="B", category="Strength", level="beginner"
        )
        e_a = Exercise.objects.create(workout=w, order=1, exercise_definition=ed_a)
        e_b = Exercise.objects.create(workout=w, order=2, exercise_definition=ed_b)
        h_ab = compute_exercises_hash(w)

        Exercise.objects.filter(pk=e_a.pk).update(order=3)
        Exercise.objects.filter(pk=e_b.pk).update(order=1)
        Exercise.objects.filter(pk=e_a.pk).update(order=2)

        h_ba = compute_exercises_hash(w)
        assert h_ab != h_ba


# ---- build_warmup_prompt ----


class TestBuildWarmupPrompt:
    def test_includes_exercise_names(self):
        prompt = build_warmup_prompt(["Bench Press", "Squats"])
        assert "Bench Press" in prompt
        assert "Squats" in prompt

    def test_includes_fitness_level(self):
        profile = _make_fake_profile(fitness_level="advanced")
        prompt = build_warmup_prompt(["Deadlift"], profile)
        assert "advanced" in prompt

    def test_includes_goals_as_readable_labels(self):
        profile = _make_fake_profile(goals=["strength_gain", "endurance"])
        prompt = build_warmup_prompt(["Deadlift"], profile)
        assert "strength gain" in prompt
        assert "endurance" in prompt

    def test_includes_injury_history(self):
        profile = _make_fake_profile(injury_history="Lower back issues")
        prompt = build_warmup_prompt(["Deadlift"], profile)
        assert "Lower back issues" in prompt

    def test_no_pii_in_prompt(self):
        profile = _make_fake_profile()
        # Attach PII fields to the mock to ensure they are never read
        profile.display_name = "Ben"
        profile.date_of_birth = "1982-01-01"
        profile.sex = "male"
        profile.weight_kg = 70
        profile.height_cm = 175
        prompt = build_warmup_prompt(["Push-ups"], profile)
        assert "Ben" not in prompt
        assert "1982" not in prompt
        assert "male" not in prompt
        assert "70" not in prompt
        assert "175" not in prompt

    def test_no_profile_data_fallback(self):
        prompt = build_warmup_prompt(["Push-ups"], profile=None)
        assert "No profile data available" in prompt

    def test_empty_profile_fields_fallback(self):
        profile = _make_fake_profile(fitness_level="", goals=[], injury_history="")
        prompt = build_warmup_prompt(["Push-ups"], profile)
        assert "No profile data available" in prompt

    def test_prompt_requests_json_array(self):
        prompt = build_warmup_prompt(["Bench Press"])
        assert "JSON array" in prompt
        assert '"name"' in prompt
        assert '"description"' in prompt


# ---- call_llm ----


class TestCallLlm:
    def test_raises_when_api_key_not_configured(self, settings):
        settings.HF_TOKEN = ""
        with pytest.raises(WarmupSuggestionError, match="not configured"):
            call_llm("some prompt")

    def test_returns_parsed_suggestions_on_success(self, settings):
        settings.HF_TOKEN = "test-key"

        fake_data = [{"name": "Arm circles", "description": "Warm up the shoulders."}]
        mock_response = MagicMock()
        mock_response.choices[0].message.content = json.dumps(fake_data)

        with patch("openai.OpenAI") as MockClient:
            MockClient.return_value.chat.completions.create.return_value = mock_response
            result = call_llm("prompt")

        assert result == fake_data

    def test_raises_on_invalid_json(self, settings):
        settings.HF_TOKEN = "test-key"
        mock_response = MagicMock()
        mock_response.choices[0].message.content = "not json at all"

        with patch("openai.OpenAI") as MockClient:
            MockClient.return_value.chat.completions.create.return_value = mock_response
            with pytest.raises(WarmupSuggestionError, match="invalid JSON"):
                call_llm("prompt")

    def test_raises_when_response_is_not_list(self, settings):
        settings.HF_TOKEN = "test-key"
        mock_response = MagicMock()
        mock_response.choices[0].message.content = json.dumps({"name": "oops"})

        with patch("openai.OpenAI") as MockClient:
            MockClient.return_value.chat.completions.create.return_value = mock_response
            with pytest.raises(WarmupSuggestionError, match="JSON array"):
                call_llm("prompt")

    def test_raises_when_item_missing_required_keys(self, settings):
        settings.HF_TOKEN = "test-key"
        mock_response = MagicMock()
        mock_response.choices[0].message.content = json.dumps([{"name": "only name"}])

        with patch("openai.OpenAI") as MockClient:
            MockClient.return_value.chat.completions.create.return_value = mock_response
            with pytest.raises(WarmupSuggestionError, match="description"):
                call_llm("prompt")

    def test_raises_when_openai_not_installed(self, settings):
        settings.HF_TOKEN = "test-key"
        with patch.dict(sys.modules, {"openai": None}):
            with pytest.raises(
                WarmupSuggestionError, match="openai package is not installed"
            ):
                call_llm("prompt")

    def test_raises_on_network_error(self, settings):
        settings.HF_TOKEN = "test-key"

        with patch("openai.OpenAI") as MockClient:
            MockClient.return_value.chat.completions.create.side_effect = (
                ConnectionError("timeout")
            )
            with pytest.raises(WarmupSuggestionError, match="LLM call failed"):
                call_llm("prompt")


# ---- get_or_generate_warmup_suggestions ----


FAKE_SUGGESTIONS = [{"name": "Arm circles", "description": "Warm up the shoulders."}]


class TestGetOrGenerateWarmupSuggestions:
    def test_returns_empty_for_workout_with_no_exercises(self, empty_workout):
        result = get_or_generate_warmup_suggestions(workout=empty_workout)
        assert result.suggestions == []
        assert result.exercises_hash == ""

    def test_cache_hit_returns_existing_without_calling_llm(self, workout):
        current_hash = compute_exercises_hash(workout)
        WarmupSuggestion.objects.create(
            workout=workout,
            exercises_hash=current_hash,
            suggestions=FAKE_SUGGESTIONS,
        )

        with patch("workout.warmup_suggestions_service.call_llm") as mock_call:
            result = get_or_generate_warmup_suggestions(workout=workout)

        mock_call.assert_not_called()
        assert result.suggestions == FAKE_SUGGESTIONS

    def test_cache_miss_on_hash_mismatch_regenerates(self, workout):
        WarmupSuggestion.objects.create(
            workout=workout,
            exercises_hash="stale-hash",
            suggestions=[{"name": "Old", "description": "Old suggestion."}],
        )

        with patch(
            "workout.warmup_suggestions_service.call_llm", return_value=FAKE_SUGGESTIONS
        ):
            result = get_or_generate_warmup_suggestions(workout=workout)

        assert result.suggestions == FAKE_SUGGESTIONS
        assert result.exercises_hash == compute_exercises_hash(workout)

    def test_no_existing_record_creates_new(self, workout):
        assert not WarmupSuggestion.objects.filter(workout=workout).exists()

        with patch(
            "workout.warmup_suggestions_service.call_llm", return_value=FAKE_SUGGESTIONS
        ):
            result = get_or_generate_warmup_suggestions(workout=workout)

        assert WarmupSuggestion.objects.filter(workout=workout).exists()
        assert result.suggestions == FAKE_SUGGESTIONS

    def test_propagates_llm_error(self, workout):
        with patch(
            "workout.warmup_suggestions_service.call_llm",
            side_effect=WarmupSuggestionError("LLM failed"),
        ):
            with pytest.raises(WarmupSuggestionError):
                get_or_generate_warmup_suggestions(workout=workout)


# ---- force_regenerate_warmup_suggestions ----


class TestForceRegenerateWarmupSuggestions:
    def test_always_calls_llm_even_on_cache_hit(self, workout):
        current_hash = compute_exercises_hash(workout)
        WarmupSuggestion.objects.create(
            workout=workout,
            exercises_hash=current_hash,
            suggestions=FAKE_SUGGESTIONS,
        )
        new_suggestions = [{"name": "New", "description": "New suggestion."}]

        with patch(
            "workout.warmup_suggestions_service.call_llm",
            return_value=new_suggestions,
        ) as mock_call:
            result = force_regenerate_warmup_suggestions(workout=workout)

        mock_call.assert_called_once()
        assert result.suggestions == new_suggestions

    def test_returns_empty_for_workout_with_no_exercises(self, empty_workout):
        result = force_regenerate_warmup_suggestions(workout=empty_workout)
        assert result.suggestions == []

    def test_propagates_llm_error(self, workout):
        with patch(
            "workout.warmup_suggestions_service.call_llm",
            side_effect=WarmupSuggestionError("LLM failed"),
        ):
            with pytest.raises(WarmupSuggestionError):
                force_regenerate_warmup_suggestions(workout=workout)

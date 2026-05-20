"""Service functions for AI-generated warm-up suggestions.

Kept in a separate module from services.py so the LLM interaction can be
mocked independently in tests without touching general workout services.
"""

import hashlib
import json

from django.conf import settings

from workout.models import WarmupSuggestion, Workout

# Human-readable labels for goal slugs used in the LLM prompt.
_GOAL_LABELS = {
    "weight_loss": "weight loss",
    "strength_gain": "strength gain",
    "general_health": "general health",
    "endurance": "endurance",
    "sport_performance": "sport performance",
    "injury_prevention_longevity": "injury prevention and longevity",
    "flexibility_mobility": "flexibility and mobility",
    "other": "other",
}


class WarmupSuggestionError(Exception):
    """Raised when warm-up suggestions cannot be generated or retrieved."""


def compute_exercises_hash(workout: Workout) -> str:
    """Return a SHA-256 hex digest of the ordered exercise names for a workout.

    The hash changes whenever the exercise list is reordered or renamed,
    making it a reliable cache-invalidation key for stored suggestions.
    """
    names = list(
        workout.exercises.order_by("order").values_list(
            "exercise_definition__name", flat=True
        )
    )
    raw = "|".join(names)
    return hashlib.sha256(raw.encode()).hexdigest()


def build_warmup_prompt(exercise_names: list, profile=None) -> str:
    """Build the LLM prompt for warm-up suggestions.

    Includes the upcoming exercise names and anonymous fitness attributes
    from the user profile (fitness_level, goals, injury_history).
    Personal identifiers (name, email, date_of_birth, weight, height) are
    deliberately excluded to avoid sending unnecessary PII to the LLM.
    """
    exercises_block = "\n".join(f"- {n}" for n in exercise_names)

    profile_lines = []
    if profile:
        if profile.fitness_level:
            profile_lines.append(f"- Fitness level: {profile.fitness_level}")
        if profile.goals:
            readable = [_GOAL_LABELS.get(g, g) for g in profile.goals]
            profile_lines.append(f"- Goals: {', '.join(readable)}")
        if profile.injury_history:
            profile_lines.append(f"- Injury history: {profile.injury_history}")

    profile_block = (
        "\n".join(profile_lines) if profile_lines else "- No profile data available"
    )

    return (
        "You are a sports coach. Suggest between 2 and 5 warm-up exercises to prepare "
        "for the following workout. Take into account the user's profile and the "
        "exercises coming up.\n\n"
        f"Upcoming exercises:\n{exercises_block}\n\n"
        f"User profile:\n{profile_block}\n\n"
        "Respond ONLY with a valid JSON array. Each element must have exactly two "
        'string keys: "name" and "description" (max 80 characters). '
        "No markdown, no explanation, no additional text."
    )


def call_llm(prompt: str) -> list:
    """Call the configured LLM and return the parsed list of suggestions.

    Raises WarmupSuggestionError for any failure: missing configuration,
    network errors, invalid JSON, or unexpected response shape.
    """
    if not settings.LLM_API_KEY:
        raise WarmupSuggestionError("AI suggestions are not configured.")

    try:
        import openai
    except ImportError as exc:
        raise WarmupSuggestionError("openai package is not installed.") from exc

    try:
        client = openai.OpenAI(
            api_key=settings.LLM_API_KEY,
            base_url=settings.LLM_API_BASE,
        )
        response = client.chat.completions.create(
            model=settings.LLM_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=512,
        )
        content = response.choices[0].message.content.strip()
    except Exception as exc:
        raise WarmupSuggestionError(f"LLM call failed: {exc}") from exc

    try:
        data = json.loads(content)
    except json.JSONDecodeError as exc:
        raise WarmupSuggestionError(f"LLM returned invalid JSON: {exc}") from exc

    if not isinstance(data, list):
        raise WarmupSuggestionError("LLM response is not a JSON array.")

    for item in data:
        if (
            not isinstance(item, dict)
            or "name" not in item
            or "description" not in item
        ):
            raise WarmupSuggestionError(
                "Each suggestion must have 'name' and 'description' keys."
            )

    return data


def get_or_generate_warmup_suggestions(
    *, workout: Workout, profile=None
) -> WarmupSuggestion:
    """Return cached suggestions for a workout, regenerating if stale.

    If the workout has no exercises, an empty suggestion record is stored
    and returned without calling the LLM. Otherwise the exercises hash is
    checked against the stored record; a mismatch triggers regeneration.

    Raises WarmupSuggestionError if the LLM call fails.
    """
    exercise_names = list(
        workout.exercises.order_by("order").values_list(
            "exercise_definition__name", flat=True
        )
    )
    if not exercise_names:
        obj, _ = WarmupSuggestion.objects.update_or_create(
            workout=workout,
            defaults={"exercises_hash": "", "suggestions": []},
        )
        return obj

    current_hash = compute_exercises_hash(workout)

    try:
        existing = WarmupSuggestion.objects.get(workout=workout)
        if existing.exercises_hash == current_hash:
            return existing
    except WarmupSuggestion.DoesNotExist:
        existing = None

    prompt = build_warmup_prompt(exercise_names, profile)
    suggestions = call_llm(prompt)

    obj, _ = WarmupSuggestion.objects.update_or_create(
        workout=workout,
        defaults={"exercises_hash": current_hash, "suggestions": suggestions},
    )
    return obj


def force_regenerate_warmup_suggestions(
    *, workout: Workout, profile=None
) -> WarmupSuggestion:
    """Unconditionally call the LLM and overwrite the stored suggestions.

    If the workout has no exercises, stores an empty record without calling
    the LLM. Raises WarmupSuggestionError if the LLM call fails.
    """
    exercise_names = list(
        workout.exercises.order_by("order").values_list(
            "exercise_definition__name", flat=True
        )
    )
    if not exercise_names:
        obj, _ = WarmupSuggestion.objects.update_or_create(
            workout=workout,
            defaults={"exercises_hash": "", "suggestions": []},
        )
        return obj

    current_hash = compute_exercises_hash(workout)
    prompt = build_warmup_prompt(exercise_names, profile)
    suggestions = call_llm(prompt)

    obj, _ = WarmupSuggestion.objects.update_or_create(
        workout=workout,
        defaults={"exercises_hash": current_hash, "suggestions": suggestions},
    )
    return obj

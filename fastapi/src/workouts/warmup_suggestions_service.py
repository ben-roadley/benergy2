"""Service functions for AI-generated warm-up suggestions.

Kept in a separate module from services.py so the LLM interaction can be
mocked independently in tests without touching general workout services.
"""

import hashlib
import json

from sqlmodel import Session, select

from ..config import LLM_API_KEY, LLM_API_BASE, LLM_MODEL
from .models import WorkoutWarmupsuggestion, WorkoutWorkout as Workout, WorkoutExercise
from ..catalog.models import CatalogExercisedefinition as ExerciseDefinition

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


def get_ordered_exercise_names(workout: Workout, session: Session) -> list[str]:
    """Return the ordered list of exercise names for a workout."""
    statement = (
        select(ExerciseDefinition.name)
        .join(
            WorkoutExercise,
            WorkoutExercise.exercise_definition_id == ExerciseDefinition.slug,
        )
        .where(WorkoutExercise.workout_id == workout.id)
        .order_by(WorkoutExercise.order)
    )
    return list(session.exec(statement).all())


def compute_exercises_hash(workout: Workout, session: Session) -> str:
    """Return a SHA-256 hex digest of the ordered exercise names for a workout.

    The hash changes whenever the exercise list is reordered or renamed,
    making it a reliable cache-invalidation key for stored suggestions.
    """
    names = get_ordered_exercise_names(workout, session)
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
    print(f"LLM_API_KEY: {LLM_API_KEY}")
    if not LLM_API_KEY:
        print("LLM_API_KEY is not set. Cannot call LLM.")
        raise WarmupSuggestionError("AI suggestions are not configured.")

    try:
        import openai
    except ImportError as exc:
        print("openai package is not installed. Cannot call LLM.")
        raise WarmupSuggestionError("openai package is not installed.") from exc

    try:
        print(f"Calling LLM with prompt:\n{prompt}")
        client = openai.OpenAI(
            api_key=LLM_API_KEY,
            base_url=LLM_API_BASE,
        )
        print(f"LLM client configured with base URL: {LLM_API_BASE}")
        response = client.chat.completions.create(
            model=LLM_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
            max_tokens=512,
        )
        print(f"LLM response received: {response}")
        content = response.choices[0].message.content.strip()
        print(f"LLM response: {content}")  # For debugging; remove in production
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
    *, workout: Workout, profile=None, session: Session
) -> WorkoutWarmupsuggestion:
    """Return cached suggestions for a workout, regenerating if stale.

    If the workout has no exercises, an empty suggestion record is stored
    and returned without calling the LLM. Otherwise the exercises hash is
    checked against the stored record; a mismatch triggers regeneration.

    Raises WarmupSuggestionError if the LLM call fails.
    """
    exercise_names = get_ordered_exercise_names(workout, session)

    if not exercise_names:
        return _upsert_warmup_suggestion(
            workout=workout, exercises_hash="", suggestions=[], session=session
        )

    current_hash = compute_exercises_hash(workout, session)

    existing = session.exec(
        select(WorkoutWarmupsuggestion).where(
            WorkoutWarmupsuggestion.workout_id == workout.id
        )
    ).one_or_none()

    if existing and existing.exercises_hash == current_hash:
        return existing

    prompt = build_warmup_prompt(exercise_names, profile)
    suggestions = call_llm(prompt)

    return _upsert_warmup_suggestion(
        workout=workout,
        exercises_hash=current_hash,
        suggestions=suggestions,
        session=session,
        existing=existing,
    )


def force_regenerate_warmup_suggestions(
    *, workout: Workout, profile=None, session: Session
) -> WorkoutWarmupsuggestion:
    """Unconditionally call the LLM and overwrite the stored suggestions.

    If the workout has no exercises, stores an empty record without calling
    the LLM. Raises WarmupSuggestionError if the LLM call fails.
    """
    exercise_names = get_ordered_exercise_names(workout, session)

    if not exercise_names:
        return _upsert_warmup_suggestion(
            workout=workout, exercises_hash="", suggestions=[], session=session
        )

    print(f"Regenerating warm-up suggestions for workout {workout.id}...")
    current_hash = compute_exercises_hash(workout, session)
    print(f"Current exercises hash: {current_hash}")
    prompt = build_warmup_prompt(exercise_names, profile)
    print(f"LLM prompt:\n{prompt}")
    suggestions = call_llm(prompt)
    print(f"LLM returned {len(suggestions)} suggestions.")

    existing = session.exec(
        select(WorkoutWarmupsuggestion).where(
            WorkoutWarmupsuggestion.workout_id == workout.id
        )
    ).one_or_none()

    return _upsert_warmup_suggestion(
        workout=workout,
        exercises_hash=current_hash,
        suggestions=suggestions,
        session=session,
        existing=existing,
    )


def _upsert_warmup_suggestion(
    *,
    workout: Workout,
    exercises_hash: str,
    suggestions: list,
    session: Session,
    existing: WorkoutWarmupsuggestion = None,
) -> WorkoutWarmupsuggestion:
    """Create or update the WarmupSuggestion record for a workout."""
    import datetime

    if existing:
        existing.exercises_hash = exercises_hash
        existing.suggestions = suggestions
        existing.generated_at = datetime.datetime.now(datetime.timezone.utc)
        session.add(existing)
        session.commit()
        session.refresh(existing)
        return existing

    obj = WorkoutWarmupsuggestion(
        workout_id=workout.id,
        exercises_hash=exercises_hash,
        suggestions=suggestions,
        generated_at=datetime.datetime.now(datetime.timezone.utc),
    )
    session.add(obj)
    session.commit()
    session.refresh(obj)
    return obj

"""Service helpers for workout business logic.

This module centralises business rules
related to workouts, exercises and workout logs. Moving persistence and
validation logic into services keeps serializers and views thin and
easier to reason about.

Public helpers include functions to create workout logs, update target
weights/reps from a session, and to create/modify workouts with nested
exercises and sets.
"""

from decimal import Decimal
from typing import Any, Dict, List, Optional, Tuple

from django.db import transaction

from catalog.models import ExerciseDefinition
from workout.models import Exercise, SetOfReps, Workout, WorkoutLog, WorkoutLogEntry


def is_workout_editable(*, workout: Workout) -> bool:
    """Return True when a workout has no training logs and can be edited."""
    return not WorkoutLog.objects.filter(workout=workout).exists()


def validate_allowed_update(
    *, workout: Workout, exercises_data: List[Dict[str, Any]]
) -> tuple[bool, Optional[str]]:
    """Validate that an incoming workout edit doesn't change structure when logs exist.

    Returns a tuple of (is_valid, error_message). If valid, error_message is None.
    """
    if not isinstance(exercises_data, (list, tuple)):
        return False, "Invalid exercises payload"

    existing_exercises = list(
        workout.exercises.order_by("order").prefetch_related("sets_of_reps")
    )
    if len(existing_exercises) != len(exercises_data):
        return False, "Cannot add or remove exercises when a workout has training logs."

    allowed_set_fields = {"nb_reps", "weight"}

    for index, (db_exercise, incoming_exercise) in enumerate(
        zip(existing_exercises, exercises_data), start=1
    ):
        if db_exercise.exercise_definition_id != incoming_exercise.get(
            "exercise_definition_slug"
        ):
            return (
                False,
                f"Cannot change exercise definition or order for exercise #{index}.",
            )

        incoming_sets = incoming_exercise.get("sets_of_reps") or []
        existing_sets = list(db_exercise.sets_of_reps.order_by("order"))
        if len(existing_sets) != len(incoming_sets):
            return (
                False,
                f"Cannot add or remove sets for exercise order #{db_exercise.order}.",
            )

        for set_index, (db_set, incoming_set) in enumerate(
            zip(existing_sets, incoming_sets), start=1
        ):
            if not isinstance(incoming_set, dict):
                return (
                    False,
                    f"Invalid set payload for exercise order "
                    f"#{db_exercise.order}, set #{set_index}.",
                )
            extra_fields = set(incoming_set.keys()) - allowed_set_fields
            if extra_fields:
                return False, (
                    f"Not allowed to change fields {sorted(list(extra_fields))}"
                    f" for sets when logs exist."
                )

    return True, None


def is_workout_stagnating(*, user, workout: Workout) -> bool:
    """Return True when the last three workout logs have identical entry patterns."""
    recent_logs = list(
        WorkoutLog.objects.filter(user=user, workout=workout).order_by("-completed_at")[
            :3
        ]
    )

    if len(recent_logs) < 3:
        return False

    def _log_pattern(
        log: WorkoutLog,
    ) -> Tuple[
        Tuple[Optional[int], Optional[int], Optional[int], Optional[float]], ...
    ]:
        entries = log.entries.order_by(
            "set_of_reps__exercise__order", "set_of_reps__order"
        )
        return tuple(
            (
                (e.set_of_reps.exercise.order if e.set_of_reps else None),
                (e.set_of_reps.order if e.set_of_reps else None),
                e.nb_reps_actual,
                (
                    float(e.weight_actual)
                    if getattr(e, "weight_actual", None) is not None
                    else None
                ),
            )
            for e in entries
        )

    patterns = [_log_pattern(log) for log in recent_logs]
    return patterns[0] == patterns[1] == patterns[2]


@transaction.atomic
def workout_log_create(
    *, user, workout_id: int, results: List[Dict[str, Any]]
) -> WorkoutLog:
    """Create a WorkoutLog and WorkoutLogEntry rows from a results payload.

    The function is forgiving about payload key naming (camelCase or snake_case).
    """
    workout = Workout.objects.get(pk=workout_id)

    created_log = WorkoutLog.objects.create(user=user, workout=workout)

    # Build a quick lookup from (exercise_order, set_order) -> set_of_reps id
    sets_of_reps = SetOfReps.objects.filter(exercise__workout=workout).select_related(
        "exercise"
    )
    set_lookup_by_order = {(s.exercise.order, s.order): s.pk for s in sets_of_reps}

    entries_to_create: List[WorkoutLogEntry] = []
    for item in results:
        set_of_reps_id = item.get("set_of_reps") or item.get("setOfReps")
        if set_of_reps_id is None:
            exercise_order = item.get("exercise_order") or item.get("exerciseOrder")
            set_order = item.get("set_order") or item.get("setOrder")
            if exercise_order is not None and set_order is not None:
                set_of_reps_id = set_lookup_by_order.get((exercise_order, set_order))

        if not set_of_reps_id:
            # skip unknown sets
            continue

        nb_reps_target = item.get("nb_reps_target") or item.get("nbRepsTarget")
        nb_reps_actual = item.get("nb_reps_actual") or item.get("nbRepsActual")
        weight_actual = (
            item.get("weight_actual") or item.get("weightActual") or item.get("weight")
        )
        weight_target = item.get("weight_target") or item.get("weightTarget")

        entries_to_create.append(
            WorkoutLogEntry(
                log=created_log,
                set_of_reps_id=set_of_reps_id,
                nb_reps_target=nb_reps_target,
                nb_reps_actual=nb_reps_actual,
                weight_actual=weight_actual,
                weight_target=weight_target,
            )
        )

    WorkoutLogEntry.objects.bulk_create(entries_to_create)

    update_targets(workout=workout, results=results)

    return created_log


def update_targets(*, workout: Workout, results: List[Dict[str, Any]]) -> None:
    """Update `SetOfReps` target weight/reps based on a batch of result entries."""
    sets_by_id = {
        s.id: s
        for s in SetOfReps.objects.filter(exercise__workout=workout).select_related(
            "exercise"
        )
    }

    sets_by_order = {(s.exercise.order, s.order): s for s in sets_by_id.values()}

    to_update: List[SetOfReps] = []
    fields_to_update: set[str] = set()

    for result in results:
        target_set: Optional[SetOfReps] = None
        set_id = result.get("set_of_reps") or result.get("setOfReps")
        if set_id:
            try:
                target_set = sets_by_id.get(int(set_id))
            except (TypeError, ValueError):
                target_set = None
        else:
            key = (result.get("exercise_order"), result.get("set_order"))
            target_set = sets_by_order.get(key)

        if target_set is None:
            continue

        changed = False

        entry_weight = (
            result.get("weight")
            or result.get("weight_actual")
            or result.get("weightActual")
        )
        nb_actual = result.get("nb_reps_actual") or result.get("nbRepsActual")

        weight_increased = entry_weight is not None and (
            target_set.weight is None or float(entry_weight) > float(target_set.weight)
        )
        weight_unchanged = entry_weight is None or (
            target_set.weight is not None
            and float(entry_weight) == float(target_set.weight)
        )

        if weight_increased:
            # Weight went up: update weight and set nb_reps to actual.
            target_set.weight = entry_weight
            fields_to_update.add("weight")
            if nb_actual is not None:
                target_set.nb_reps = int(nb_actual)
                fields_to_update.add("nb_reps")
            changed = True
        elif (
            weight_unchanged
            and nb_actual is not None
            and int(nb_actual) > target_set.nb_reps
        ):
            # Weight unchanged: only progress reps when actual beats the target.
            target_set.nb_reps = int(nb_actual)
            fields_to_update.add("nb_reps")
            changed = True
        # Weight decreased → leave both targets untouched.

        if changed:
            to_update.append(target_set)

    if to_update:
        SetOfReps.objects.bulk_update(to_update, fields=list(fields_to_update))


@transaction.atomic
def create_workout_with_exercises(
    *, workout_data: Dict[str, Any], exercises_data: List[Dict[str, Any]]
) -> Workout:
    """Create a Workout and its nested Exercise/SetOfReps rows from payload.

    Expects `workout_data` to contain top-level Workout fields (e.g. `name`) 
    and `exercises_data` to be a list of exercise payloads.
    """
    if not exercises_data:
        raise ValueError("A workout must have at least one exercise.")

    workout = Workout.objects.create(**workout_data)
    build_exercises(workout=workout, exercises_data=exercises_data)

    return workout


@transaction.atomic
def update_workout_from_payload(
    *,
    workout: Workout,
    workout_data: Dict[str, Any],
    exercises_data: Optional[List[Dict[str, Any]]],
) -> Workout:
    """Apply a validated payload to an existing Workout instance.

    - If `exercises_data` is None, perform a top-level partial update.
    - If the workout is editable and exercises are supplied, replace all exercises.
    - If not editable, only patch allowed SetOfReps fields after validation.

    Raises `ValueError` with a descriptive message on invalid operations.
    """
    # Top-level update when exercises not supplied
    if exercises_data is None:
        return apply_top_level_update(workout=workout, workout_data=workout_data)

    # Exercises provided
    if is_workout_editable(workout=workout):
        apply_top_level_update(workout=workout, workout_data=workout_data)
        replace_all_exercises(workout=workout, exercises_data=exercises_data)
        return workout

    # Non-editable: validate and patch allowed SetOfReps fields
    # Non-editable: validate and patch allowed SetOfReps fields
    ok, msg = validate_allowed_update(workout=workout, exercises_data=exercises_data)
    if not ok:
        raise ValueError(msg)

    patch_existing_sets(workout=workout, exercises_data=exercises_data)
    return workout


def build_exercises(*, workout: Workout, exercises_data: List[Dict[str, Any]]) -> None:
    """Create Exercise and SetOfReps rows for a Workout from incoming payload."""
    for order, ex in enumerate(exercises_data, start=1):
        exercise_def = ExerciseDefinition.objects.get(
            slug=ex["exercise_definition_slug"]
        )
        exercise = Exercise.objects.create(
            workout=workout, order=order, exercise_definition=exercise_def, rest_time_after=ex.get("rest_time_after", 60)
        )
        SetOfReps.objects.bulk_create(
            [
                SetOfReps(
                    exercise=exercise,
                    order=i,
                    nb_reps=s["nb_reps"],
                    weight=s.get("weight"),
                )
                for i, s in enumerate(ex["sets_of_reps"], start=1)
            ]
        )


def apply_top_level_update(
    *, workout: Workout, workout_data: Dict[str, Any]
) -> Workout:
    """Update basic Workout fields and persist the instance."""
    if not workout_data:
        return workout
    if not is_workout_editable(workout=workout):
        raise ValueError(
            "Workout cannot be edited because training logs exist; "
            "only SetOfReps nb_reps/weight may be updated."
        )
    workout.name = workout_data.get("name", workout.name)
    workout.description = workout_data.get("description", workout.description)
    workout.save()
    return workout


def replace_all_exercises(
    *, workout: Workout, exercises_data: List[Dict[str, Any]]
) -> None:
    """Delete existing exercises and rebuild them from payload."""
    workout.exercises.all().delete()
    build_exercises(workout=workout, exercises_data=exercises_data)


def patch_existing_sets(
    *, workout: Workout, exercises_data: List[Dict[str, Any]]
) -> None:
    """Patch allowed fields on existing SetOfReps for a non-editable workout."""
    for order, ex in enumerate(exercises_data, start=1):
        exercise = workout.exercises.get(order=order)
        for s_index, s_payload in enumerate(ex.get("sets_of_reps", []), start=1):
            set_obj = exercise.sets_of_reps.get(order=s_index)
            update_fields = []
            if "nb_reps" in s_payload:
                set_obj.nb_reps = s_payload.get("nb_reps")
                update_fields.append("nb_reps")
            if "weight" in s_payload:
                set_obj.weight = s_payload.get("weight")
                update_fields.append("weight")
            if update_fields:
                set_obj.save(update_fields=update_fields)


def compute_volume_insights(
    *, workout: Workout, profile_weight_kg: Optional[Decimal]
) -> dict:
    """Compute per-exercise and total training volume over time for a workout.

    For each completed session (WorkoutLog), computes the volume
    (reps × effective weight) for every exercise. Bodyweight exercises
    fall back to the user's profile weight when available, or 0.0.

    Returns a dict with session labels, per-exercise volumes, and total
    volume per session. Empty lists are returned when no logs exist.
    """
    logs = list(
        WorkoutLog.objects.filter(workout=workout)
        .order_by("completed_at")
        .prefetch_related("entries__set_of_reps__exercise")
    )
    exercises = list(
        workout.exercises.order_by("order").select_related("exercise_definition")
    )

    # Determine is_bodyweight for each exercise across all sessions.
    exercise_all_bodyweight: Dict[int, bool] = {ex.pk: True for ex in exercises}
    for log in logs:
        for entry in log.entries.all():
            ex_pk = entry.set_of_reps.exercise_id
            if ex_pk in exercise_all_bodyweight:
                if (
                    entry.weight_actual is not None
                    and float(entry.weight_actual) != 0.0
                ):
                    exercise_all_bodyweight[ex_pk] = False

    sessions = []
    total_volume: List[float] = []
    exercise_volumes: Dict[int, List[float]] = {ex.pk: [] for ex in exercises}

    for log in logs:
        label = log.completed_at.strftime("%d %b").lstrip("0")
        sessions.append(label)

        # Group entries by exercise pk.
        entries_by_exercise: Dict[int, list] = {ex.pk: [] for ex in exercises}
        for entry in log.entries.all():
            ex_pk = entry.set_of_reps.exercise_id
            if ex_pk in entries_by_exercise:
                entries_by_exercise[ex_pk].append(entry)

        session_total = 0.0
        for ex in exercises:
            vol = 0.0
            for entry in entries_by_exercise[ex.pk]:
                if (
                    entry.weight_actual is not None
                    and float(entry.weight_actual) != 0.0
                ):
                    eff_weight = float(entry.weight_actual)
                elif profile_weight_kg is not None:
                    eff_weight = float(profile_weight_kg)
                else:
                    eff_weight = 0.0
                vol += entry.nb_reps_actual * eff_weight
            exercise_volumes[ex.pk].append(vol)
            session_total += vol
        total_volume.append(session_total)

    return {
        "workout_name": workout.name,
        "bodyweight_kg": (
            float(profile_weight_kg) if profile_weight_kg is not None else None
        ),
        "sessions": sessions,
        "total_volume": total_volume,
        "exercises": [
            {
                "name": ex.exercise_definition.name,
                "order": ex.order,
                "is_bodyweight": exercise_all_bodyweight[ex.pk],
                "volume_per_session": exercise_volumes[ex.pk],
            }
            for ex in exercises
        ],
    }

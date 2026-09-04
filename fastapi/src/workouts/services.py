import datetime
from typing import Optional, Tuple, Dict, List
from sqlmodel import Session, select

from ..catalog.models import CatalogExercisedefinition as ExerciseDefinition

from .schemas import (
    WorkoutListItem,
    WorkoutWithExercisesDetails,
    WorkoutLogListItem,
    WorkoutLogEntryListItem,
    WorkoutLogEntrySetListItem,
    WorkoutVolumeInsightsDetails,
    WorkoutResultItem,
)
from .models import WorkoutWorkout as Workout
from .models import WorkoutWorkoutlog as WorkoutLog
from .models import WorkoutWorkoutlogentry as WorkoutLogEntry
from .models import WorkoutSetofreps as SetOfReps
from .models import WorkoutExercise as Exercise


def workout_log_create(
    user_id: int, workout_id: int, results: list[WorkoutResultItem], session: Session
) -> WorkoutLog:
    """Create a WorkoutLog and WorkoutLogEntry rows from a results payload.

    The function is forgiving about payload key naming (camelCase or snake_case).
    """
    workout = get_workout(user_id=user_id, workout_id=workout_id, session=session)
    if workout is None:
        raise ValueError(f"Workout {workout_id} not found.")

    now = datetime.datetime.now(datetime.timezone.utc)
    log = WorkoutLog(user_id=user_id, workout_id=workout.id, completed_at=now)
    session.add(log)
    session.flush()

    sets_statement = (
        select(SetOfReps, Exercise)
        .join(Exercise, SetOfReps.exercise)
        .where(Exercise.workout_id == workout.id)
    )
    sets_result = session.exec(sets_statement).all()
    set_lookup_by_id = {set_of_reps.id: set_of_reps for set_of_reps, _ in sets_result}
    set_lookup_by_order = {
        (exercise.order, set_of_reps.order): set_of_reps.id
        for set_of_reps, exercise in sets_result
    }

    resolved_sets = []
    for item in results:
        if item.set_of_reps is not None:
            target_set = set_lookup_by_id.get(item.set_of_reps)
        else:
            target_set_id = set_lookup_by_order.get(
                (item.exercise_order, item.set_order)
            )
            target_set = set_lookup_by_id.get(target_set_id)

        if target_set is None:
            raise ValueError("Workout result references an invalid set of reps.")
        if target_set.id in {set_obj.id for set_obj in resolved_sets}:
            raise ValueError("Workout results contain a duplicate set of reps.")
        resolved_sets.append(target_set)

        session.add(
            WorkoutLogEntry(
                log_id=log.id,
                set_of_reps_id=target_set.id,
                nb_reps_target=item.nb_reps_target,
                nb_reps_actual=item.nb_reps_actual,
                weight_actual=item.weight_actual,
                weight_target=item.weight_target,
            )
        )

    update_targets(session=session, workout=workout, results=results)

    session.commit()
    return log


def update_targets(
    session: Session, workout: Workout, results: list[WorkoutResultItem]
) -> None:
    """Update SetOfReps target weight/reps based on a batch of result entries."""
    sets_statement = (
        select(SetOfReps, Exercise)
        .join(Exercise, SetOfReps.exercise)
        .where(Exercise.workout_id == workout.id)
    )
    sets_result = session.exec(sets_statement).all()
    sets_by_id = {s.id: s for s, _ in sets_result}
    sets_by_order = {(ex.order, s.order): s for s, ex in sets_result}

    for result in results:
        if result.set_of_reps is not None:
            target_set = sets_by_id.get(result.set_of_reps)
        else:
            key = (result.exercise_order, result.set_order)
            target_set = sets_by_order.get(key)

        if target_set is None:
            raise ValueError("Workout result references an invalid set of reps.")

        entry_weight = result.weight_actual
        nb_actual = result.nb_reps_actual

        weight_increased = entry_weight is not None and (
            target_set.weight is None or float(entry_weight) > float(target_set.weight)
        )
        weight_unchanged = entry_weight is None or (
            target_set.weight is not None
            and float(entry_weight) == float(target_set.weight)
        )

        if weight_increased:
            target_set.weight = entry_weight
            if nb_actual is not None:
                target_set.nb_reps = int(nb_actual)
            session.add(target_set)
        elif (
            weight_unchanged
            and nb_actual is not None
            and int(nb_actual) > target_set.nb_reps
        ):
            target_set.nb_reps = int(nb_actual)
            session.add(target_set)


def get_workout_list_item(workout: Workout, session: Session) -> WorkoutListItem:
    return WorkoutListItem(
        id=workout.id,
        name=workout.name,
        description=workout.description,
        user=workout.user,
        is_editable=is_workout_editable(workout=workout, session=session),
        is_stagnating=is_workout_stagnating(workout=workout, session=session),
    )


def get_workout_details(
    workout: Workout, session: Session
) -> WorkoutWithExercisesDetails:
    return WorkoutWithExercisesDetails(
        id=workout.id,
        name=workout.name,
        description=workout.description,
        user=workout.user,
        exercises=workout.exercises,
        is_editable=is_workout_editable(workout=workout, session=session),
        is_stagnating=is_workout_stagnating(workout=workout, session=session),
    )


def get_workouts(user_id: int, session: Session) -> list[WorkoutListItem]:
    statement = select(Workout).where(Workout.user_id == user_id)
    results = session.exec(statement).all()
    return [get_workout_list_item(workout, session) for workout in results]


def get_workout(user_id: int, workout_id: int, session: Session) -> Optional[Workout]:
    statement = select(Workout).where(
        Workout.user_id == user_id, Workout.id == workout_id
    )
    result = session.exec(statement).one_or_none()
    return result


def last_workout_session(user_id: int, session: Session) -> Optional[dict]:
    statement = (
        select(WorkoutLog)
        .where(WorkoutLog.user_id == user_id)
        .order_by(WorkoutLog.completed_at.desc())
    )
    last_log = session.exec(statement).first()

    if not last_log:
        return None

    return {
        "workout_name": last_log.workout.name,
        "completed_at": last_log.completed_at,
    }


def get_workout_logs(
    user_id: int, workout_id: int, session: Session
) -> Optional[list[WorkoutLogListItem]]:
    statement = (
        select(
            WorkoutLog.id, WorkoutLog.completed_at, Workout.name.label("workout_name")
        )
        .join(Workout)
        .where(WorkoutLog.user_id == user_id, WorkoutLog.workout_id == workout_id)
        .order_by(WorkoutLog.completed_at.desc())
    )
    workout_logs = session.exec(statement).all()

    formatted_workout_logs = []
    for workout_log in workout_logs:
        log_entry_statement = (
            select(
                WorkoutLogEntry,
                SetOfReps,
                Exercise,
                ExerciseDefinition.name.label("exercise_name"),
            )
            .join(SetOfReps, WorkoutLogEntry.set_of_reps)
            .join(Exercise, SetOfReps.exercise)
            .join(ExerciseDefinition, Exercise.exercise_definition)
            .where(WorkoutLogEntry.log_id == workout_log.id)
            .order_by(Exercise.order, SetOfReps.order)
        )
        log_entries = session.exec(log_entry_statement).all()

        log_exercises = []
        for entry in group_log_entries_by_exercise(log_entries):
            entry_sets = []
            for set in entry["sets"]:
                entry_sets.append(
                    WorkoutLogEntrySetListItem(
                        set_order=set["set_order"],
                        nb_reps_actual=set["nb_reps_actual"],
                        nb_reps_target=set["nb_reps_target"],
                        weight_actual=set["weight_actual"],
                        weight_target=set["weight_target"],
                    )
                )

            log_exercises.append(
                WorkoutLogEntryListItem(
                    exercise_name=entry["exercise_name"],
                    exercise_order=entry["exercise_order"],
                    sets=entry_sets,
                )
            )

        formatted_workout_logs.append(
            WorkoutLogListItem(
                id=workout_log.id,
                workout_name=workout_log.workout_name,
                completed_at=workout_log.completed_at,
                exercises=log_exercises,
            )
        )

    return formatted_workout_logs


def group_log_entries_by_exercise(entries):
    """Group log entries by exercise, ordered by exercise_order."""
    grouped = {}

    for e in entries:
        log_entry, set_of_reps, exercise, exercise_name = e
        key = exercise.order
        if key not in grouped:
            grouped[key] = {
                "exercise_name": exercise_name,
                "exercise_order": exercise.order,
                "sets": [],
            }
        grouped[key]["sets"].append(
            {
                "set_order": set_of_reps.order,
                "nb_reps_actual": log_entry.nb_reps_actual,
                "nb_reps_target": log_entry.nb_reps_target,
                "weight_actual": log_entry.weight_actual,
                "weight_target": log_entry.weight_target,
            }
        )
    return list(grouped.values())


def is_workout_editable(workout: Workout, session: Session) -> bool:
    """Return True when a workout has no training logs and can be edited."""
    if workout is None:
        raise ValueError("workout must be provided")

    statement = select(WorkoutLog).where(WorkoutLog.workout_id == workout.id)
    logs = session.exec(statement).all()
    return len(logs) == 0


def is_workout_stagnating(workout: Workout, session: Session) -> bool:
    """Return True when the last three workout logs have identical entry patterns."""
    if workout is None:
        raise ValueError("workout must be provided")

    statement = (
        select(WorkoutLog)
        .where(
            WorkoutLog.user_id == workout.user_id,
            WorkoutLog.workout_id == workout.id,
        )
        .order_by(WorkoutLog.completed_at.desc())
    )
    recent_logs = session.exec(statement).all()[:3]

    if len(recent_logs) < 3:
        return False

    def _log_pattern(
        session: Session,
        log: "WorkoutLog",
    ) -> Tuple[
        Tuple[Optional[int], Optional[int], Optional[int], Optional[float]], ...
    ]:
        statement = (
            select(WorkoutLogEntry)
            .join(
                WorkoutLogEntry.set_of_reps
            )  # Ensure relationship is joined for ordering
            .join(SetOfReps.exercise)  # Ensure exercise is joined for ordering
            .where(WorkoutLogEntry.log_id == log.id)
            .order_by(Exercise.order, SetOfReps.order)
        )

        entries = session.exec(statement).all()

        return tuple(
            (
                (
                    e.set_of_reps.exercise.order
                    if e.set_of_reps and e.set_of_reps.exercise
                    else None
                ),
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

    patterns = [_log_pattern(session, log) for log in recent_logs]
    return patterns[0] == patterns[1] == patterns[2]


def validate_allowed_update(
    session: Session,
    workout: Workout,
    exercises_data: list[dict],
) -> tuple[bool, str | None]:
    """Validate that a payload doesn't change workout structure when logs exist."""
    existing_exercises = list(
        session.exec(
            select(Exercise)
            .where(Exercise.workout_id == workout.id)
            .order_by(Exercise.order)
        ).all()
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
        existing_sets = list(
            session.exec(
                select(SetOfReps)
                .where(SetOfReps.exercise_id == db_exercise.id)
                .order_by(SetOfReps.order)
            ).all()
        )

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
                    f"Invalid set payload for exercise order #{db_exercise.order}, set #{set_index}.",
                )
            extra_fields = set(incoming_set.keys()) - allowed_set_fields
            if extra_fields:
                return (
                    False,
                    f"Not allowed to change fields {sorted(list(extra_fields))} for sets when logs exist.",
                )

    return True, None


def build_exercises(
    session: Session, workout: Workout, exercises_data: list[dict]
) -> None:
    """Create Exercise and SetOfReps rows for a Workout from incoming payload."""
    for order, ex in enumerate(exercises_data, start=1):
        exercise_def = session.exec(
            select(ExerciseDefinition).where(
                ExerciseDefinition.slug == ex["exercise_definition_slug"]
            )
        ).one_or_none()
        if exercise_def is None:
            raise ValueError(
                f"Exercise definition '{ex['exercise_definition_slug']}' not found."
            )

        exercise = Exercise(
            workout_id=workout.id,
            order=order,
            exercise_definition_id=exercise_def.slug,
            rest_time_after=ex.get("rest_time_after", 60),
        )
        session.add(exercise)
        session.flush()

        for i, s in enumerate(ex["sets_of_reps"], start=1):
            session.add(
                SetOfReps(
                    exercise_id=exercise.id,
                    order=i,
                    nb_reps=s["nb_reps"],
                    weight=s.get("weight"),
                )
            )


def apply_top_level_update(
    session: Session, workout: Workout, workout_data: dict
) -> Workout:
    """Update basic Workout fields and persist the instance."""
    if not workout_data:
        return workout
    if not is_workout_editable(workout=workout, session=session):
        raise ValueError(
            "Workout cannot be edited because training logs exist; "
            "only SetOfReps nb_reps/weight may be updated."
        )
    if "name" in workout_data:
        workout.name = workout_data["name"]
    if "description" in workout_data:
        workout.description = workout_data["description"]
    workout.updated_at = datetime.datetime.now(datetime.timezone.utc)
    session.add(workout)
    return workout


def replace_all_exercises(
    session: Session, workout: Workout, exercises_data: list[dict]
) -> None:
    """Delete existing exercises and rebuild them from payload."""
    existing = session.exec(
        select(Exercise).where(Exercise.workout_id == workout.id)
    ).all()
    for ex in existing:
        sets = session.exec(
            select(SetOfReps).where(SetOfReps.exercise_id == ex.id)
        ).all()
        for s in sets:
            session.delete(s)
        session.delete(ex)
    session.flush()
    build_exercises(session=session, workout=workout, exercises_data=exercises_data)


def patch_existing_sets(
    session: Session, workout: Workout, exercises_data: list[dict]
) -> None:
    """Patch allowed fields on existing SetOfReps for a non-editable workout."""
    for order, ex in enumerate(exercises_data, start=1):
        exercise = session.exec(
            select(Exercise).where(
                Exercise.workout_id == workout.id, Exercise.order == order
            )
        ).one()
        for s_index, s_payload in enumerate(ex.get("sets_of_reps", []), start=1):
            set_obj = session.exec(
                select(SetOfReps).where(
                    SetOfReps.exercise_id == exercise.id, SetOfReps.order == s_index
                )
            ).one()
            if "nb_reps" in s_payload:
                set_obj.nb_reps = s_payload["nb_reps"]
            if "weight" in s_payload:
                set_obj.weight = s_payload["weight"]
            session.add(set_obj)


def create_workout_with_exercises(
    session: Session,
    user_id: int,
    workout_data: dict,
    exercises_data: list[dict],
) -> WorkoutWithExercisesDetails:
    """Create a Workout and its nested Exercise/SetOfReps rows, then return its full details."""
    if not exercises_data:
        raise ValueError("A workout must have at least one exercise.")

    now = datetime.datetime.now(datetime.timezone.utc)
    workout = Workout(user_id=user_id, updated_at=now, **workout_data)
    session.add(workout)
    session.flush()

    build_exercises(session=session, workout=workout, exercises_data=exercises_data)

    session.commit()
    session.refresh(workout)
    return get_workout_details(workout, session)


def update_workout_from_payload(
    session: Session,
    workout: Workout,
    workout_data: dict,
    exercises_data: list[dict] | None,
) -> WorkoutWithExercisesDetails:
    """Apply a validated payload to a workout, persist it, and return its full details."""
    if exercises_data is None:
        apply_top_level_update(
            session=session, workout=workout, workout_data=workout_data
        )
    elif is_workout_editable(workout=workout, session=session):
        apply_top_level_update(
            session=session, workout=workout, workout_data=workout_data
        )
        replace_all_exercises(
            session=session, workout=workout, exercises_data=exercises_data
        )
    else:
        ok, msg = validate_allowed_update(
            session=session, workout=workout, exercises_data=exercises_data
        )
        if not ok:
            raise ValueError(msg)
        patch_existing_sets(
            session=session, workout=workout, exercises_data=exercises_data
        )

    session.commit()
    session.refresh(workout)
    return get_workout_details(workout, session)


def compute_volume_insights(
    session: Session, workout: Workout, profile_weight_kg: float = None
) -> dict:
    """Compute per-exercise and total training volume over time for a workout.

    For each completed session (WorkoutLog), computes the volume
    (reps × effective weight) for every exercise. Bodyweight exercises
    fall back to the user's profile weight when available, or 0.0.

    Returns a dict with session labels, per-exercise volumes, and total
    volume per session. Empty lists are returned when no logs exist.
    """
    statement = (
        select(WorkoutLog)
        .where(WorkoutLog.workout_id == workout.id)
        .order_by(WorkoutLog.completed_at)
    )
    logs = session.exec(statement).all()

    statement = (
        select(Exercise)
        .where(Exercise.workout_id == workout.id)
        .order_by(Exercise.order)
    )
    exercises = session.exec(statement).all()

    # Determine is_bodyweight for each exercise across all sessions.
    exercise_all_bodyweight: Dict[int, bool] = {ex.id: True for ex in exercises}
    for log in logs:
        log_entry_statement = (
            select(
                WorkoutLogEntry,
                SetOfReps,
                Exercise,
            )
            .join(SetOfReps, WorkoutLogEntry.set_of_reps)
            .join(Exercise, SetOfReps.exercise)
            .where(WorkoutLogEntry.log_id == log.id)
            .order_by(Exercise.order, SetOfReps.order)
        )
        log_entries = session.exec(log_entry_statement).all()

        for entry in log_entries:
            ex_pk = entry[1].exercise_id
            if ex_pk in exercise_all_bodyweight:
                if (
                    entry[0].weight_actual is not None
                    and float(entry[0].weight_actual) != 0.0
                ):
                    exercise_all_bodyweight[ex_pk] = False

    sessions = []
    total_volume: List[float] = []
    exercise_volumes: Dict[int, List[float]] = {ex.id: [] for ex in exercises}

    for log in logs:
        label = log.completed_at.strftime("%d %b").lstrip("0")
        sessions.append(label)

        # Group entries by exercise id
        entries_by_exercise: Dict[int, list] = {ex.id: [] for ex in exercises}
        log_entry_statement = (
            select(
                WorkoutLogEntry,
                SetOfReps,
                Exercise,
            )
            .join(SetOfReps, WorkoutLogEntry.set_of_reps)
            .join(Exercise, SetOfReps.exercise)
            .where(WorkoutLogEntry.log_id == log.id)
            .order_by(Exercise.order, SetOfReps.order)
        )
        log_entries = session.exec(log_entry_statement).all()
        for entry in log_entries:
            ex_pk = entry[1].exercise_id
            if ex_pk in entries_by_exercise:
                entries_by_exercise[ex_pk].append(entry)

        session_total = 0.0
        for ex in exercises:
            vol = 0.0
            for entry in entries_by_exercise[ex.id]:
                if (
                    entry[0].weight_actual is not None
                    and float(entry[0].weight_actual) != 0.0
                ):
                    eff_weight = float(entry[0].weight_actual)
                elif profile_weight_kg is not None:
                    eff_weight = float(profile_weight_kg)
                else:
                    eff_weight = 0.0
                vol += entry[0].nb_reps_actual * eff_weight
            exercise_volumes[ex.id].append(vol)
            session_total += vol
        total_volume.append(session_total)

    return WorkoutVolumeInsightsDetails(
        workout_name=workout.name,
        bodyweight_kg=(
            float(profile_weight_kg) if profile_weight_kg is not None else None
        ),
        sessions=sessions,
        total_volume=total_volume,
        exercises=[
            {
                "name": ex.exercise_definition.name,
                "order": ex.order,
                "is_bodyweight": exercise_all_bodyweight[ex.id],
                "volume_per_session": exercise_volumes[ex.id],
            }
            for ex in exercises
        ],
    )

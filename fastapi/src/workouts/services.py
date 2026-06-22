from typing import Optional, Tuple, Dict, List
from sqlmodel import Session, select

from ..catalog.models import CatalogExercisedefinition as ExerciseDefinition

from .schemas import (
    WorkoutListItem,
    WorkoutLogListItem,
    WorkoutLogEntryListItem,
    WorkoutLogEntrySetListItem,
    WorkoutVolumeInsightsDetails,
)
from ..database import engine

from .models import WorkoutWorkout as Workout
from .models import WorkoutWorkoutlog as WorkoutLog
from .models import WorkoutWorkoutlogentry as WorkoutLogEntry
from .models import WorkoutSetofreps as SetOfReps
from .models import WorkoutExercise as Exercise
from .models import WorkoutWorkoutlog as WorkoutLog


def get_workouts(user_id: int, session: Session) -> list[WorkoutListItem]:
    statement = select(Workout).where(Workout.user_id == user_id)
    results = session.exec(statement).all()
    return [WorkoutListItem.model_validate(workout) for workout in results]


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


def is_workout_editable(workout: Workout = None) -> bool:
    """Return True when a workout has no training logs and can be edited."""
    if workout is None:
        raise ValueError("workout must be provided")

    with Session(engine) as session:
        statement = select(WorkoutLog).where(WorkoutLog.workout_id == workout.id)
        logs = session.exec(statement).all()
        return len(logs) == 0


def is_workout_stagnating(workout: Workout = None) -> bool:
    """Return True when the last three workout logs have identical entry patterns."""
    if workout is None:
        raise ValueError("workout must be provided")

    user_id = workout.user.id

    with Session(engine) as session:
        statement = (
            select(WorkoutLog)
            .where(WorkoutLog.user_id == user_id, WorkoutLog.workout_id == workout.id)
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

from typing import Optional, Tuple

from sqlmodel import Session, select

from ..catalog.models import CatalogExercisedefinition as ExerciseDefinition

from .schemas import WorkoutBaseSchema, WorkoutLogBaseSchema, WorkoutLogEntryBaseSchema, WorkoutLogEntrySetBaseSchema
from ..database import engine

from .models import WorkoutWorkout as Workout
from .models import WorkoutWorkoutlog as WorkoutLog
from .models import WorkoutWorkoutlogentry as WorkoutLogEntry
from .models import WorkoutSetofreps as SetOfReps
from .models import WorkoutExercise as Exercise
from .models import WorkoutWorkoutlog as WorkoutLog


def get_workouts(user_id: int, session: Session) -> list[WorkoutBaseSchema]:
    statement = select(Workout).where(Workout.user_id == user_id)
    results = session.exec(statement).all()
    return [WorkoutBaseSchema.model_validate(workout) for workout in results]



def get_workout(user_id: int, workout_id: int, session: Session) -> Optional[Workout]:
    statement = select(Workout).where(Workout.user_id == user_id, Workout.id == workout_id)
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


def get_workout_logs(user_id: int, workout_id: int, session: Session) -> Optional[list[WorkoutLogBaseSchema]]:
    statement = (
        select(
            WorkoutLog.id,
            WorkoutLog.completed_at,
            Workout.name.label("workout_name")
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
                ExerciseDefinition.name.label("exercise_name")
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
                    WorkoutLogEntrySetBaseSchema(
                        set_order=set["set_order"],
                        nb_reps_actual=set["nb_reps_actual"],
                        nb_reps_target=set["nb_reps_target"],
                        weight_actual=set["weight_actual"],
                        weight_target=set["weight_target"]
                    )
                )

            log_exercises.append(
                WorkoutLogEntryBaseSchema(
                    exercise_name=entry["exercise_name"],
                    exercise_order=entry["exercise_order"],
                    sets=entry_sets
                )
            )

        formatted_workout_logs.append(
            WorkoutLogBaseSchema(
                id=workout_log.id,
                workout_name=workout_log.workout_name,
                completed_at=workout_log.completed_at,
                exercises=log_exercises
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
        statement = select(WorkoutLog).where(WorkoutLog.user_id == user_id, WorkoutLog.workout_id == workout.id).order_by(WorkoutLog.completed_at.desc())
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
            .join(WorkoutLogEntry.set_of_reps) # Ensure relationship is joined for ordering
            .join(SetOfReps.exercise)   # Ensure exercise is joined for ordering
            .where(WorkoutLogEntry.log_id == log.id)
            .order_by(
                Exercise.order,
                SetOfReps.order
            )
        )

        entries = session.exec(statement).all()

        return tuple(
            (
                (e.set_of_reps.exercise.order if e.set_of_reps and e.set_of_reps.exercise else None),
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
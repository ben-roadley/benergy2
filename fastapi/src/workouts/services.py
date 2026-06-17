from typing import Optional, Tuple

from sqlmodel import Session, select

from src.workouts.schemas import WorkoutBaseSchema
from src.database import engine

from src.workouts.models import WorkoutWorkout as Workout
from src.workouts.models import WorkoutWorkoutlog as WorkoutLog
from src.workouts.models import WorkoutWorkoutlogentry as WorkoutLogEntry
from src.workouts.models import WorkoutSetofreps as SetOfReps
from src.workouts.models import WorkoutExercise as Exercise


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
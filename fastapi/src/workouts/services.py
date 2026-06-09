from typing import Optional, Tuple

from fastapi import Depends
from sqlmodel import Session, select

from src.database import get_session, engine

# from src.workouts.models import t_workout_workout as Workout
from src.workouts.models import WorkoutWorkout as Workout
from src.workouts.models import WorkoutWorkoutlog as WorkoutLog
from src.workouts.models import WorkoutWorkoutlogentry as WorkoutLogEntry
from src.workouts.models import WorkoutSetofreps as SetOfReps
from src.workouts.models import WorkoutExercise as Exercise


def get_workouts(session: Session = Depends(get_session), user_id: int = None):
    if user_id is None:
        raise ValueError("user_id must be provided")
    statement = select(Workout).where(Workout.user_id == user_id)
    results = session.exec(statement).all()
    return results


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
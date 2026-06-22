from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from sqlmodel import Session

from ..dependencies import get_session

from ..auth.services import get_current_active_user
from ..users.schemas import UserSchema as User

from .schemas import (
    WorkoutBaseSchema,
    WorkoutWithExercisesBaseSchema,
    WorkoutLogBaseSchema,
)
from .services import get_workouts, get_workout, last_workout_session, get_workout_logs

router = APIRouter(prefix="/workouts", tags=["workouts"])


@router.get("/", response_model=list[WorkoutBaseSchema])
def fetch_workouts(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    return get_workouts(user_id=current_user.id, session=session)


@router.get("/last-session/")
def fetch_last_workout_session(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    """Endpoint to fetch the user's last workout session details."""
    result = last_workout_session(user_id=current_user.id, session=session)
    if not result:
        raise HTTPException(status_code=404, detail="No workout sessions found.")
    return result


@router.get("/{workout_id}/logs", response_model=list[WorkoutLogBaseSchema])
def fetch_workout_logs(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    w = get_workout_logs(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    if not w:
        raise HTTPException(status_code=404, detail="Workout not found.")
    return w


@router.get("/{workout_id}/", response_model=WorkoutWithExercisesBaseSchema)
def fetch_workout(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    w = get_workout(user_id=current_user.id, workout_id=workout_id, session=session)
    if not w:
        raise HTTPException(status_code=404, detail="Workout not found.")
    return w

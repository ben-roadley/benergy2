from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from sqlmodel import Session

from ..dependencies import get_session

from ..auth.services import get_current_active_user
from ..users.schemas import User
from ..users.services import get_or_create_profile

from .schemas import (
    WorkoutListItem,
    WorkoutWithExercisesDetails,
    WorkoutLogListItem,
    WorkoutVolumeInsightsDetails,
)
from .services import (
    compute_volume_insights,
    get_workouts,
    get_workout,
    last_workout_session,
    get_workout_logs,
)

router = APIRouter(prefix="/workouts", tags=["workouts"])


@router.get("/", response_model=list[WorkoutListItem])
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


@router.get(
    "/{workout_id}/insights/volume/", response_model=WorkoutVolumeInsightsDetails
)
def fetch_workout_insights_volume(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    workout = get_workout(
        user_id=current_user.id, workout_id=workout_id, session=session
    )
    profile = get_or_create_profile(user_id=current_user.id, session=session)
    return compute_volume_insights(
        session=session,
        workout=workout,
        profile_weight_kg=profile.weight_kg,
    )


@router.get("/{workout_id}/logs", response_model=list[WorkoutLogListItem])
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


@router.get("/{workout_id}/", response_model=WorkoutWithExercisesDetails)
def fetch_workout(
    workout_id: int,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    w = get_workout(user_id=current_user.id, workout_id=workout_id, session=session)
    if not w:
        raise HTTPException(status_code=404, detail="Workout not found.")
    return w

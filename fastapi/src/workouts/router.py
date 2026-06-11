from fastapi import APIRouter, Depends
from typing import Annotated
from sqlmodel import Session

from ..dependencies import get_session

from ..auth.services import get_current_active_user
from ..users.schemas import UserSchema as User

from .schemas import WorkoutBaseSchema
from .services import get_workouts

router = APIRouter(prefix="/workouts", tags=["workouts"])

@router.get("/", response_model=list[WorkoutBaseSchema])
def fetch_workouts(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session)
):
    return get_workouts(user_id=current_user.id, session=session)
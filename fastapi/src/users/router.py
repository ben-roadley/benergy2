from fastapi import APIRouter, Depends
from typing import Annotated

from sqlmodel import Session

from ..dependencies import get_session
from .schemas import (
    UserSchema as User,
    ProfileDetails,
    ProfileOptionsDetails,
    ProfileUpdate,
)
from .services import (
    get_or_create_profile,
    get_profile_options,
    clear_profile,
    update_profile,
)
from ..auth.services import get_current_active_user

user_router = APIRouter(prefix="/users", tags=["users"])
profile_router = APIRouter(prefix="/profile", tags=["profile"])


@profile_router.get("/options", response_model=ProfileOptionsDetails)
def fetch_profile_options():
    return get_profile_options()


@profile_router.post("/clear", response_model=ProfileDetails)
def clear_profile_endpoint(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    return clear_profile(user_id=current_user.id, session=session)


@profile_router.get("/", response_model=ProfileDetails)
def fetch_profile_details(
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    profile, created = get_or_create_profile(user_id=current_user.id, session=session)
    return profile


@profile_router.patch("/", response_model=ProfileDetails)
def patch_profile_details(
    profile: ProfileUpdate,
    current_user: Annotated[User, Depends(get_current_active_user)],
    session: Session = Depends(get_session),
):
    print(f"PATCH /profile with data: {profile.dict(exclude_unset=True)}")
    return update_profile(user_id=current_user.id, session=session, profile=profile)


@user_router.get("/me")
async def fetch_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
) -> User:
    return current_user

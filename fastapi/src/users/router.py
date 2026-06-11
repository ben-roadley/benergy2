from fastapi import APIRouter, Depends
from typing import Annotated

from src.users.schemas import UserSchema as User
from src.auth.services import get_current_active_user

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me")
async def fetch_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
) -> User:
    return current_user
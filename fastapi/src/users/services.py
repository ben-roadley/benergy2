from sqlmodel import Session, select

from src.users.schemas import UserInDBSchema as UserInDB
from src.users.models import AuthUser as User


def get_user(username: str, session: Session):
    statement = select(User).where(User.username == username)
    results = session.exec(statement).all()

    if len(results) == 1:
        return UserInDB(**results[0].model_dump())
    else:
        raise ValueError(f"User with username '{username}' not found or multiple users with the same username found.")
from datetime import timedelta
from typing import Annotated

import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import Session

from src.database import get_session
from src.workouts.schemas import WorkoutBaseSchema
from src.workouts.services import get_workouts
from src.users.schemas import UserSchema as User
from src.auth.auth import Token, authenticate_user, create_access_token, get_current_active_user, ACCESS_TOKEN_EXPIRE_MINUTES


app = FastAPI()


# Authentication endpoints

@app.post("/token")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    session: Session = Depends(get_session)
) -> Token:
    user = authenticate_user(form_data.username, form_data.password, session)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")


# User endpoints

@app.get("/users/me/")
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
) -> User:
    return current_user


# Workout endpoints

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/workouts/", response_model=list[WorkoutBaseSchema])
def read_items(session: Session = Depends(get_session)):
    user_id = 2
    return get_workouts(session, user_id)
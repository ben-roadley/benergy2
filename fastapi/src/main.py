from datetime import datetime, timedelta, timezone
from typing import Annotated

import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pwdlib import PasswordHash
from pydantic import BaseModel
from sqlmodel import Session

from src.database import get_session
# from src.workouts.models import AuthUser as User
from src.workouts.schemas import WorkoutBaseSchema
from src.workouts.services import get_workouts

SECRET_KEY = "c58c902ec390d3c3f96f2efdaa1794c4eb5ebd112440184961724a3cdf6518ab"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "email": "johndoe@example.com",
        "hashed_password": "$argon2id$v=19$m=65536,t=3,p=4$CsV2TNObzkAhxPmcC5oh8w$B4iETvqbQMqmq+mvUhlMGaHwHvnk1biMGvEzsbdkVGA",
        "is_active": True,
    },
    "alice": {
        "username": "alice",
        "email": "alice@example.com",
        "hashed_password": "fakehashedsecret2",
        "is_active": False,
    },
}

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def fake_hash_password(password: str):
    return "fakehashed" + password

password_hash = PasswordHash.recommended()

DUMMY_HASH = password_hash.hash("dummypassword")
print("PASSWORD HASH")
print(password_hash.hash("secret"))

def verify_password(plain_password, hashed_password):
    print(f"Verifying password: {plain_password} against hash: {hashed_password}")
    return password_hash.verify(plain_password, hashed_password)


def get_password_hash(password):
    return password_hash.hash(password)


class User(BaseModel):
    username: str
    email: str | None = None
    is_active: bool | None = None


class UserInDB(User):
    hashed_password: str




def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)



def authenticate_user(fake_db, username: str, password: str):
    # When authenticate_user is called with a username that doesn't exist in the database, 
    # we still run verify_password against a dummy hash.

    # This ensures the endpoint takes roughly the same amount of time to respond
    # whether the username is valid or not, preventing timing attacks that
    # could be used to enumerate existing usernames.
    user = get_user(fake_db, username)
    if not user:
        verify_password(password, DUMMY_HASH)
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def fake_decode_token(token):
    # This doesn't provide any security at all
    # Check the next version
    user = get_user(fake_users_db, token)
    return user


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except jwt.InvalidTokenError:
        raise credentials_exception
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)],
):
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/token")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
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


@app.get("/users/me/")
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)],
) -> User:
    return current_user




############################
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/workouts/", response_model=list[WorkoutBaseSchema])
def read_items(session: Session = Depends(get_session)):
    user_id = 2
    return get_workouts(session, user_id)
#######################
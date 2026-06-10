from pydantic import BaseModel


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



class User(BaseModel):
    username: str
    email: str | None = None
    is_active: bool | None = None


class UserInDB(User):
    hashed_password: str




def get_user(username: str):
    db = fake_users_db
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)
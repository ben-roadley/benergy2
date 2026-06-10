from pydantic import BaseModel, ConfigDict

class UserSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    username: str
    email: str | None = None
    is_active: bool | None = None


class UserInDBSchema(UserSchema):
    password: str
from pydantic import BaseModel, ConfigDict, computed_field
from .services import is_workout_stagnating
from ..users.schemas import UserSchema


class WorkoutBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    description: str | None = None
    user: "UserSchema"
    
    @computed_field
    @property
    def is_stagnating(self) -> bool:
        return is_workout_stagnating(workout=self)
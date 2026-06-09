from pydantic import BaseModel, ConfigDict, computed_field
from src.workouts.services import is_workout_stagnating

class UserSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    username: str
    email: str | None = None

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
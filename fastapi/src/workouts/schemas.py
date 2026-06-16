from pydantic import BaseModel, ConfigDict, Field, computed_field

from ..users.schemas import UserSchema


class CatalogExercisedefinitionBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    slug: str
    name: str


class SetOfRepsBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    order: int
    nb_reps: int
    weight: float | None = None


class ExerciseBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    order: int
    rest_time_after: int
    set_of_reps: list["SetOfRepsBaseSchema"]

    exercise_definition: "CatalogExercisedefinitionBaseSchema"

    @computed_field
    @property
    def exercise_name(self) -> str:
        print("ExerciseBaseSchema: exercise_name property accessed")
        print(f"ExerciseBaseSchema: self.exercise_definition = {self.exercise_definition}")
        return self.exercise_definition.name


class WorkoutBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    description: str | None = None
    user: "UserSchema"
    
    @computed_field
    @property
    def is_stagnating(self) -> bool:
        from .services import is_workout_stagnating
        return is_workout_stagnating(workout=self)
    
    @computed_field
    @property
    def is_editable(self) -> bool:
        from .services import is_workout_editable
        return is_workout_editable(workout=self)



class WorkoutWithExercisesBaseSchema(WorkoutBaseSchema):
    exercises: list[ExerciseBaseSchema]
    

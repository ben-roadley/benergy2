import datetime

from pydantic import BaseModel, ConfigDict, computed_field

from ..catalog.schemas import CatalogExerciseDefinitionRead
from ..users.schemas import User


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

    exercise_definition: "CatalogExerciseDefinitionRead"

    @computed_field
    @property
    def exercise_name(self) -> str:
        return self.exercise_definition.name


class WorkoutBaseSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    description: str | None = None
    user: "User"

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


class WorkoutLogBaseSchema(
    BaseModel
):  # TODO: do not link to table, just return the data we need
    id: int
    workout_name: str
    completed_at: datetime.datetime
    exercises: list["WorkoutLogEntryBaseSchema"] | None = (
        None  # Optional, can be populated with entries if needed
    )


class WorkoutLogEntryBaseSchema(BaseModel):
    exercise_name: str
    exercise_order: int
    sets: list["WorkoutLogEntrySetBaseSchema"]


class WorkoutLogEntrySetBaseSchema(BaseModel):
    set_order: int
    nb_reps_actual: int
    nb_reps_target: int
    weight_actual: float | None = None
    weight_target: float | None = None

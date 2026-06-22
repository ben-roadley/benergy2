import datetime

from pydantic import BaseModel, ConfigDict, computed_field

from ..catalog.schemas import CatalogExerciseDefinitionListItem
from ..users.schemas import User


class SetOfRepsListItem(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    order: int
    nb_reps: int
    weight: float | None = None


class ExerciseListItem(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int | None = None
    order: int | None = None
    rest_time_after: int | None = None
    set_of_reps: list["SetOfRepsListItem"] | None = None

    exercise_definition: CatalogExerciseDefinitionListItem

    @computed_field
    @property
    def exercise_name(self) -> str:
        return self.exercise_definition.name


class WorkoutListItem(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    description: str | None = None
    user: User

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


class WorkoutWithExercisesDetails(WorkoutListItem):
    exercises: list[ExerciseListItem]


class WorkoutLogListItem(
    BaseModel
):  # TODO: do not link to table, just return the data we need
    id: int
    workout_name: str
    completed_at: datetime.datetime
    exercises: list["WorkoutLogEntryListItem"] | None = (
        None  # Optional, can be populated with entries if needed
    )


class WorkoutLogEntryListItem(BaseModel):
    exercise_name: str
    exercise_order: int
    sets: list["WorkoutLogEntrySetListItem"]


class WorkoutLogEntrySetListItem(BaseModel):
    set_order: int
    nb_reps_actual: int
    nb_reps_target: int
    weight_actual: float | None = None
    weight_target: float | None = None


class WorkoutVolumeInsightsDetails(BaseModel):
    workout_name: str
    bodyweight_kg: float | None = None
    sessions: list[str]
    total_volume: list[float]
    exercises: list[dict]  # Each dict contains exercise_name and volumes list

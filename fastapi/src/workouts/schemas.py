import datetime

from pydantic import (
    AliasChoices,
    BaseModel,
    ConfigDict,
    Field,
    computed_field,
    model_validator,
)

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
    sets_of_reps: list["SetOfRepsListItem"] | None = None

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
    is_stagnating: bool = False
    is_editable: bool = False


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


class SetOfRepsWriteItem(BaseModel):
    nb_reps: int
    weight: float | None = None


class ExerciseWriteItem(BaseModel):
    exercise_definition_slug: str
    sets_of_reps: list[SetOfRepsWriteItem]
    rest_time_after: int = 60


class WorkoutUpdatePayload(BaseModel):
    name: str | None = None
    description: str | None = None
    exercises: list[ExerciseWriteItem] | None = None


class WorkoutPutPayload(BaseModel):
    name: str
    description: str | None = None
    exercises: list[ExerciseWriteItem]


class WorkoutResultItem(BaseModel):
    model_config = ConfigDict(extra="forbid")

    set_of_reps: int | None = Field(
        default=None, validation_alias=AliasChoices("set_of_reps", "setOfReps")
    )
    exercise_order: int | None = Field(
        default=None, validation_alias=AliasChoices("exercise_order", "exerciseOrder")
    )
    set_order: int | None = Field(
        default=None, validation_alias=AliasChoices("set_order", "setOrder")
    )
    nb_reps_target: int = Field(
        validation_alias=AliasChoices("nb_reps_target", "nbRepsTarget"), ge=0
    )
    nb_reps_actual: int = Field(
        validation_alias=AliasChoices("nb_reps_actual", "nbRepsActual"), ge=0
    )
    weight_actual: float | None = Field(
        default=None,
        validation_alias=AliasChoices("weight_actual", "weightActual", "weight"),
    )
    weight_target: float | None = Field(
        default=None, validation_alias=AliasChoices("weight_target", "weightTarget")
    )

    @model_validator(mode="after")
    def validate_reference(self):
        if self.set_of_reps is None and (
            self.exercise_order is None or self.set_order is None
        ):
            raise ValueError(
                "Provide set_of_reps or both exercise_order and set_order."
            )
        return self


class WorkoutResultPayload(BaseModel):
    workout_id: int
    results: list[WorkoutResultItem]


class WarmupSuggestionItem(BaseModel):
    name: str
    description: str


class WarmupSuggestionsResponse(BaseModel):
    suggestions: list[WarmupSuggestionItem]
    generated_at: datetime.datetime

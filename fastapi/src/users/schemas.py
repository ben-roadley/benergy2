from enum import Enum
from pydantic import BaseModel, ConfigDict
from typing import List

class SexChoices(str, Enum):
    DEFAULT = ""
    MALE = "male"
    FEMALE = "female"
    PREFER_NOT_TO_SAY = "prefer_not_to_say"

class FitnessLevelChoices(str, Enum):
    DEFAULT = ""
    BEGINNER = "beginner"
    INTERMEDIATE = "intermediate"
    ADVANCED = "advanced"
    ATHLETE = "athlete"

class SessionDurationChoices(str, Enum):
    DEFAULT = ""
    SHORT = "20_30"
    MEDIUM = "30_45"
    LONG = "45_60"
    VERY_LONG = "60_plus"

class SleepQualityChoices(str, Enum):
    DEFAULT = ""
    POOR = "poor"
    AVERAGE = "average"
    GOOD = "good"

class StressLevelChoices(str, Enum):
    DEFAULT = ""
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


class ValidGoals(str, Enum):
    WEIGHT_LOSS = "weight_loss"
    STRENGTH_GAIN = "strength_gain"
    GENERAL_HEALTH = "general_health"
    ENDURANCE = "endurance"
    SPORT_PERFORMANCE = "sport_performance"
    INJURY_PREVENTION_LONGEVITY = "injury_prevention_longevity"
    FLEXIBILITY_MOBILITY = "flexibility_mobility"
    OTHER = "other"

class ValidEquipment(str, Enum):
    RESISTANCE_BANDS = "resistance_bands"
    DUMBBELLS = "dumbbells"
    BARBELL_AND_PLATES = "barbell_and_plates"
    PULL_UP_BAR = "pull_up_bar"
    KETTLEBELL = "kettlebell"
    BODYWEIGHT_ONLY = "bodyweight_only"
    OTHER = "other"




class UserSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    username: str
    email: str | None = None
    is_active: bool | None = None


class UserInDBSchema(UserSchema):
    password: str


class ProfileDetails(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    display_name: str
    date_of_birth: str | None = None
    sex: SexChoices
    weight_kg: float | None = None
    height_cm: int | None = None
    fitness_level: FitnessLevelChoices
    goals: List[ValidGoals]
    equipment: List[ValidEquipment]
    session_duration: SessionDurationChoices
    training_days_per_week: int | None = None
    injury_history: str
    lifestyle_description: str
    sleep_quality: SleepQualityChoices
    stress_level: StressLevelChoices


class ProfileOptionsDetails(BaseModel):
    goals: List[ValidGoals]
    equipment: List[ValidEquipment]
    sex: List[SexChoices]
    fitness_level: List[FitnessLevelChoices]
    session_duration: List[SessionDurationChoices]
    sleep_quality: List[SleepQualityChoices]
    stress_level: List[StressLevelChoices]

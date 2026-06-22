from sqlmodel import Session, select
from typing import Tuple

from .schemas import UserInDBSchema as UserInDB, ProfileDetails, ProfileOptionsDetails, ValidEquipment, ValidGoals, SexChoices, FitnessLevelChoices, SessionDurationChoices, SleepQualityChoices, StressLevelChoices
from .models import AuthUser as User, UsersUserprofile as Profile


def get_user(username: str, session: Session):
    statement = select(User).where(User.username == username)
    results = session.exec(statement).all()

    if len(results) == 1:
        return UserInDB(**results[0].model_dump())
    else:
        raise ValueError(f"User with username '{username}' not found or multiple users with the same username found.")



def get_or_create_profile(user_id: int, session: Session) -> Tuple[ProfileDetails, bool]:
    instance = session.exec(select(Profile).where(Profile.user_id == user_id)).first()
    if instance:
        return ProfileDetails.model_validate(instance), False
    else:
        instance = Profile(user_id=user_id)
        session.add(instance)
        session.commit()
        session.refresh(instance)
        return ProfileDetails.model_validate(instance), True


def get_profile_options() -> ProfileOptionsDetails:
    return ProfileOptionsDetails(
        goals=[c.value for c in ValidGoals],
        equipment=[c.value for c in ValidEquipment],
        sex=[c.value for c in SexChoices if c.value != SexChoices.DEFAULT.value],
        fitness_level=[c.value for c in FitnessLevelChoices if c.value != FitnessLevelChoices.DEFAULT.value],
        session_duration=[c.value for c in SessionDurationChoices if c.value != SessionDurationChoices.DEFAULT.value],
        sleep_quality=[c.value for c in SleepQualityChoices if c.value != SleepQualityChoices.DEFAULT.value],
        stress_level=[c.value for c in StressLevelChoices if c.value != StressLevelChoices.DEFAULT.value],
    )
from sqlmodel import Session, select
from typing import Tuple

from .schemas import (
    UserInDBSchema as UserInDB,
    ProfileDetails,
    ProfileUpdate,
    ProfileOptionsDetails,
    ValidEquipment,
    ValidGoals,
    SexChoices,
    FitnessLevelChoices,
    SessionDurationChoices,
    SleepQualityChoices,
    StressLevelChoices,
)
from .models import AuthUser as User, UsersUserprofile as Profile


def get_user(username: str, session: Session):
    statement = select(User).where(User.username == username)
    results = session.exec(statement).all()

    if len(results) == 1:
        return UserInDB(**results[0].model_dump())
    else:
        raise ValueError(
            f"User with username '{username}' not found or multiple users with the same username found."
        )


def update_profile(
    user_id: int, session: Session, profile: ProfileUpdate
) -> ProfileDetails:
    """Update the user's profile with the provided details.

    Only fields that are not None in the `profile` argument will be updated.
    """
    instance = session.exec(select(Profile).where(Profile.user_id == user_id)).first()
    if not instance:
        raise ValueError(f"Profile for user_id {user_id} not found.")

    update_data = profile.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(instance, key, value)

    session.add(instance)
    session.commit()
    session.refresh(instance)
    return ProfileDetails.model_validate(instance)


def clear_profile(user_id: int, session: Session) -> ProfileDetails:
    """Reset all optional profile fields to their defaults.

    Nullable fields (date_of_birth, weight_kg, height_cm, training_days_per_week)
    are set to None. Text/char fields are set to ''. JSON fields (goals, equipment)
    are set to []. The user relation is never modified.
    """
    profile = session.exec(select(Profile).where(Profile.user_id == user_id)).first()
    if profile:
        profile.display_name = ""
        profile.date_of_birth = None
        profile.sex = ""
        profile.weight_kg = None
        profile.height_cm = None
        profile.fitness_level = ""
        profile.goals = []
        profile.equipment = []
        profile.session_duration = ""
        profile.training_days_per_week = None
        profile.injury_history = ""
        profile.lifestyle_description = ""
        profile.sleep_quality = ""
        profile.stress_level = ""
        session.add(profile)
        session.commit()
        session.refresh(profile)
        return ProfileDetails.model_validate(profile)
    return None


def get_or_create_profile(
    user_id: int, session: Session
) -> Tuple[ProfileDetails, bool]:
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
        fitness_level=[
            c.value
            for c in FitnessLevelChoices
            if c.value != FitnessLevelChoices.DEFAULT.value
        ],
        session_duration=[
            c.value
            for c in SessionDurationChoices
            if c.value != SessionDurationChoices.DEFAULT.value
        ],
        sleep_quality=[
            c.value
            for c in SleepQualityChoices
            if c.value != SleepQualityChoices.DEFAULT.value
        ],
        stress_level=[
            c.value
            for c in StressLevelChoices
            if c.value != StressLevelChoices.DEFAULT.value
        ],
    )

from src.workouts.models import WorkoutWorkout as Workout
from src.users.models import AuthUser
from src.workouts.services import get_workouts


def _create_user(session):
    return AuthUser(
        password="fakehashedpassword",
        is_superuser=False,
        username="brucio",
        first_name="Bruce",
        last_name="Wayne",
        email="bruce.wayne@test.com",
        is_staff=False,
        is_active=True,
        date_joined="2024-01-01T00:00:00Z"
    )

def test_get_workouts(session):
    w_user = _create_user(session)

    workout = Workout(name="Batman", user=w_user, updated_at="2026-01-01T00:00:00Z", description="The Dark Knight's workout")
    session.add(workout)
    session.commit()
    session.refresh(workout)
    
    workouts = get_workouts(session=session, user_id=w_user.id)

    assert len(workouts) == 1
    assert workouts[0].name == "Batman"


def test_is_workout_stagnating__no_logs(session):
    w_user = _create_user(session)

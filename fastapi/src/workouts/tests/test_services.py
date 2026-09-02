import datetime
import pytest
from unittest.mock import Mock, patch, MagicMock
from typing import Tuple, Optional

from src.workouts.services import (
    get_workouts,
    get_workout,
    last_workout_session,
    get_workout_logs,
    is_workout_editable,
    is_workout_stagnating,
)
from src.workouts.schemas import (
    WorkoutListItem,
    WorkoutLogListItem,
    WorkoutLogEntryListItem,
    WorkoutLogEntrySetListItem,
)


@pytest.fixture
def mock_session():
    return Mock()


@pytest.fixture
def sample_user():
    user = Mock()
    user.id = 1
    user.username = "brucio"
    user.email = "bruce.wayne@test.com"
    user.is_active = True
    return user


@pytest.fixture
def sample_workout(sample_user):
    workout = Mock()
    workout.id = 1
    workout.user_id = 1
    workout.name = "Batman Training"
    workout.description = "The Dark Knight's workout routine"
    workout.updated_at = datetime.datetime(2026, 1, 1, tzinfo=datetime.timezone.utc)
    workout.user = sample_user
    workout.exercises = []
    return workout


@pytest.fixture
def sample_exercise(sample_workout):
    exercise = Mock()
    exercise.id = 1
    exercise.workout_id = sample_workout.id
    exercise.order = 1
    exercise.rest_time_after = 60
    exercise.sets_of_reps = []

    exercise_def = Mock()
    exercise_def.slug = "barbell-bench-press"
    exercise_def.name = "Barbell Bench Press"
    exercise_def.category = "Chest"
    exercise_def.level = "Intermediate"
    exercise_def.primary_muscles = ["chest", "triceps"]
    exercise_def.equipment = "Barbell"
    exercise.exercise_definition = exercise_def

    return exercise


@pytest.fixture
def sample_set_of_reps(sample_exercise):
    set_of_reps = Mock()
    set_of_reps.id = 1
    set_of_reps.exercise_id = sample_exercise.id
    set_of_reps.order = 1
    set_of_reps.nb_reps = 8
    set_of_reps.weight = 100.0
    set_of_reps.exercise = sample_exercise
    return set_of_reps


@pytest.fixture
def sample_workout_log(sample_workout, sample_user):
    log = Mock()
    log.id = 1
    log.workout_id = sample_workout.id
    log.user_id = sample_user.id
    log.completed_at = datetime.datetime(
        2026, 2, 1, 10, 0, 0, tzinfo=datetime.timezone.utc
    )
    log.workout = sample_workout
    log.workout_log_entry = []
    return log


@pytest.fixture
def sample_workout_log_entry(sample_workout_log, sample_set_of_reps):
    entry = Mock()
    entry.id = 1
    entry.log_id = sample_workout_log.id
    entry.set_of_reps_id = sample_set_of_reps.id
    entry.nb_reps_target = 8
    entry.nb_reps_actual = 8
    entry.weight_target = 100.0
    entry.weight_actual = 100.0
    entry.set_of_reps = sample_set_of_reps
    return entry


class TestGetWorkouts:
    def test_get_workouts_success(self, mock_session, sample_user, sample_workout):
        user_id = sample_user.id
        mock_session.exec.return_value.all.return_value = [sample_workout]

        results = get_workouts(user_id=user_id, session=mock_session)

        assert len(results) == 1
        assert isinstance(results[0], WorkoutListItem)
        assert results[0].name == "Batman Training"
        assert mock_session.exec.call_count == 3

    def test_get_workouts_empty(self, mock_session, sample_user):
        user_id = sample_user.id
        mock_session.exec.return_value.all.return_value = []

        results = get_workouts(user_id=user_id, session=mock_session)

        assert results == []
        mock_session.exec.assert_called_once()

    def test_get_workouts_multiple(self, mock_session, sample_user):
        user_id = sample_user.id

        workout1 = Mock()
        workout1.id = 1
        workout1.user_id = user_id
        workout1.name = "Chest Day"
        workout1.description = "Focus on chest"
        workout1.updated_at = datetime.datetime.now(datetime.timezone.utc)
        workout1.user = sample_user

        workout2 = Mock()
        workout2.id = 2
        workout2.user_id = user_id
        workout2.name = "Back Day"
        workout2.description = "Focus on back"
        workout2.updated_at = datetime.datetime.now(datetime.timezone.utc)
        workout2.user = sample_user

        mock_session.exec.return_value.all.return_value = [workout1, workout2]

        results = get_workouts(user_id=user_id, session=mock_session)

        assert len(results) == 2
        assert results[0].name == "Chest Day"
        assert results[1].name == "Back Day"


class TestGetWorkout:
    def test_get_workout_success(self, mock_session, sample_user, sample_workout):
        user_id = sample_user.id
        workout_id = sample_workout.id
        mock_session.exec.return_value.one_or_none.return_value = sample_workout

        result = get_workout(
            user_id=user_id, workout_id=workout_id, session=mock_session
        )

        assert result == sample_workout
        assert result.name == "Batman Training"
        mock_session.exec.assert_called_once()

    def test_get_workout_not_found(self, mock_session, sample_user):
        user_id = sample_user.id
        workout_id = 999
        mock_session.exec.return_value.one_or_none.return_value = None

        result = get_workout(
            user_id=user_id, workout_id=workout_id, session=mock_session
        )

        assert result is None
        mock_session.exec.assert_called_once()

    def test_get_workout_wrong_user(self, mock_session):
        user_id = 1
        workout_id = 1
        mock_session.exec.return_value.one_or_none.return_value = None

        result = get_workout(
            user_id=user_id, workout_id=workout_id, session=mock_session
        )

        assert result is None
        mock_session.exec.assert_called_once()


class TestLastWorkoutSession:
    def test_last_workout_session_success(
        self, mock_session, sample_user, sample_workout_log
    ):
        user_id = sample_user.id
        mock_session.exec.return_value.first.return_value = sample_workout_log

        result = last_workout_session(user_id=user_id, session=mock_session)

        assert result is not None
        assert result["workout_name"] == "Batman Training"
        assert result["completed_at"] == sample_workout_log.completed_at
        mock_session.exec.assert_called_once()

    def test_last_workout_session_no_logs(self, mock_session, sample_user):
        user_id = sample_user.id
        mock_session.exec.return_value.first.return_value = None

        result = last_workout_session(user_id=user_id, session=mock_session)

        assert result is None
        mock_session.exec.assert_called_once()

    def test_last_workout_session_contains_required_fields(
        self, mock_session, sample_user, sample_workout_log
    ):
        user_id = sample_user.id
        mock_session.exec.return_value.first.return_value = sample_workout_log

        result = last_workout_session(user_id=user_id, session=mock_session)

        assert "workout_name" in result
        assert "completed_at" in result
        assert isinstance(result["workout_name"], str)
        assert isinstance(result["completed_at"], datetime.datetime)


class TestGetWorkoutLogs:
    def test_get_workout_logs_calls_session_correctly(
        self, mock_session, sample_user, sample_workout
    ):
        user_id = sample_user.id
        workout_id = sample_workout.id
        mock_session.exec.return_value.all.return_value = []

        with patch("src.workouts.services.Session"):
            results = get_workout_logs(
                user_id=user_id, workout_id=workout_id, session=mock_session
            )

        assert isinstance(results, list)
        mock_session.exec.assert_called()

    def test_get_workout_logs_empty(self, mock_session, sample_user, sample_workout):
        user_id = sample_user.id
        workout_id = sample_workout.id
        mock_session.exec.return_value.all.return_value = []

        with patch("src.workouts.services.Session"):
            results = get_workout_logs(
                user_id=user_id, workout_id=workout_id, session=mock_session
            )

        assert results == []


class TestIsWorkoutStagnating:
    def test_is_workout_stagnating_no_workout(self, mock_session):
        with pytest.raises(ValueError, match="workout must be provided"):
            is_workout_stagnating(workout=None, session=mock_session)

    def test_is_workout_stagnating_insufficient_logs(
        self, mock_session, sample_workout
    ):
        mock_session.exec.return_value.all.return_value = [Mock(), Mock()]

        result = is_workout_stagnating(workout=sample_workout, session=mock_session)
        assert result is False

    def test_is_workout_stagnating_no_logs(self, mock_session, sample_workout):
        mock_session.exec.return_value.all.return_value = []

        result = is_workout_stagnating(workout=sample_workout, session=mock_session)
        assert result is False

    def test_is_workout_stagnating_uses_provided_session(
        self, mock_session, sample_workout
    ):
        mock_session.exec.return_value.all.return_value = []

        result = is_workout_stagnating(workout=sample_workout, session=mock_session)

        mock_session.exec.assert_called()
        assert result is False

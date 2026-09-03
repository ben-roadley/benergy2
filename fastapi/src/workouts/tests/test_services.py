import datetime
import pytest
from unittest.mock import Mock, patch, MagicMock
from typing import Tuple, Optional

from src.workouts.services import (
    apply_top_level_update,
    build_exercises,
    compute_volume_insights,
    create_workout_with_exercises,
    get_workouts,
    get_workout,
    get_workout_details,
    last_workout_session,
    get_workout_logs,
    group_log_entries_by_exercise,
    is_workout_editable,
    is_workout_stagnating,
    patch_existing_sets,
    replace_all_exercises,
    update_targets,
    update_workout_from_payload,
    validate_allowed_update,
    workout_log_create,
)
from src.workouts.schemas import (
    WorkoutListItem,
    WorkoutLogListItem,
    WorkoutLogEntryListItem,
    WorkoutLogEntrySetListItem,
    WorkoutResultItem,
)
from src.users.models import AuthUser


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


def result_item(**values):
    return WorkoutResultItem(
        set_of_reps=values.get("set_of_reps"),
        exercise_order=values.get("exercise_order"),
        set_order=values.get("set_order"),
        nb_reps_target=values.get("nb_reps_target", 8),
        nb_reps_actual=values.get("nb_reps_actual", 8),
        weight_actual=values.get("weight_actual"),
        weight_target=values.get("weight_target"),
    )


def test_is_workout_editable_rejects_missing_workout(mock_session):
    with pytest.raises(ValueError, match="workout must be provided"):
        is_workout_editable(None, mock_session)


def test_is_workout_editable_returns_false_when_logs_exist(
    mock_session, sample_workout
):
    mock_session.exec.return_value.all.return_value = [Mock()]

    assert is_workout_editable(sample_workout, mock_session) is False


def test_group_log_entries_by_exercise_groups_sets(sample_workout, sample_set_of_reps):
    exercise = sample_set_of_reps.exercise
    first = Mock(
        nb_reps_actual=8, nb_reps_target=10, weight_actual=50, weight_target=45
    )
    second = Mock(
        nb_reps_actual=9, nb_reps_target=10, weight_actual=None, weight_target=None
    )
    entries = [
        (first, sample_set_of_reps, exercise, "Bench"),
        (second, Mock(order=2), exercise, "Bench"),
    ]

    grouped = group_log_entries_by_exercise(entries)

    assert len(grouped) == 1
    assert grouped[0]["exercise_name"] == "Bench"
    assert len(grouped[0]["sets"]) == 2


def test_is_workout_stagnating_compares_three_patterns(
    mock_session, sample_workout, sample_workout_log_entry, sample_set_of_reps
):
    logs = [Mock(id=1), Mock(id=2), Mock(id=3)]
    for log in logs:
        log.id = log.id
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=logs)),
        Mock(all=Mock(return_value=[sample_workout_log_entry])),
        Mock(all=Mock(return_value=[sample_workout_log_entry])),
        Mock(all=Mock(return_value=[sample_workout_log_entry])),
    ]
    sample_workout_log_entry.set_of_reps.exercise = sample_set_of_reps.exercise

    assert is_workout_stagnating(sample_workout, mock_session) is True


def test_is_workout_stagnating_detects_different_patterns(
    mock_session, sample_workout, sample_workout_log_entry
):
    logs = [Mock(id=1), Mock(id=2), Mock(id=3)]
    changed_entry = Mock(
        set_of_reps=Mock(order=1, exercise=Mock(order=1)),
        nb_reps_actual=9,
        weight_actual=100,
    )
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=logs)),
        Mock(all=Mock(return_value=[sample_workout_log_entry])),
        Mock(all=Mock(return_value=[changed_entry])),
        Mock(all=Mock(return_value=[sample_workout_log_entry])),
    ]

    assert is_workout_stagnating(sample_workout, mock_session) is False


def test_workout_log_create_creates_entries_and_resolves_by_id(
    mock_session, sample_workout, sample_set_of_reps
):
    mock_session.exec.return_value.all.return_value = [
        (sample_set_of_reps, sample_set_of_reps.exercise)
    ]
    result = result_item(set_of_reps=1, weight_actual=105)

    with patch("src.workouts.services.get_workout", return_value=sample_workout), patch(
        "src.workouts.services.update_targets"
    ) as update:
        log = workout_log_create(1, 1, [result], mock_session)

    assert log.workout_id == sample_workout.id
    assert mock_session.add.call_count == 2
    update.assert_called_once()
    mock_session.commit.assert_called_once()


def test_workout_log_create_resolves_by_order_and_rejects_missing_workout(
    mock_session, sample_workout, sample_set_of_reps
):
    mock_session.exec.return_value.all.return_value = [
        (sample_set_of_reps, sample_set_of_reps.exercise)
    ]
    ordered = result_item(exercise_order=1, set_order=1)
    with patch("src.workouts.services.get_workout", return_value=sample_workout), patch(
        "src.workouts.services.update_targets"
    ):
        workout_log_create(1, 1, [ordered], mock_session)

    with patch("src.workouts.services.get_workout", return_value=None):
        with pytest.raises(ValueError, match="not found"):
            workout_log_create(1, 1, [], mock_session)


def test_workout_log_create_rejects_invalid_and_duplicate_results(
    mock_session, sample_workout, sample_set_of_reps
):
    mock_session.exec.return_value.all.return_value = [
        (sample_set_of_reps, sample_set_of_reps.exercise)
    ]
    with patch("src.workouts.services.get_workout", return_value=sample_workout):
        with pytest.raises(ValueError, match="invalid set"):
            workout_log_create(1, 1, [result_item(set_of_reps=99)], mock_session)
        with pytest.raises(ValueError, match="duplicate"):
            workout_log_create(
                1,
                1,
                [result_item(set_of_reps=1), result_item(set_of_reps=1)],
                mock_session,
            )


def test_update_targets_updates_weight_and_reps(
    mock_session, sample_workout, sample_set_of_reps
):
    mock_session.exec.return_value.all.return_value = [
        (sample_set_of_reps, sample_set_of_reps.exercise)
    ]
    update_targets(
        mock_session,
        sample_workout,
        [result_item(set_of_reps=1, weight_actual=110, nb_reps_actual=10)],
    )
    assert sample_set_of_reps.weight == 110
    assert sample_set_of_reps.nb_reps == 10


def test_update_targets_updates_reps_when_weight_unchanged(
    mock_session, sample_workout, sample_set_of_reps
):
    mock_session.exec.return_value.all.return_value = [
        (sample_set_of_reps, sample_set_of_reps.exercise)
    ]
    update_targets(
        mock_session,
        sample_workout,
        [result_item(set_of_reps=1, weight_actual=100, nb_reps_actual=10)],
    )
    assert sample_set_of_reps.nb_reps == 10


def test_update_targets_accepts_order_and_rejects_invalid_set(
    mock_session, sample_workout, sample_set_of_reps
):
    mock_session.exec.return_value.all.return_value = [
        (sample_set_of_reps, sample_set_of_reps.exercise)
    ]
    update_targets(
        mock_session, sample_workout, [result_item(exercise_order=1, set_order=1)]
    )
    with pytest.raises(ValueError, match="invalid set"):
        update_targets(mock_session, sample_workout, [result_item(set_of_reps=99)])


def test_get_workout_logs_formats_nested_entries(
    mock_session, sample_workout_log, sample_workout_log_entry, sample_set_of_reps
):
    log_row = Mock(
        id=1,
        workout_name="Batman Training",
        completed_at=sample_workout_log.completed_at,
    )
    exercise = sample_set_of_reps.exercise
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[log_row])),
        Mock(
            all=Mock(
                return_value=[
                    (sample_workout_log_entry, sample_set_of_reps, exercise, "Bench")
                ]
            )
        ),
    ]

    result = get_workout_logs(1, 1, mock_session)

    assert isinstance(result[0], WorkoutLogListItem)
    assert isinstance(result[0].exercises[0], WorkoutLogEntryListItem)
    assert isinstance(result[0].exercises[0].sets[0], WorkoutLogEntrySetListItem)
    assert result[0].exercises[0].sets[0].set_order == 1


def test_get_workout_details_returns_nested_details(mock_session, sample_workout):
    mock_session.exec.return_value.all.return_value = []

    result = get_workout_details(sample_workout, mock_session)

    assert result.name == sample_workout.name
    assert result.exercises == []


def test_validate_allowed_update_accepts_matching_payload(mock_session, sample_workout):
    exercise = Mock(id=1, order=1, exercise_definition_id="bench")
    existing_set = Mock(id=1, order=1)
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[exercise])),
        Mock(all=Mock(return_value=[existing_set])),
    ]

    assert validate_allowed_update(
        mock_session,
        sample_workout,
        [{"exercise_definition_slug": "bench", "sets_of_reps": [{"nb_reps": 8}]}],
    ) == (True, None)


@pytest.mark.parametrize(
    "payload, message",
    [
        ([], "add or remove exercises"),
        (
            [{"exercise_definition_slug": "squat", "sets_of_reps": []}],
            "exercise definition",
        ),
    ],
)
def test_validate_allowed_update_rejects_structure(
    mock_session, sample_workout, payload, message
):
    exercise = Mock(id=1, order=1, exercise_definition_id="bench")
    mock_session.exec.return_value.all.return_value = [exercise]

    ok, error = validate_allowed_update(mock_session, sample_workout, payload)
    assert ok is False
    assert message in error


def test_validate_allowed_update_rejects_sets_and_extra_fields(
    mock_session, sample_workout
):
    exercise = Mock(id=1, order=1, exercise_definition_id="bench")
    existing_set = Mock(id=1, order=1)
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[exercise])),
        Mock(all=Mock(return_value=[])),
    ]
    ok, error = validate_allowed_update(
        mock_session,
        sample_workout,
        [{"exercise_definition_slug": "bench", "sets_of_reps": [{"nb_reps": 8}]}],
    )
    assert ok is False and "add or remove sets" in error

    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[exercise])),
        Mock(all=Mock(return_value=[existing_set])),
    ]
    ok, error = validate_allowed_update(
        mock_session,
        sample_workout,
        [{"exercise_definition_slug": "bench", "sets_of_reps": ["bad"]}],
    )
    assert ok is False and "Invalid set payload" in error

    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[exercise])),
        Mock(all=Mock(return_value=[existing_set])),
    ]
    ok, error = validate_allowed_update(
        mock_session,
        sample_workout,
        [
            {
                "exercise_definition_slug": "bench",
                "sets_of_reps": [{"weight": 1, "x": 2}],
            }
        ],
    )
    assert ok is False and "Not allowed" in error


def test_build_exercises_creates_nested_rows(mock_session, sample_workout):
    exercise_def = Mock(slug="bench")
    mock_session.exec.return_value.one_or_none.return_value = exercise_def

    build_exercises(
        mock_session,
        sample_workout,
        [
            {
                "exercise_definition_slug": "bench",
                "sets_of_reps": [{"nb_reps": 8, "weight": 50}],
            }
        ],
    )

    assert mock_session.add.call_count == 2
    assert mock_session.flush.call_count == 1


def test_build_exercises_rejects_unknown_definition(mock_session, sample_workout):
    mock_session.exec.return_value.one_or_none.return_value = None

    with pytest.raises(ValueError, match="not found"):
        build_exercises(
            mock_session,
            sample_workout,
            [{"exercise_definition_slug": "missing", "sets_of_reps": []}],
        )


def test_apply_top_level_update_handles_empty_and_logged_workout(
    mock_session, sample_workout
):
    assert apply_top_level_update(mock_session, sample_workout, {}) is sample_workout
    mock_session.exec.return_value.all.return_value = [Mock()]
    with pytest.raises(ValueError, match="cannot be edited"):
        apply_top_level_update(mock_session, sample_workout, {"name": "New"})


def test_apply_top_level_update_updates_fields(mock_session, sample_workout):
    mock_session.exec.return_value.all.return_value = []

    result = apply_top_level_update(
        mock_session, sample_workout, {"name": "New", "description": "Desc"}
    )

    assert result.name == "New"
    assert result.description == "Desc"
    mock_session.add.assert_called_once_with(sample_workout)


def test_replace_all_exercises_deletes_rows_and_rebuilds(mock_session, sample_workout):
    exercise = Mock(id=1)
    existing_set = Mock(id=2)
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[exercise])),
        Mock(all=Mock(return_value=[existing_set])),
    ]
    with patch("src.workouts.services.build_exercises") as build:
        replace_all_exercises(mock_session, sample_workout, [])

    assert mock_session.delete.call_count == 2
    build.assert_called_once()


def test_patch_existing_sets_updates_allowed_fields(mock_session, sample_workout):
    exercise = Mock(id=1)
    set_obj = Mock()
    mock_session.exec.side_effect = [
        Mock(one=Mock(return_value=exercise)),
        Mock(one=Mock(return_value=set_obj)),
    ]

    patch_existing_sets(
        mock_session,
        sample_workout,
        [{"sets_of_reps": [{"nb_reps": 10, "weight": 60}]}],
    )

    assert set_obj.nb_reps == 10
    assert set_obj.weight == 60
    mock_session.add.assert_called_once_with(set_obj)


def test_create_workout_requires_exercise(mock_session):
    with pytest.raises(ValueError, match="at least one exercise"):
        create_workout_with_exercises(mock_session, 1, {"name": "Empty"}, [])


def test_create_workout_builds_and_returns_details(mock_session, sample_workout):
    with patch("src.workouts.services.Workout", return_value=sample_workout), patch(
        "src.workouts.services.build_exercises"
    ) as build, patch(
        "src.workouts.services.get_workout_details", return_value="details"
    ):
        result = create_workout_with_exercises(mock_session, 1, {"name": "New"}, [{}])

    assert result == "details"
    build.assert_called_once()
    mock_session.commit.assert_called_once()


def test_update_workout_payload_handles_all_paths(mock_session, sample_workout):
    with patch("src.workouts.services.apply_top_level_update") as apply, patch(
        "src.workouts.services.get_workout_details", return_value="details"
    ):
        result = update_workout_from_payload(mock_session, sample_workout, {}, None)
    assert result == "details"
    apply.assert_called_once()

    with patch("src.workouts.services.is_workout_editable", return_value=True), patch(
        "src.workouts.services.apply_top_level_update"
    ) as apply, patch("src.workouts.services.replace_all_exercises") as replace, patch(
        "src.workouts.services.get_workout_details", return_value="details"
    ):
        update_workout_from_payload(mock_session, sample_workout, {}, [])
    apply.assert_called_once()
    replace.assert_called_once()

    with patch("src.workouts.services.is_workout_editable", return_value=False), patch(
        "src.workouts.services.validate_allowed_update", return_value=(False, "bad")
    ):
        with pytest.raises(ValueError, match="bad"):
            update_workout_from_payload(mock_session, sample_workout, {}, [])

    with patch("src.workouts.services.is_workout_editable", return_value=False), patch(
        "src.workouts.services.validate_allowed_update", return_value=(True, None)
    ), patch("src.workouts.services.patch_existing_sets") as patch_sets, patch(
        "src.workouts.services.get_workout_details", return_value="details"
    ):
        assert (
            update_workout_from_payload(mock_session, sample_workout, {}, [])
            == "details"
        )
    patch_sets.assert_called_once()


def test_compute_volume_insights_calculates_weighted_and_bodyweight_volume(
    mock_session, sample_workout, sample_exercise, sample_set_of_reps
):
    log = Mock(
        completed_at=datetime.datetime(2026, 3, 5, tzinfo=datetime.timezone.utc), id=1
    )
    entry = Mock(weight_actual=50, nb_reps_actual=8)
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[log])),
        Mock(all=Mock(return_value=[sample_exercise])),
        Mock(all=Mock(return_value=[(entry, sample_set_of_reps, sample_exercise)])),
        Mock(all=Mock(return_value=[(entry, sample_set_of_reps, sample_exercise)])),
    ]

    result = compute_volume_insights(mock_session, sample_workout, profile_weight_kg=75)

    assert result.workout_name == sample_workout.name
    assert result.bodyweight_kg == 75
    assert result.sessions == ["5 Mar"]
    assert result.total_volume == [400.0]
    assert result.exercises[0]["is_bodyweight"] is False
    assert result.exercises[0]["volume_per_session"] == [400.0]


def test_compute_volume_insights_uses_profile_for_bodyweight_and_zero_without_profile(
    mock_session, sample_workout, sample_exercise, sample_set_of_reps
):
    log = Mock(
        completed_at=datetime.datetime(2026, 3, 5, tzinfo=datetime.timezone.utc), id=1
    )
    entry = Mock(weight_actual=0, nb_reps_actual=8)
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[log])),
        Mock(all=Mock(return_value=[sample_exercise])),
        Mock(all=Mock(return_value=[(entry, sample_set_of_reps, sample_exercise)])),
        Mock(all=Mock(return_value=[(entry, sample_set_of_reps, sample_exercise)])),
    ]

    result = compute_volume_insights(mock_session, sample_workout, profile_weight_kg=75)
    assert result.total_volume == [600.0]
    assert result.exercises[0]["is_bodyweight"] is True

    mock_session.reset_mock()
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[log])),
        Mock(all=Mock(return_value=[sample_exercise])),
        Mock(all=Mock(return_value=[(entry, sample_set_of_reps, sample_exercise)])),
        Mock(all=Mock(return_value=[(entry, sample_set_of_reps, sample_exercise)])),
    ]
    result = compute_volume_insights(mock_session, sample_workout)
    assert result.bodyweight_kg is None
    assert result.total_volume == [0.0]


def test_compute_volume_insights_returns_empty_series_without_logs(
    mock_session, sample_workout, sample_exercise
):
    mock_session.exec.side_effect = [
        Mock(all=Mock(return_value=[])),
        Mock(all=Mock(return_value=[sample_exercise])),
    ]

    result = compute_volume_insights(mock_session, sample_workout)

    assert result.sessions == []
    assert result.total_volume == []
    assert result.exercises[0]["volume_per_session"] == []

import pytest
from django.contrib.auth.models import User

from catalog.models import ExerciseDefinition
from workout.models import Exercise, SetOfReps, Workout, WorkoutLog
from workout.services import (
    apply_top_level_update,
    compute_volume_insights,
    create_workout_with_exercises,
    is_workout_editable,
    is_workout_stagnating,
    patch_existing_sets,
    replace_all_exercises,
    update_targets,
    update_workout_from_payload,
    validate_allowed_update,
    workout_log_create,
)


@pytest.fixture
def user(db):
    return User.objects.create_user("testuser", "test@test.com", "pass")


@pytest.fixture
def workout_with_exercises(user):
    w = Workout.objects.create(user=user, name="Test Workout")
    ed1 = ExerciseDefinition.objects.create(
        slug="test-pushups", name="Push-ups", category="Strength", level="beginner"
    )
    ed2 = ExerciseDefinition.objects.create(
        slug="test-squats", name="Squats", category="Strength", level="beginner"
    )
    e1 = Exercise.objects.create(workout=w, order=1, exercise_definition=ed1)
    e2 = Exercise.objects.create(workout=w, order=2, exercise_definition=ed2)
    SetOfReps.objects.create(exercise=e1, order=1, nb_reps=10)
    SetOfReps.objects.create(exercise=e1, order=2, nb_reps=8)
    SetOfReps.objects.create(exercise=e2, order=1, nb_reps=12)
    return w


@pytest.fixture
def workout_with_weights(user):
    w = Workout.objects.create(user=user, name="Weighted Workout")
    ed = ExerciseDefinition.objects.create(
        slug="test-bench-press",
        name="Bench Press",
        category="Strength",
        level="intermediate",
    )
    e = Exercise.objects.create(workout=w, order=1, exercise_definition=ed)
    SetOfReps.objects.create(exercise=e, order=1, nb_reps=10, weight=50)
    SetOfReps.objects.create(exercise=e, order=2, nb_reps=8, weight=50)
    return w


def _make_result_by_set(
    workout, exercise_order, set_order, target, actual, weight=None
):
    s = SetOfReps.objects.get(
        exercise__workout=workout, exercise__order=exercise_order, order=set_order
    )
    return {
        "set_of_reps": s.pk,
        "nb_reps_target": target,
        "nb_reps_actual": actual,
        "weight_actual": weight,
    }


class TestWorkoutLogCreate:
    def test_creates_log_and_entries(self, user, workout_with_exercises):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 10),
            _make_result_by_set(workout_with_exercises, 1, 2, 8, 8),
            _make_result_by_set(workout_with_exercises, 2, 1, 12, 12),
        ]

        log = workout_log_create(
            user=user,
            workout_id=workout_with_exercises.pk,
            results=results,
        )

        assert isinstance(log, WorkoutLog)
        assert log.user == user
        assert log.workout == workout_with_exercises
        assert log.entries.count() == 3

    def test_updates_target_when_actual_is_higher(self, user, workout_with_exercises):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 15),
            _make_result_by_set(workout_with_exercises, 1, 2, 8, 8),
            _make_result_by_set(workout_with_exercises, 2, 1, 12, 14),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_exercises.pk,
            results=results,
        )

        pushup_set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_exercises,
            exercise__order=1,
            order=1,
        )
        pushup_set2 = SetOfReps.objects.get(
            exercise__workout=workout_with_exercises,
            exercise__order=1,
            order=2,
        )
        squat_set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_exercises,
            exercise__order=2,
            order=1,
        )

        # Base SetOfReps updated
        assert pushup_set1.nb_reps == 15
        assert pushup_set2.nb_reps == 8  # unchanged
        assert squat_set1.nb_reps == 14

    def test_does_not_lower_target_when_actual_is_lower(
        self, user, workout_with_exercises
    ):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 5),
            _make_result_by_set(workout_with_exercises, 1, 2, 8, 3),
            _make_result_by_set(workout_with_exercises, 2, 1, 12, 9),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_exercises.pk,
            results=results,
        )

        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=1, order=1
            ).nb_reps
            == 10
        )
        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=1, order=2
            ).nb_reps
            == 8
        )
        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=2, order=1
            ).nb_reps
            == 12
        )

    def test_does_not_update_target_when_actual_equals_target(
        self, user, workout_with_exercises
    ):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 10),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_exercises.pk,
            results=results,
        )

        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=1, order=1
            ).nb_reps
            == 10
        )

    def test_raises_when_workout_does_not_exist(self, user, db):
        with pytest.raises(Workout.DoesNotExist):
            workout_log_create(user=user, workout_id=9999, results=[])

    def test_ignores_results_with_no_matching_set(self, user, workout_with_exercises):
        # unknown set: construct a payload without referencing an existing set_of_reps
        results = [
            {"nb_reps_target": 5, "nb_reps_actual": 20, "weight_actual": None},
        ]

        log = workout_log_create(
            user=user,
            workout_id=workout_with_exercises.pk,
            results=results,
        )

        assert log.entries.count() == 0
        # All original targets unchanged
        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=1, order=1
            ).nb_reps
            == 10
        )
        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=1, order=2
            ).nb_reps
            == 8
        )
        assert (
            SetOfReps.objects.get(
                exercise__workout=workout_with_exercises, exercise__order=2, order=1
            ).nb_reps
            == 12
        )

    def test_weight_saved_to_log_entry(self, user, workout_with_weights):
        results = [
            _make_result_by_set(workout_with_weights, 1, 1, 10, 10, weight=55),
            _make_result_by_set(workout_with_weights, 1, 2, 8, 8, weight=50),
        ]

        log = workout_log_create(
            user=user,
            workout_id=workout_with_weights.pk,
            results=results,
        )

        entries = list(log.entries.order_by("set_of_reps__order"))
        assert entries[0].weight_actual == 55
        assert entries[1].weight_actual == 50

    def test_weight_increase_updates_weight_and_keeps_reps_progression(
        self, user, workout_with_weights
    ):
        results = [
            _make_result_by_set(workout_with_weights, 1, 1, 10, 12, weight=55),
            _make_result_by_set(workout_with_weights, 1, 2, 8, 8, weight=50),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_weights.pk,
            results=results,
        )

        set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_weights, exercise__order=1, order=1
        )
        set2 = SetOfReps.objects.get(
            exercise__workout=workout_with_weights, exercise__order=1, order=2
        )
        assert set1.weight == 55
        assert set1.nb_reps == 12  # actual > target, so reps progress; no reset
        assert set2.weight == 50  # unchanged
        assert set2.nb_reps == 8  # unchanged

    def test_weight_decrease_leaves_targets_unchanged(self, user, workout_with_weights):
        results = [
            _make_result_by_set(workout_with_weights, 1, 1, 10, 15, weight=45),
            _make_result_by_set(workout_with_weights, 1, 2, 8, 8, weight=50),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_weights.pk,
            results=results,
        )

        set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_weights, exercise__order=1, order=1
        )
        # Weight went down → neither weight nor nb_reps should change
        assert set1.weight == 50
        assert set1.nb_reps == 10

    def test_weight_increase_with_fewer_reps_updates_both(
        self, user, workout_with_weights
    ):
        # User moved up in weight but managed fewer reps than the old target.
        results = [
            _make_result_by_set(workout_with_weights, 1, 1, 10, 6, weight=60),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_weights.pk,
            results=results,
        )

        set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_weights, exercise__order=1, order=1
        )
        assert set1.weight == 60
        assert (
            set1.nb_reps == 6
        )  # actual reps recorded even though lower than old target

    def test_same_weight_reps_progress_normally(self, user, workout_with_weights):
        results = [
            _make_result_by_set(workout_with_weights, 1, 1, 10, 12, weight=50),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_weights.pk,
            results=results,
        )

        set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_weights, exercise__order=1, order=1
        )
        assert set1.weight == 50
        assert set1.nb_reps == 12  # progressed normally

    def test_null_weight_keeps_existing_behavior(self, user, workout_with_exercises):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 15),
        ]

        workout_log_create(
            user=user,
            workout_id=workout_with_exercises.pk,
            results=results,
        )

        set1 = SetOfReps.objects.get(
            exercise__workout=workout_with_exercises, exercise__order=1, order=1
        )
        assert set1.weight is None
        assert set1.nb_reps == 15


class TestIsWorkoutStagnating:
    def _log_session(self, user, workout, results):
        return workout_log_create(user=user, workout_id=workout.pk, results=results)

    def test_not_stagnating_with_fewer_than_3_logs(self, user, workout_with_exercises):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 10),
            _make_result_by_set(workout_with_exercises, 1, 2, 8, 8),
            _make_result_by_set(workout_with_exercises, 2, 1, 12, 12),
        ]
        self._log_session(user, workout_with_exercises, results)
        self._log_session(user, workout_with_exercises, results)

        assert is_workout_stagnating(user=user, workout=workout_with_exercises) is False

    def test_stagnating_when_last_3_sessions_identical(
        self, user, workout_with_exercises
    ):
        results = [
            _make_result_by_set(workout_with_exercises, 1, 1, 10, 10),
            _make_result_by_set(workout_with_exercises, 1, 2, 8, 8),
            _make_result_by_set(workout_with_exercises, 2, 1, 12, 12),
        ]
        for _ in range(3):
            self._log_session(user, workout_with_exercises, results)

        assert is_workout_stagnating(user=user, workout=workout_with_exercises) is True


def test_is_workout_editable_true_and_false(user, workout_with_exercises):
    # initially editable
    assert is_workout_editable(workout=workout_with_exercises) is True

    # create a log -> should become non-editable
    workout_log_create(user=user, workout_id=workout_with_exercises.pk, results=[])
    assert is_workout_editable(workout=workout_with_exercises) is False


class TestValidateAllowedUpdate:
    def test_invalid_type(self, workout_with_exercises):
        ok, msg = validate_allowed_update(
            workout=workout_with_exercises, exercises_data={"no": "list"}
        )
        assert ok is False
        assert "Invalid exercises payload" in msg

    def test_length_mismatch(self, workout_with_exercises):
        payload = []  # empty -> mismatch
        ok, msg = validate_allowed_update(
            workout=workout_with_exercises, exercises_data=payload
        )
        assert ok is False
        assert "Cannot add or remove exercises" in msg

    def test_name_change_disallowed(self, workout_with_exercises):
        payload = [
            {
                "exercise_definition_slug": "wrong-slug",
                "sets_of_reps": [{"nb_reps": 1}],
            },
            {
                "exercise_definition_slug": "test-squats",
                "sets_of_reps": [{"nb_reps": 1}],
            },
        ]
        ok, msg = validate_allowed_update(
            workout=workout_with_exercises, exercises_data=payload
        )
        assert ok is False
        assert "Cannot change exercise definition" in msg

    def test_set_count_mismatch(self, workout_with_exercises):
        # first exercise has 2 sets in fixture; provide only 1
        payload = [
            {
                "exercise_definition_slug": "test-pushups",
                "sets_of_reps": [{"nb_reps": 1}],
            },
            {
                "exercise_definition_slug": "test-squats",
                "sets_of_reps": [{"nb_reps": 1}],
            },
        ]
        ok, msg = validate_allowed_update(
            workout=workout_with_exercises, exercises_data=payload
        )
        assert ok is False
        assert "Cannot add or remove sets" in msg

    def test_invalid_set_payload_and_extra_field(self, workout_with_exercises):
        # invalid set payload (not a dict)
        payload = [
            {
                "exercise_definition_slug": "test-pushups",
                "sets_of_reps": ["not-a-dict", {"nb_reps": 1}],
            },
            {
                "exercise_definition_slug": "test-squats",
                "sets_of_reps": [{"nb_reps": 1}],
            },
        ]
        ok, msg = validate_allowed_update(
            workout=workout_with_exercises, exercises_data=payload
        )
        assert ok is False
        assert "Invalid set payload" in msg

        # extra field in set
        payload2 = [
            {
                "exercise_definition_slug": "test-pushups",
                "sets_of_reps": [
                    {"nb_reps": 1, "forbidden": 1},
                    {"nb_reps": 2},
                ],
            },
            {
                "exercise_definition_slug": "test-squats",
                "sets_of_reps": [{"nb_reps": 1}],
            },
        ]
        ok2, msg2 = validate_allowed_update(
            workout=workout_with_exercises, exercises_data=payload2
        )
        assert ok2 is False
        assert "Not allowed to change fields" in msg2

    def test_valid_payload(self, workout_with_exercises):
        payload = [
            {
                "exercise_definition_slug": "test-pushups",
                "sets_of_reps": [
                    {"nb_reps": 10},
                    {"nb_reps": 8},
                ],
            },
            {
                "exercise_definition_slug": "test-squats",
                "sets_of_reps": [{"nb_reps": 12}],
            },
        ]
        ok, msg = validate_allowed_update(
            workout=workout_with_exercises, exercises_data=payload
        )
        assert ok is True
        assert msg is None


def test_workout_log_create_resolves_by_order_and_update_targets_variant(
    user, workout_with_exercises
):
    # build payload referencing sets by exercise_order and set_order (snake_case)
    results = [
        {
            "exercise_order": 1,
            "set_order": 1,
            "nb_reps_target": 10,
            "nb_reps_actual": 11,
            "weightActual": 5,
        },
        {"exercise_order": 1, "set_order": 2, "nb_reps_target": 8, "nb_reps_actual": 7},
    ]

    log = workout_log_create(
        user=user, workout_id=workout_with_exercises.pk, results=results
    )
    assert log.entries.count() == 2

    # now test update_targets directly with set id as string and weightActual key
    s = SetOfReps.objects.filter(exercise__workout=workout_with_exercises).first()
    before_nb = s.nb_reps
    update_results = [
        {
            "set_of_reps": str(s.pk),
            "nb_reps_actual": before_nb + 2,
            "weightActual": None,
        },
    ]
    update_targets(workout=workout_with_exercises, results=update_results)
    s.refresh_from_db()
    assert s.nb_reps == before_nb + 2


def test_create_workout_with_exercises_builds_structure(user, db):
    ed = ExerciseDefinition.objects.create(
        slug="test-ex-a", name="A", category="Strength", level="beginner"
    )
    exercises_payload = [
        {
            "exercise_definition_slug": ed.slug,
            "sets_of_reps": [{"nb_reps": 5}],
        },
    ]
    w = create_workout_with_exercises(
        workout_data={"user": user, "name": "New"}, exercises_data=exercises_payload
    )
    assert w.exercises.count() == 1
    assert w.exercises.first().sets_of_reps.count() == 1


def test_create_workout_with_exercises_empty_raises(user):
    with pytest.raises(ValueError):
        create_workout_with_exercises(
            workout_data={"user": user, "name": "NoSets"}, exercises_data=[]
        )


def test_apply_top_level_update_behaviour(user, workout_with_exercises):
    # no-op when workout_data empty
    before_name = workout_with_exercises.name
    returned = apply_top_level_update(workout=workout_with_exercises, workout_data={})
    assert returned.pk == workout_with_exercises.pk
    assert workout_with_exercises.name == before_name

    # when non-editable, raises
    workout_log_create(user=user, workout_id=workout_with_exercises.pk, results=[])
    with pytest.raises(ValueError):
        apply_top_level_update(
            workout=workout_with_exercises, workout_data={"name": "X"}
        )


def test_replace_and_patch_helpers(user, workout_with_exercises):
    # replace all exercises with a new payload
    ed_new = ExerciseDefinition.objects.create(
        slug="test-new-ex", name="NewEx", category="Strength", level="beginner"
    )
    new_payload = [
        {
            "exercise_definition_slug": ed_new.slug,
            "sets_of_reps": [{"nb_reps": 3}],
        }
    ]
    replace_all_exercises(workout=workout_with_exercises, exercises_data=new_payload)
    assert workout_with_exercises.exercises.count() == 1
    ex = workout_with_exercises.exercises.first()
    assert ex.exercise_definition.name == "NewEx"

    # make workout non-editable and patch existing sets
    workout_log_create(user=user, workout_id=workout_with_exercises.pk, results=[])
    patch_payload = [
        {
            "exercise_definition_slug": ed_new.slug,
            "sets_of_reps": [{"nb_reps": 7, "weight": 12}],
        }
    ]
    patch_existing_sets(workout=workout_with_exercises, exercises_data=patch_payload)
    s = workout_with_exercises.exercises.first().sets_of_reps.first()
    assert s.nb_reps == 7
    assert s.weight == 12


def test_update_workout_from_payload_validation(user, workout_with_exercises):
    # non-editable + invalid payload (rename exercise) should raise
    workout_log_create(user=user, workout_id=workout_with_exercises.pk, results=[])
    bad_payload = [
        {
            "exercise_definition_slug": "wrong-slug",
            "sets_of_reps": [{"nb_reps": 1}, {"nb_reps": 2}],
        },
        {
            "exercise_definition_slug": "test-squats",
            "sets_of_reps": [{"nb_reps": 1}],
        },
    ]
    with pytest.raises(ValueError):
        update_workout_from_payload(
            workout=workout_with_exercises, workout_data={}, exercises_data=bad_payload
        )


def test_update_workout_from_payload_replaces_when_editable(user, db):
    # create a fresh workout (editable) and replace exercises
    ed_start = ExerciseDefinition.objects.create(
        slug="test-start", name="Start", category="Strength", level="beginner"
    )
    ed_repl = ExerciseDefinition.objects.create(
        slug="test-repl", name="Repl", category="Strength", level="beginner"
    )
    w = Workout.objects.create(user=user, name="Editable")
    ex = Exercise.objects.create(workout=w, order=1, exercise_definition=ed_start)
    SetOfReps.objects.create(exercise=ex, order=1, nb_reps=3)

    new_payload = [
        {
            "exercise_definition_slug": ed_repl.slug,
            "sets_of_reps": [{"nb_reps": 4}],
        }
    ]
    updated = update_workout_from_payload(
        workout=w, workout_data={"name": "Updated"}, exercises_data=new_payload
    )
    assert updated.name == "Updated"
    assert updated.exercises.count() == 1
    assert updated.exercises.first().exercise_definition.name == "Repl"


def test_update_targets_handles_invalid_set_id(user, workout_with_exercises):
    # pass a result with a non-integer set id to hit the exception branch
    s = SetOfReps.objects.filter(exercise__workout=workout_with_exercises).first()
    before = s.nb_reps
    update_results = [
        {"set_of_reps": "not-an-int", "nb_reps_actual": before + 5},
    ]
    # should not raise and should leave existing targets unchanged
    update_targets(workout=workout_with_exercises, results=update_results)
    s.refresh_from_db()
    assert s.nb_reps == before


def test_update_targets_handles_invalid_set_id_float_string(
    user, workout_with_exercises
):
    # int('1.0') raises ValueError -> should exercise the except branch
    s = SetOfReps.objects.filter(exercise__workout=workout_with_exercises).first()
    before = s.nb_reps
    update_results = [
        {"set_of_reps": "1.0", "nb_reps_actual": before + 2},
    ]
    update_targets(workout=workout_with_exercises, results=update_results)
    s.refresh_from_db()
    assert s.nb_reps == before


def test_update_workout_from_payload_patches_when_noneditable(
    user, workout_with_exercises
):
    # make non-editable
    workout_log_create(user=user, workout_id=workout_with_exercises.pk, results=[])
    # create a valid patch payload that only updates allowed fields
    payload = [
        {
            "exercise_definition_slug": "test-pushups",
            "sets_of_reps": [
                {"nb_reps": 11},
                {"nb_reps": 8},
            ],
        },
        {
            "exercise_definition_slug": "test-squats",
            "sets_of_reps": [{"nb_reps": 12}],
        },
    ]
    updated = update_workout_from_payload(
        workout=workout_with_exercises, workout_data={}, exercises_data=payload
    )
    assert updated.pk == workout_with_exercises.pk
    # verify patch applied
    s = updated.exercises.get(order=1).sets_of_reps.get(order=1)
    assert s.nb_reps == 11


@pytest.mark.django_db
class TestComputeVolumeInsights:
    """Tests for the compute_volume_insights service function."""

    def _make_weighted_workout(self, user):
        w = Workout.objects.create(user=user, name="Bench Day")
        ed = ExerciseDefinition.objects.create(
            slug="vol-bench-press",
            name="Bench Press",
            category="Strength",
            level="intermediate",
        )
        e = Exercise.objects.create(workout=w, order=1, exercise_definition=ed)
        SetOfReps.objects.create(exercise=e, order=1, nb_reps=5, weight=80)
        SetOfReps.objects.create(exercise=e, order=2, nb_reps=5, weight=80)
        return w

    def _make_bodyweight_workout(self, user):
        w = Workout.objects.create(user=user, name="Pull Day")
        ed = ExerciseDefinition.objects.create(
            slug="vol-pull-ups",
            name="Pull-ups",
            category="Strength",
            level="beginner",
        )
        e = Exercise.objects.create(workout=w, order=1, exercise_definition=ed)
        SetOfReps.objects.create(exercise=e, order=1, nb_reps=8)
        SetOfReps.objects.create(exercise=e, order=2, nb_reps=6)
        return w

    def _log(self, user, workout, results):
        return workout_log_create(user=user, workout_id=workout.pk, results=results)

    def test_weighted_exercise_volume(self, user):
        w = self._make_weighted_workout(user)
        r1 = [
            _make_result_by_set(w, 1, 1, 5, 5, weight=80),
            _make_result_by_set(w, 1, 2, 5, 5, weight=80),
        ]
        r2 = [
            _make_result_by_set(w, 1, 1, 5, 5, weight=85),
            _make_result_by_set(w, 1, 2, 5, 5, weight=85),
        ]
        self._log(user, w, r1)
        self._log(user, w, r2)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)

        assert result["workout_name"] == "Bench Day"
        assert result["bodyweight_kg"] is None
        assert len(result["sessions"]) == 2
        assert result["total_volume"] == [800.0, 850.0]
        assert len(result["exercises"]) == 1
        ex = result["exercises"][0]
        assert ex["name"] == "Bench Press"
        assert ex["is_bodyweight"] is False
        assert ex["volume_per_session"] == [800.0, 850.0]

    def test_bodyweight_with_profile_weight(self, user):
        from decimal import Decimal

        w = self._make_bodyweight_workout(user)
        r = [
            _make_result_by_set(w, 1, 1, 8, 8),
            _make_result_by_set(w, 1, 2, 6, 6),
        ]
        self._log(user, w, r)

        result = compute_volume_insights(workout=w, profile_weight_kg=Decimal("70"))

        assert result["bodyweight_kg"] == 70.0
        assert result["total_volume"] == [980.0]
        ex = result["exercises"][0]
        assert ex["is_bodyweight"] is True
        assert ex["volume_per_session"] == [980.0]

    def test_bodyweight_without_profile_weight(self, user):
        w = self._make_bodyweight_workout(user)
        r = [
            _make_result_by_set(w, 1, 1, 8, 8),
            _make_result_by_set(w, 1, 2, 6, 6),
        ]
        self._log(user, w, r)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)

        assert result["total_volume"] == [0.0]
        ex = result["exercises"][0]
        assert ex["is_bodyweight"] is True
        assert ex["volume_per_session"] == [0.0]

    def test_mixed_workout(self, user):
        from decimal import Decimal

        w = Workout.objects.create(user=user, name="Mix")
        ed1 = ExerciseDefinition.objects.create(
            slug="vol-squat", name="Squat", category="Strength", level="beginner"
        )
        ed2 = ExerciseDefinition.objects.create(
            slug="vol-pull-up", name="Pull-up", category="Strength", level="beginner"
        )
        e1 = Exercise.objects.create(workout=w, order=1, exercise_definition=ed1)
        e2 = Exercise.objects.create(workout=w, order=2, exercise_definition=ed2)
        s1 = SetOfReps.objects.create(exercise=e1, order=1, nb_reps=5, weight=100)
        s2 = SetOfReps.objects.create(exercise=e2, order=1, nb_reps=8)

        results = [
            {
                "set_of_reps": s1.pk,
                "nb_reps_target": 5,
                "nb_reps_actual": 5,
                "weight_actual": 100,
            },
            {
                "set_of_reps": s2.pk,
                "nb_reps_target": 8,
                "nb_reps_actual": 8,
                "weight_actual": None,
            },
        ]
        self._log(user, w, results)

        result = compute_volume_insights(workout=w, profile_weight_kg=Decimal("70"))

        assert result["total_volume"] == [1060.0]
        squat_ex = result["exercises"][0]
        pullup_ex = result["exercises"][1]
        assert squat_ex["name"] == "Squat"
        assert squat_ex["is_bodyweight"] is False
        assert squat_ex["volume_per_session"] == [500.0]
        assert pullup_ex["name"] == "Pull-up"
        assert pullup_ex["is_bodyweight"] is True
        assert pullup_ex["volume_per_session"] == [560.0]

    def test_single_session(self, user):
        w = self._make_weighted_workout(user)
        r = [_make_result_by_set(w, 1, 1, 5, 5, weight=80)]
        self._log(user, w, r)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)

        assert len(result["sessions"]) == 1
        assert len(result["total_volume"]) == 1
        assert len(result["exercises"][0]["volume_per_session"]) == 1

    def test_no_sessions(self, user):
        w = self._make_weighted_workout(user)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)

        assert result["sessions"] == []
        assert result["total_volume"] == []
        assert result["exercises"][0]["volume_per_session"] == []

    def test_is_bodyweight_true_when_all_null_weight(self, user):
        w = self._make_bodyweight_workout(user)
        r = [_make_result_by_set(w, 1, 1, 8, 8)]
        self._log(user, w, r)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)
        assert result["exercises"][0]["is_bodyweight"] is True

    def test_is_bodyweight_true_when_all_zero_weight(self, user):
        w = self._make_bodyweight_workout(user)
        s = SetOfReps.objects.get(exercise__workout=w, exercise__order=1, order=1)
        r = [
            {
                "set_of_reps": s.pk,
                "nb_reps_target": 8,
                "nb_reps_actual": 8,
                "weight_actual": 0,
            }
        ]
        self._log(user, w, r)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)
        assert result["exercises"][0]["is_bodyweight"] is True

    def test_is_bodyweight_false_when_any_entry_has_weight(self, user):
        w = self._make_bodyweight_workout(user)
        s1 = SetOfReps.objects.get(exercise__workout=w, exercise__order=1, order=1)
        r_with_weight = [
            {
                "set_of_reps": s1.pk,
                "nb_reps_target": 8,
                "nb_reps_actual": 8,
                "weight_actual": 5,
            }
        ]
        r_without = [_make_result_by_set(w, 1, 1, 8, 8)]
        self._log(user, w, r_with_weight)
        self._log(user, w, r_without)

        result = compute_volume_insights(workout=w, profile_weight_kg=None)
        assert result["exercises"][0]["is_bodyweight"] is False

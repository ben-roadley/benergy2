from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from catalog.models import ExerciseDefinition
from workout.models import Exercise, SetOfReps, Workout, WorkoutLog


class WorkoutAPITest(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.user1 = User.objects.create_user(username="user1", password="pass")
        self.user2 = User.objects.create_user(username="user2", password="pass")

        self.ed1 = ExerciseDefinition.objects.create(
            slug="api-ex1", name="Ex1", category="Strength", level="beginner"
        )
        self.ed2 = ExerciseDefinition.objects.create(
            slug="api-ex2", name="Ex2", category="Strength", level="beginner"
        )
        ed_other = ExerciseDefinition.objects.create(
            slug="api-other-ex", name="OtherEx", category="Strength", level="beginner"
        )
        self.ed_new = ExerciseDefinition.objects.create(
            slug="api-new-ex", name="NewEx", category="Strength", level="beginner"
        )

        # User1 workout with 2 exercises; exercise 1 has 2 sets, exercise 2 has 1 set
        self.workout1 = Workout.objects.create(user=self.user1, name="W1")
        ex1 = Exercise.objects.create(
            workout=self.workout1, order=1, exercise_definition=self.ed1
        )
        self.s11 = SetOfReps.objects.create(exercise=ex1, order=1, nb_reps=5, weight=10)
        self.s12 = SetOfReps.objects.create(exercise=ex1, order=2, nb_reps=6, weight=12)
        ex2 = Exercise.objects.create(
            workout=self.workout1, order=2, exercise_definition=self.ed2
        )
        self.s21 = SetOfReps.objects.create(exercise=ex2, order=1, nb_reps=8, weight=8)

        # User2 workout
        self.workout2 = Workout.objects.create(
            user=self.user2, name="Other"
        )
        exx = Exercise.objects.create(
            workout=self.workout2, order=1, exercise_definition=ed_other
        )
        SetOfReps.objects.create(exercise=exx, order=1, nb_reps=5, weight=5)

    def test_unauthenticated_returns_401(self):
        list_url = reverse("workout-list")
        detail_url = reverse("workout-detail", args=[self.workout1.id])
        results_url = reverse("workout-results")

        res = self.client.get(list_url)
        self.assertIn(
            res.status_code, (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN)
        )

        res = self.client.get(detail_url)
        self.assertIn(
            res.status_code, (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN)
        )

        res = self.client.post(results_url, {}, format="json")
        self.assertIn(
            res.status_code, (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN)
        )

    def test_list_returns_only_users_workouts(self):
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(reverse("workout-list"))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        ids = [w["id"] for w in res.data]
        self.assertIn(self.workout1.id, ids)
        self.assertNotIn(self.workout2.id, ids)

    def test_retrieve_includes_nested_exercises_and_sets(self):
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(reverse("workout-detail", args=[self.workout1.id]))
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        data = res.data
        self.assertIn("exercises", data)
        self.assertEqual(len(data["exercises"]), 2)
        first = data["exercises"][0]
        self.assertIn("sets_of_reps", first)
        self.assertEqual(len(first["sets_of_reps"]), 2)

    def test_create_workout_with_nested_payload(self):
        self.client.force_authenticate(user=self.user1)
        payload = {
            "name": "CreatedWorkout",
            "exercises": [
                {
                    "exercise_definition_slug": self.ed_new.slug,
                    "sets_of_reps": [
                        {"nb_reps": 5, "weight": 7.5},
                        {"nb_reps": 6, "weight": None},
                    ],
                }
            ],
        }
        res = self.client.post(reverse("workout-list"), payload, format="json")
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        created = Workout.objects.filter(user=self.user1, name="CreatedWorkout").first()
        self.assertIsNotNone(created)
        self.assertEqual(created.exercises.count(), 1)
        self.assertEqual(created.exercises.first().sets_of_reps.count(), 2)

    def test_update_blocked_when_logs_exist_returns_403_on_put_with_modified_exercises(
        self,
    ):
        # create a log to make workout non-editable
        WorkoutLog.objects.create(user=self.user1, workout=self.workout1)
        self.client.force_authenticate(user=self.user1)

        # attempt to change top-level 'name' while also sending 'exercises'
        # -> should be forbidden
        payload = {
            "name": "NewName",
            "exercises": [
                {
                    "exercise_definition_slug": "wrong-slug",
                    "sets_of_reps": [{"nb_reps": 5, "weight": 10}],
                }
            ],
        }
        res = self.client.put(
            reverse("workout-detail", args=[self.workout1.id]), payload, format="json"
        )
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)

    def test_submit_results_creates_log_and_entries_and_ignores_unknown_sets(self):
        self.client.force_authenticate(user=self.user1)
        results_url = reverse("workout-results")

        # Prepare results:
        # - one entry by explicit set_of_reps id (s11)
        # - one by exercise_order/set_order (exercise 2, set 1 -> s21)
        # - one unknown (exercise_order 99) which should be ignored
        payload = {
            "workout_id": self.workout1.id,
            "results": [
                {
                    "set_of_reps": self.s11.id,
                    "nb_reps_target": 5,
                    "nb_reps_actual": 5,
                    "weight_actual": 10,
                },
                {
                    "exercise_order": 2,
                    "set_order": 1,
                    "nb_reps_target": 8,
                    "nb_reps_actual": 8,
                    "weight": 8,
                },
                {
                    "exercise_order": 99,
                    "set_order": 1,
                    "nb_reps_target": 1,
                    "nb_reps_actual": 1,
                },
            ],
        }

        before_logs = WorkoutLog.objects.filter(
            user=self.user1, workout=self.workout1
        ).count()
        res = self.client.post(results_url, payload, format="json")
        self.assertEqual(res.status_code, status.HTTP_201_CREATED)

        after_logs = WorkoutLog.objects.filter(
            user=self.user1, workout=self.workout1
        ).count()
        self.assertEqual(after_logs, before_logs + 1)

        log = WorkoutLog.objects.filter(user=self.user1, workout=self.workout1).first()
        # Should create two entries (the unknown set should be ignored)
        self.assertEqual(log.entries.count(), 2)
        set_ids = set(e.set_of_reps_id for e in log.entries.all())
        self.assertIn(self.s11.id, set_ids)
        self.assertIn(self.s21.id, set_ids)

    def test_update_allowed_when_editable_replaces_exercises_and_top_level(self):
        self.client.force_authenticate(user=self.user1)
        ed_only = ExerciseDefinition.objects.create(
            slug="api-only-one", name="OnlyOne", category="Strength", level="beginner"
        )
        payload = {
            "name": "Replaced",
            "exercises": [
                {
                    "exercise_definition_slug": ed_only.slug,
                    "sets_of_reps": [{"nb_reps": 3, "weight": None}],
                }
            ],
        }
        res = self.client.put(
            reverse("workout-detail", args=[self.workout1.id]), payload, format="json"
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        w = Workout.objects.get(pk=self.workout1.pk)
        self.assertEqual(w.name, "Replaced")
        self.assertEqual(w.exercises.count(), 1)

    def test_update_not_editable_missing_exercises_returns_403(self):
        # make non-editable
        WorkoutLog.objects.create(user=self.user1, workout=self.workout1)
        self.client.force_authenticate(user=self.user1)

        # send empty body -> view should require 'exercises'
        res = self.client.put(
            reverse("workout-detail", args=[self.workout1.id]), {}, format="json"
        )
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)

    def test_update_not_editable_invalid_exercises_returns_403_with_message(self):
        # make non-editable
        WorkoutLog.objects.create(user=self.user1, workout=self.workout1)
        self.client.force_authenticate(user=self.user1)

        payload = {
            "exercises": [
                {
                    "exercise_definition_slug": "wrong-slug",
                    "sets_of_reps": [{"nb_reps": 1}],
                },
                {
                    "exercise_definition_slug": self.ed2.slug,
                    "sets_of_reps": [{"nb_reps": 5, "weight": 10}],
                },
            ]
        }
        res = self.client.put(
            reverse("workout-detail", args=[self.workout1.id]), payload, format="json"
        )
        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
        self.assertIn("Cannot change exercise definition", res.data.get("detail", ""))

    def test_submit_results_invalid_payload_returns_400(self):
        self.client.force_authenticate(user=self.user1)
        results_url = reverse("workout-results")
        # missing workout_id
        res = self.client.post(results_url, {"results": []}, format="json")
        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)


    def test_last_workout_session_returns_404_when_none_exist(self):
        self.client.force_authenticate(user=self.user1)

        res = self.client.get(reverse("last-workout-session"))

        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(res.data["message"], "No workout sessions found.")

    def test_last_workout_session_returns_latest_session_details(self):
        self.client.force_authenticate(user=self.user1)

        older_log = WorkoutLog.objects.create(user=self.user1, workout=self.workout1)
        latest_log = WorkoutLog.objects.create(user=self.user1, workout=self.workout1)

        res = self.client.get(reverse("last-workout-session"))

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data["workout_name"], self.workout1.name)
        self.assertEqual(res.data["completed_at"], latest_log.completed_at.isoformat().replace("+00:00", "Z"))
        self.assertNotEqual(older_log.completed_at, latest_log.completed_at)

    def test_cannot_retrieve_other_users_workout_returns_404(self):
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(reverse("workout-detail", args=[self.workout2.id]))
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)

    def test_partial_update_executes(self):
        # Execute PATCH to exercise the partial_update method; accept 200 or 400
        self.client.force_authenticate(user=self.user1)
        res = self.client.patch(
            reverse("workout-detail", args=[self.workout1.id]),
            {"description": "test description"},
            format="json",
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.workout1.refresh_from_db()
        self.assertEqual(self.workout1.description, "test description")


class WorkoutLogsAPITest(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.user1 = User.objects.create_user(username="loguser1", password="pass")
        self.user2 = User.objects.create_user(username="loguser2", password="pass")

        self.workout = Workout.objects.create(
            user=self.user1, name="Log Workout"
        )
        ed_squat = ExerciseDefinition.objects.create(
            slug="log-squat", name="Squat", category="Strength", level="beginner"
        )
        ed_deadlift = ExerciseDefinition.objects.create(
            slug="log-deadlift", name="Deadlift", category="Strength", level="beginner"
        )
        ex1 = Exercise.objects.create(
            workout=self.workout, order=1, exercise_definition=ed_squat
        )
        self.s11 = SetOfReps.objects.create(
            exercise=ex1, order=1, nb_reps=5, weight=100
        )
        self.s12 = SetOfReps.objects.create(
            exercise=ex1, order=2, nb_reps=5, weight=100
        )
        ex2 = Exercise.objects.create(
            workout=self.workout, order=2, exercise_definition=ed_deadlift
        )
        self.s21 = SetOfReps.objects.create(
            exercise=ex2, order=1, nb_reps=3, weight=140
        )

        # Workout owned by user2 — used to verify 404 isolation
        self.other_workout = Workout.objects.create(
            user=self.user2, name="Other"
        )

        self.logs_url = reverse("workout-logs", args=[self.workout.id])

    def _create_log(self, user=None):
        """Helper: create a WorkoutLog with one entry per SetOfReps."""
        if user is None:
            user = self.user1
        log = WorkoutLog.objects.create(user=user, workout=self.workout)
        from workout.models import WorkoutLogEntry

        WorkoutLogEntry.objects.create(
            log=log,
            set_of_reps=self.s11,
            nb_reps_target=5,
            nb_reps_actual=5,
            weight_actual="100.00",
            weight_target="100.00",
        )
        WorkoutLogEntry.objects.create(
            log=log,
            set_of_reps=self.s12,
            nb_reps_target=5,
            nb_reps_actual=4,
            weight_actual=None,
            weight_target="100.00",
        )
        WorkoutLogEntry.objects.create(
            log=log,
            set_of_reps=self.s21,
            nb_reps_target=3,
            nb_reps_actual=3,
            weight_actual="140.00",
            weight_target="140.00",
        )
        return log

    def test_unauthenticated_returns_401(self):
        res = self.client.get(self.logs_url)
        self.assertIn(
            res.status_code, (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN)
        )

    def test_empty_log_returns_empty_list(self):
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(self.logs_url)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, [])

    def test_other_users_workout_returns_404(self):
        self.client.force_authenticate(user=self.user1)
        url = reverse("workout-logs", args=[self.other_workout.id])
        res = self.client.get(url)
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)

    def test_single_session_response_structure(self):
        self._create_log()
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(self.logs_url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data), 1)

        session = res.data[0]
        self.assertIn("id", session)
        self.assertIn("workout_name", session)
        self.assertIn("completed_at", session)
        self.assertIn("exercises", session)
        self.assertEqual(session["workout_name"], "Log Workout")

    def test_single_session_exercises_grouped_correctly(self):
        self._create_log()
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(self.logs_url)

        exercises = res.data[0]["exercises"]
        # Two distinct exercises
        self.assertEqual(len(exercises), 2)

        ex1 = next(e for e in exercises if e["exercise_order"] == 1)
        ex2 = next(e for e in exercises if e["exercise_order"] == 2)

        self.assertEqual(ex1["exercise_name"], "Squat")
        self.assertEqual(len(ex1["sets"]), 2)

        self.assertEqual(ex2["exercise_name"], "Deadlift")
        self.assertEqual(len(ex2["sets"]), 1)

    def test_set_fields_present_and_correct(self):
        self._create_log()
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(self.logs_url)

        exercises = res.data[0]["exercises"]
        ex1 = next(e for e in exercises if e["exercise_order"] == 1)
        set1 = next(s for s in ex1["sets"] if s["set_order"] == 1)

        self.assertEqual(set1["nb_reps_actual"], 5)
        self.assertEqual(set1["nb_reps_target"], 5)
        self.assertEqual(str(set1["weight_actual"]), "100.00")
        self.assertEqual(str(set1["weight_target"]), "100.00")

    def test_null_weight_returned_as_null(self):
        self._create_log()
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(self.logs_url)

        exercises = res.data[0]["exercises"]
        ex1 = next(e for e in exercises if e["exercise_order"] == 1)
        set2 = next(s for s in ex1["sets"] if s["set_order"] == 2)

        self.assertIsNone(set2["weight_actual"])

    def test_multiple_sessions_ordered_newest_first(self):
        self._create_log()
        self._create_log()
        self._create_log()
        self.client.force_authenticate(user=self.user1)
        res = self.client.get(self.logs_url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data), 3)

        # completed_at values should be descending
        dates = [s["completed_at"] for s in res.data]
        self.assertEqual(dates, sorted(dates, reverse=True))


class WorkoutVolumeInsightsAPITest(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.user = User.objects.create_user(username="insights_user", password="pass")
        self.other_user = User.objects.create_user(
            username="insights_other", password="pass"
        )

        self.workout = Workout.objects.create(
            user=self.user, name="Volume Workout"
        )
        ed_squat = ExerciseDefinition.objects.create(
            slug="vol-squat", name="Squat", category="Strength", level="beginner"
        )
        ex = Exercise.objects.create(
            workout=self.workout, order=1, exercise_definition=ed_squat
        )
        self.s1 = SetOfReps.objects.create(exercise=ex, order=1, nb_reps=5, weight=100)

        self.other_workout = Workout.objects.create(
            user=self.other_user, name="Other"
        )

        self.url = reverse("workout-insights-volume", args=[self.workout.id])

    def test_unauthenticated_returns_401_or_403(self):
        res = self.client.get(self.url)
        self.assertIn(
            res.status_code,
            (status.HTTP_401_UNAUTHORIZED, status.HTTP_403_FORBIDDEN),
        )

    def test_other_users_workout_returns_404(self):
        self.client.force_authenticate(user=self.user)
        url = reverse("workout-insights-volume", args=[self.other_workout.id])
        res = self.client.get(url)
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)

    def test_no_logs_returns_empty_sessions(self):
        self.client.force_authenticate(user=self.user)
        res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data["workout_name"], "Volume Workout")
        self.assertEqual(res.data["sessions"], [])
        self.assertEqual(res.data["total_volume"], [])
        self.assertEqual(len(res.data["exercises"]), 1)
        self.assertEqual(res.data["exercises"][0]["volume_per_session"], [])

    def test_with_logs_returns_volume_data(self):
        from workout.models import WorkoutLogEntry

        log = WorkoutLog.objects.create(user=self.user, workout=self.workout)
        WorkoutLogEntry.objects.create(
            log=log,
            set_of_reps=self.s1,
            nb_reps_target=5,
            nb_reps_actual=5,
            weight_actual="100.00",
            weight_target="100.00",
        )

        self.client.force_authenticate(user=self.user)
        res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data["sessions"]), 1)
        self.assertEqual(res.data["total_volume"], [500.0])
        self.assertEqual(res.data["exercises"][0]["name"], "Squat")
        self.assertEqual(res.data["exercises"][0]["is_bodyweight"], False)
        self.assertEqual(res.data["exercises"][0]["volume_per_session"], [500.0])

    def test_profile_error_falls_back_to_none_weight(self):
        from unittest.mock import patch

        from workout.models import WorkoutLogEntry

        log = WorkoutLog.objects.create(user=self.user, workout=self.workout)
        WorkoutLogEntry.objects.create(
            log=log,
            set_of_reps=self.s1,
            nb_reps_target=5,
            nb_reps_actual=5,
            weight_actual=None,
            weight_target=None,
        )

        self.client.force_authenticate(user=self.user)
        with patch(
            "workout.views.get_or_create_profile",
            side_effect=Exception("DB error"),
        ):
            res = self.client.get(self.url)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertIsNone(res.data["bodyweight_kg"])
        # bodyweight exercise with no profile weight → volume is 0
        self.assertEqual(res.data["total_volume"], [0.0])

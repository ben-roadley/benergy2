from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from catalog.models import ExerciseDefinition
from django.contrib.auth import get_user_model


class ExerciseDefinitionAPITest(APITestCase):
    def setUp(self):
        User = get_user_model()
        self.user = User.objects.create_user(username="cataloguser", password="pass")

        ExerciseDefinition.objects.create(
            slug="back-squat",
            name="Back Squat",
            category="Strength",
            equipment="Barbell",
            primary_muscles=["Quads"],
            level="beginner",
        )
        ExerciseDefinition.objects.create(
            slug="bench-press",
            name="Bench Press",
            category="Strength",
            equipment="Barbell",
            primary_muscles=["Chest"],
            level="beginner",
        )

    def test_search_requires_authentication(self):
        res = self.client.get(reverse("exercise-definition-list"), {"q": "sq"})

        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)

    def test_search_returns_matching_exercise_definitions(self):
        self.client.force_authenticate(user=self.user)

        res = self.client.get(reverse("exercise-definition-list"), {"q": "sq"})

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(len(res.data), 1)
        self.assertEqual(res.data[0]["slug"], "back-squat")

    def test_search_rejects_short_query(self):
        self.client.force_authenticate(user=self.user)

        res = self.client.get(reverse("exercise-definition-list"), {"q": "s"})

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("at least 2 characters", str(res.data))

    # def test_all_returns_full_catalog_without_authentication(self):
    #     res = self.client.get(reverse("exercise-definition-all"))

    #     self.assertEqual(res.status_code, status.HTTP_200_OK)
    #     self.assertEqual(len(res.data), 2)
    #     self.assertEqual(res.data[0]["slug"], "back-squat")
    #     self.assertEqual(res.data[1]["slug"], "bench-press")

    def test_all_returns_403_without_authentication(self):
        res = self.client.get(reverse("exercise-definition-all"))

        self.assertEqual(res.status_code, status.HTTP_403_FORBIDDEN)
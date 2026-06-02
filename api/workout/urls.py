from django.urls import include, path
from rest_framework import routers

from workout import views

router = routers.DefaultRouter()
router.register(r"workouts", views.WorkoutViewSet, basename="workout")

urlpatterns = [
    path("workouts/results/", views.submit_workout_results, name="workout-results"),
    path(
        "workouts/last-session/",
        views.last_workout_session,
        name="last-workout-session",
    ),
    path("", include(router.urls)),
]

from django.urls import include, path
from rest_framework import routers

from catalog.views import ExerciseDefinitionViewSet

router = routers.DefaultRouter()
router.register(
    r"exercise-definitions",
    ExerciseDefinitionViewSet,
    basename="exercise-definition",
)

urlpatterns = [
    path("", include(router.urls)),
]

from django.urls import path

from catalog.views import ExerciseDefinitionListView

urlpatterns = [
    path(
        "exercise-definitions/",
        ExerciseDefinitionListView.as_view(),
        name="exercise-definition-list",
    ),
]

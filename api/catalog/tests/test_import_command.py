import json

import pytest
from django.core.management import call_command

from catalog.models import ExerciseDefinition

FIXTURE = [
    {
        "id": "Pushup",
        "name": "Push-Up",
        "category": "strength",
        "force": "push",
        "level": "beginner",
        "mechanic": "compound",
        "equipment": "body only",
        "primaryMuscles": ["chest"],
        "secondaryMuscles": ["shoulders", "triceps"],
        "instructions": ["Get into position.", "Push up."],
        "images": ["Pushup/0.jpg"],
    },
    {
        "id": "Squat",
        "name": "Squat",
        "category": "strength",
        "force": "push",
        "level": "beginner",
        "mechanic": "compound",
        "equipment": "body only",
        "primaryMuscles": ["quadriceps"],
        "secondaryMuscles": ["glutes", "hamstrings"],
        "instructions": ["Stand up.", "Squat down."],
        "images": ["Squat/0.jpg"],
    },
    {
        "id": "Plank",
        "name": "Plank",
        "category": "strength",
        "force": None,
        "level": "beginner",
        "mechanic": None,
        "equipment": "body only",
        "primaryMuscles": ["abdominals"],
        "secondaryMuscles": [],
        "instructions": ["Hold the position."],
        "images": [],
    },
]


def _write_fixture(path, data):
    path.write_text(json.dumps(data), encoding="utf-8")


@pytest.mark.django_db
def test_import_creates_records(tmp_path):
    fixture_file = tmp_path / "exercises.json"
    _write_fixture(fixture_file, FIXTURE)

    call_command("import_exercise_definitions", file=str(fixture_file))

    assert ExerciseDefinition.objects.count() == 3
    pushup = ExerciseDefinition.objects.get(slug="Pushup")
    assert pushup.name == "Push-Up"
    assert pushup.category == "strength"
    assert pushup.force == "push"
    assert pushup.primary_muscles == ["chest"]

    plank = ExerciseDefinition.objects.get(slug="Plank")
    assert plank.force is None
    assert plank.mechanic is None
    assert plank.images == []


@pytest.mark.django_db
def test_import_is_idempotent(tmp_path):
    fixture_file = tmp_path / "exercises.json"
    _write_fixture(fixture_file, FIXTURE)

    call_command("import_exercise_definitions", file=str(fixture_file))
    call_command("import_exercise_definitions", file=str(fixture_file))

    assert ExerciseDefinition.objects.count() == 3


@pytest.mark.django_db
def test_import_updates_existing(tmp_path):
    fixture_file = tmp_path / "exercises.json"
    _write_fixture(fixture_file, FIXTURE)

    call_command("import_exercise_definitions", file=str(fixture_file))

    updated = [dict(r) for r in FIXTURE]
    updated[0]["name"] = "Push-Up (Updated)"
    _write_fixture(fixture_file, updated)

    call_command("import_exercise_definitions", file=str(fixture_file))

    assert ExerciseDefinition.objects.count() == 3
    assert ExerciseDefinition.objects.get(slug="Pushup").name == "Push-Up (Updated)"

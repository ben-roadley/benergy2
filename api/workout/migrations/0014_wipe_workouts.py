"""Data migration: wipe all Workout data before adding the exercise_definition FK.

Since this is a single-user personal app, discarding existing workout data
is the agreed migration strategy when replacing Exercise.name with a FK.
The delete cascades to Exercise, SetOfReps, WorkoutLog, WorkoutLogEntry,
and WarmupSuggestion.
"""

from django.db import migrations


def wipe_workouts(apps, schema_editor):
    Workout = apps.get_model("workout", "Workout")
    Workout.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ("workout", "0013_warmupsuggestion"),
    ]

    operations = [
        migrations.RunPython(wipe_workouts, reverse_code=migrations.RunPython.noop),
    ]

from django.db import migrations


def backfill_set_of_reps(apps, schema_editor):
    WorkoutLogEntry = apps.get_model("workout", "WorkoutLogEntry")
    SetOfReps = apps.get_model("workout", "SetOfReps")
    WorkoutLog = apps.get_model("workout", "WorkoutLog")

    # Iterate entries and try to match by workout, exercise_order and set_order
    for entry in WorkoutLogEntry.objects.all():
        # skip if already populated
        if entry.set_of_reps_id:
            continue
        # try to get the parent workout id via WorkoutLog
        try:
            log = WorkoutLog.objects.get(pk=entry.log_id)
        except WorkoutLog.DoesNotExist:
            continue
        workout_id = log.workout_id

        # Legacy fields should still exist in DB at this migration point: exercise_order and set_order
        exercise_order = getattr(entry, "exercise_order", None)
        set_order = getattr(entry, "set_order", None)
        if exercise_order is None or set_order is None:
            continue

        match = SetOfReps.objects.filter(
            exercise__workout_id=workout_id,
            exercise__order=exercise_order,
            order=set_order,
        ).first()
        if match:
            entry.set_of_reps_id = match.pk
            entry.save(update_fields=["set_of_reps"])


class Migration(migrations.Migration):

    dependencies = [
        ("workout", "0007_add_setofreps_and_weights"),
    ]

    operations = [
        migrations.RunPython(
            backfill_set_of_reps, reverse_code=migrations.RunPython.noop
        ),
    ]

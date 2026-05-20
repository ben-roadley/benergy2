from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("workout", "0008_backfill_setofreps"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="workoutlogentry",
            name="exercise_name",
        ),
        migrations.RemoveField(
            model_name="workoutlogentry",
            name="exercise_order",
        ),
        migrations.RemoveField(
            model_name="workoutlogentry",
            name="set_order",
        ),
        migrations.RemoveField(
            model_name="workoutlogentry",
            name="info",
        ),
    ]

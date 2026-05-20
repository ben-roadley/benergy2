from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workout", "0009_remove_legacy_fields"),
    ]

    operations = [
        migrations.AlterField(
            model_name="workoutlogentry",
            name="set_of_reps",
            field=models.ForeignKey(to="workout.SetOfReps", on_delete=models.CASCADE),
        ),
    ]

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workout", "0006_alter_setofreps_info"),
    ]

    operations = [
        migrations.AddField(
            model_name="workoutlogentry",
            name="set_of_reps",
            field=models.ForeignKey(
                related_name="log_entries",
                null=True,
                blank=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="workout.SetOfReps",
            ),
        ),
        migrations.RenameField(
            model_name="workoutlogentry",
            old_name="weight",
            new_name="weight_actual",
        ),
        migrations.AddField(
            model_name="workoutlogentry",
            name="weight_target",
            field=models.DecimalField(
                max_digits=6,
                decimal_places=2,
                null=True,
                blank=True,
                help_text="Planned/target weight in kg for this set.",
            ),
        ),
    ]

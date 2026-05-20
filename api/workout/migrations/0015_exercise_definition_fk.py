import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("catalog", "0001_initial"),
        ("workout", "0014_wipe_workouts"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="exercise",
            name="name",
        ),
        migrations.AddField(
            model_name="exercise",
            name="exercise_definition",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="exercises",
                to="catalog.exercisedefinition",
            ),
        ),
    ]

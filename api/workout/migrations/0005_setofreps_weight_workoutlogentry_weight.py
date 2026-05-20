from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("workout", "0004_workout_updated_at"),
    ]

    operations = [
        migrations.AddField(
            model_name="setofreps",
            name="weight",
            field=models.DecimalField(
                blank=True,
                decimal_places=2,
                help_text="Weight in kg for this set.",
                max_digits=6,
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="workoutlogentry",
            name="weight",
            field=models.DecimalField(
                blank=True,
                decimal_places=2,
                help_text="Weight in kg actually used.",
                max_digits=6,
                null=True,
            ),
        ),
    ]

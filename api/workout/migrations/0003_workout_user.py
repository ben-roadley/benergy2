import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


def set_default_user(apps, schema_editor):
    Workout = apps.get_model("workout", "Workout")
    User = apps.get_model("auth", "User")
    first_user = User.objects.first()
    if first_user:
        Workout.objects.filter(user__isnull=True).update(user=first_user)


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("workout", "0002_workoutlog_workoutlogentry"),
    ]

    operations = [
        migrations.AddField(
            model_name="workout",
            name="user",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="workouts",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.RunPython(set_default_user, migrations.RunPython.noop),
        migrations.AlterField(
            model_name="workout",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="workouts",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]

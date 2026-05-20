from django.db import models


class ExerciseDefinition(models.Model):
    """A reference exercise from the free-exercise-db public domain dataset.

    This is catalog/reference data — it has no user ownership and is not
    modified by user actions. It exists to provide a stable identity for
    exercises so that future features (per-exercise insights, workout editor
    autocomplete) can FK into it rather than matching by name string.

    NOTE: The existing Exercise.name values in init_db.py (e.g. "Push-ups",
    "Chin-ups") will NOT automatically match slugs in this catalog (e.g.
    "Pushup", "Chin-Up"). A manual name-to-slug mapping will be required
    when the future refactor links Exercise -> ExerciseDefinition.
    """

    slug = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=50)
    force = models.CharField(max_length=20, null=True, blank=True)
    level = models.CharField(max_length=20)
    mechanic = models.CharField(max_length=20, null=True, blank=True)
    equipment = models.CharField(max_length=50, null=True, blank=True)
    primary_muscles = models.JSONField(default=list)
    secondary_muscles = models.JSONField(default=list)
    instructions = models.JSONField(default=list)
    images = models.JSONField(default=list)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name

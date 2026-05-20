"""ORM models for the workout app.

This module defines the core data models used by the workout application:
- `Workout`: a user's named workout plan containing ordered exercises.
- `Exercise`: an ordered exercise belonging to a workout.
- `SetOfReps`: a single set within an exercise describing reps/weight.
- `WorkoutLog`: a completed workout session recorded for a user.
- `WorkoutLogEntry`: a single recorded set result inside a `WorkoutLog`.
"""

from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Workout(models.Model):
    """A named workout plan belonging to a user.

    A `Workout` groups an ordered sequence of `Exercise` objects and
    stores metadata such as last update time.
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name="workouts", on_delete=models.CASCADE
    )
    name = models.CharField(
        max_length=200,
        help_text="Concise name describing this workout.",
    )
    description = models.TextField(
        blank=True,
        help_text="Optional detailed description of the workout.",
    )
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"


class Exercise(models.Model):
    """An ordered exercise that belongs to a `Workout`.

    Each `Exercise` has an integer `order` which defines its position
    within the parent `Workout`. The unique constraint enforces that
    no two exercises share the same order inside a workout.
    """

    workout = models.ForeignKey(
        Workout, related_name="exercises", on_delete=models.CASCADE
    )
    order = models.SmallIntegerField(
        help_text="The order in sequence of exercises for specified workout."
    )
    exercise_definition = models.ForeignKey(
        "catalog.ExerciseDefinition",
        on_delete=models.PROTECT,
        related_name="exercises",
    )
    rest_time_after = models.SmallIntegerField(
        default=60,
        validators=[MinValueValidator(0), MaxValueValidator(300)],
        help_text="In seconds, how much time to rest after this exercise.",
    )

    class Meta:
        ordering = ["workout", "order"]
        constraints = [
            models.UniqueConstraint(
                fields=["workout", "order"], name="unique_order_for_workout"
            )
        ]

    def __str__(self):
        return f"{self.workout.name} - {self.exercise_definition.name}"


class SetOfReps(models.Model):
    """A description of a single set within an `Exercise`.

    `SetOfReps` captures the intended number of repetitions (`nb_reps`)
    and an optional `weight`. The `order` field determines the set's
    position within the exercise.
    """

    exercise = models.ForeignKey(
        Exercise, related_name="sets_of_reps", on_delete=models.CASCADE
    )
    order = models.SmallIntegerField(
        help_text="The order in sequence of sets for specified exercise."
    )
    nb_reps = models.SmallIntegerField(
        help_text="The number of reps to aim for in this set."
    )
    weight = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        help_text="Weight in kg for this set.",
    )

    class Meta:
        ordering = ["exercise", "order"]
        verbose_name_plural = "Sets of reps"
        constraints = [
            models.UniqueConstraint(
                fields=["exercise", "order"], name="unique_order_for_exercise"
            )
        ]

    def __str__(self):
        return (
            f"{self.exercise.workout.name} - "
            f"{self.exercise.exercise_definition.name} - Set #{self.order}"
        )


class WorkoutLog(models.Model):
    """A recorded instance of a user completing a `Workout`.

    `WorkoutLog` ties a `user` to a `workout` and stores a timestamp
    when the workout was completed. Individual set results are stored
    in related `WorkoutLogEntry` records.
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name="workout_logs", on_delete=models.CASCADE
    )
    workout = models.ForeignKey(Workout, related_name="logs", on_delete=models.CASCADE)
    completed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-completed_at"]

    def __str__(self):
        return (
            f"{self.user.username} - {self.workout.name} - "
            f"{self.completed_at:%Y-%m-%d %H:%M}"
        )


class WorkoutLogEntry(models.Model):
    """A single recorded result for a `SetOfReps` inside a `WorkoutLog`.

    Stores both the target and actual repetition counts as well as the
    actual and target weight used for the set. Entries are ordered by
    exercise and set order to make rendering logs straightforward.
    """

    log = models.ForeignKey(
        WorkoutLog, related_name="entries", on_delete=models.CASCADE
    )
    set_of_reps = models.ForeignKey(
        SetOfReps, related_name="log_entries", on_delete=models.CASCADE
    )
    nb_reps_target = models.SmallIntegerField(
        help_text="The target number of reps target for this set."
    )
    nb_reps_actual = models.SmallIntegerField()
    weight_actual = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        help_text="Weight in kg actually used.",
    )
    weight_target = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True,
        help_text="Planned/target weight in kg for this set.",
    )

    class Meta:
        ordering = [
            "-log__completed_at",
            "set_of_reps__exercise__order",
            "set_of_reps__order",
        ]

    def __str__(self):
        if self.set_of_reps:
            return f"{self.log} - {self.set_of_reps}"
        return f"{self.log} - Entry #{self.pk}"


class WarmupSuggestion(models.Model):
    """AI-generated warm-up suggestions for a `Workout`.

    Stores a cached list of suggested warm-up exercises produced by an LLM.
    The `exercises_hash` is a SHA-256 digest of the ordered exercise names;
    when it no longer matches the workout's current exercises the cached
    suggestions are considered stale and regenerated.
    """

    workout = models.OneToOneField(
        Workout,
        related_name="warmup_suggestion",
        on_delete=models.CASCADE,
    )
    exercises_hash = models.CharField(max_length=64)
    suggestions = models.JSONField()
    generated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"WarmupSuggestion({self.workout})"

from decimal import Decimal

from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class SexChoices(models.TextChoices):
    MALE = "male", "Male"
    FEMALE = "female", "Female"
    PREFER_NOT_TO_SAY = "prefer_not_to_say", "Prefer not to say"


class FitnessLevelChoices(models.TextChoices):
    BEGINNER = "beginner", "Beginner"
    INTERMEDIATE = "intermediate", "Intermediate"
    ADVANCED = "advanced", "Advanced"
    ATHLETE = "athlete", "Athlete"


class SessionDurationChoices(models.TextChoices):
    SHORT = "20_30", "20–30 min"
    MEDIUM = "30_45", "30–45 min"
    LONG = "45_60", "45–60 min"
    VERY_LONG = "60_plus", "60+ min"


class SleepQualityChoices(models.TextChoices):
    POOR = "poor", "Poor"
    AVERAGE = "average", "Average"
    GOOD = "good", "Good"


class StressLevelChoices(models.TextChoices):
    LOW = "low", "Low"
    MEDIUM = "medium", "Medium"
    HIGH = "high", "High"


VALID_GOALS = [
    "weight_loss",
    "strength_gain",
    "general_health",
    "endurance",
    "sport_performance",
    "injury_prevention_longevity",
    "flexibility_mobility",
    "other",
]

VALID_EQUIPMENT = [
    "resistance_bands",
    "dumbbells",
    "barbell_and_plates",
    "pull_up_bar",
    "kettlebell",
    "bodyweight_only",
    "other",
]


class UserProfile(models.Model):
    """Stores personal and fitness profile information for a user."""

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
    )
    display_name = models.CharField(max_length=100, blank=True, default="")
    date_of_birth = models.DateField(null=True, blank=True)
    sex = models.CharField(
        max_length=20, choices=SexChoices.choices, blank=True, default=""
    )
    weight_kg = models.DecimalField(
        max_digits=5,
        decimal_places=1,
        null=True,
        blank=True,
        validators=[MinValueValidator(Decimal("0.1"))],
    )
    height_cm = models.SmallIntegerField(
        null=True, blank=True, validators=[MinValueValidator(1)]
    )
    fitness_level = models.CharField(
        max_length=20, choices=FitnessLevelChoices.choices, blank=True, default=""
    )
    goals = models.JSONField(default=list, blank=True)
    equipment = models.JSONField(default=list, blank=True)
    session_duration = models.CharField(
        max_length=10, choices=SessionDurationChoices.choices, blank=True, default=""
    )
    training_days_per_week = models.SmallIntegerField(
        null=True,
        blank=True,
        validators=[MinValueValidator(1), MaxValueValidator(7)],
    )
    injury_history = models.TextField(max_length=300, blank=True, default="")
    lifestyle_description = models.TextField(max_length=500, blank=True, default="")
    sleep_quality = models.CharField(
        max_length=10, choices=SleepQualityChoices.choices, blank=True, default=""
    )
    stress_level = models.CharField(
        max_length=10, choices=StressLevelChoices.choices, blank=True, default=""
    )

    def __str__(self):
        return f"Profile({self.user})"

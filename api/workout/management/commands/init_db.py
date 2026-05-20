from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

from catalog.models import ExerciseDefinition
from workout.models import SetOfReps, Workout


class Command(BaseCommand):
    help = "Initializes the Workout database."

    def handle(self, *args, **options):
        # For E2E tests, we need a user with known credentials.
        # We create it here if it doesn't exist.
        if not User.objects.filter(username="testuser").exists():
            User.objects.create_user("testuser", "testuser@test.com", "testpass123")

        user = User.objects.get(username="testuser")

        Workout.objects.all().delete()

        w = Workout.objects.create(user=user, name="Ben's Big Workout")

        def _exercise(order, slug):
            ed = ExerciseDefinition.objects.get(slug=slug)
            return w.exercises.create(order=order, exercise_definition=ed)

        e1 = _exercise(1, "Pushups")
        e2 = _exercise(2, "Barbell_Squat")
        e3 = _exercise(3, "Barbell_Deadlift")
        e4 = _exercise(4, "Pullups")
        e5 = _exercise(5, "Chin-Up")
        e6 = _exercise(6, "Standing_Calf_Raises")
        e7 = _exercise(7, "Barbell_Curl")

        # Push-ups
        SetOfReps.objects.create(
            exercise=e1, order=1, info="Normal, good form", nb_reps=9, weight=None
        )
        SetOfReps.objects.create(
            exercise=e1, order=2, info="Normal, good form", nb_reps=9, weight=None
        )
        SetOfReps.objects.create(
            exercise=e1, order=3, info="Normal, good form", nb_reps=9, weight=None
        )

        # Squats
        SetOfReps.objects.create(
            exercise=e2, order=1, info=None, nb_reps=8, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e2, order=2, info=None, nb_reps=8, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e2, order=3, info=None, nb_reps=8, weight=60.00
        )

        # Deadlifts
        SetOfReps.objects.create(
            exercise=e3, order=1, info=None, nb_reps=7, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e3, order=2, info=None, nb_reps=7, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e3, order=3, info=None, nb_reps=7, weight=60.00
        )

        # Pull-ups
        SetOfReps.objects.create(
            exercise=e4, order=1, info="5 + 10 + 15 + 25 + 25", nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e4, order=2, info="5 + 10 + 15 + 25 + 25", nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e4, order=3, info="5 + 10 + 15 + 25 + 25", nb_reps=8, weight=80.00
        )

        # Chin-ups
        SetOfReps.objects.create(
            exercise=e5, order=1, info="5 + 10 + 15 + 25 + 25", nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e5, order=2, info="5 + 10 + 15 + 25 + 25", nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e5, order=3, info="5 + 10 + 15 + 25 + 25", nb_reps=8, weight=80.00
        )

        # Calf raises
        SetOfReps.objects.create(
            exercise=e6, order=1, info="feet point forward", nb_reps=30, weight=0.00
        )
        SetOfReps.objects.create(
            exercise=e6, order=2, info="feet point forward", nb_reps=30, weight=0.00
        )
        SetOfReps.objects.create(
            exercise=e6, order=3, info="feet point inwards", nb_reps=30, weight=0.00
        )
        SetOfReps.objects.create(
            exercise=e6, order=4, info="feet point outwards", nb_reps=30, weight=0.00
        )

        # Abs / Biceps curl
        SetOfReps.objects.create(
            exercise=e7, order=1, info=None, nb_reps=12, weight=30.00
        )
        SetOfReps.objects.create(
            exercise=e7, order=2, info=None, nb_reps=12, weight=30.00
        )
        SetOfReps.objects.create(
            exercise=e7, order=3, info=None, nb_reps=12, weight=30.00
        )

        self.stdout.write(self.style.SUCCESS("Successfully initialized db."))

from django.contrib.auth.models import User
from django.core.management.base import BaseCommand

from catalog.models import ExerciseDefinition
from workout.models import SetOfReps, Workout, WorkoutLog, WorkoutLogEntry
from django.utils import timezone
import datetime
import random
from decimal import Decimal, ROUND_HALF_UP


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
            exercise=e1, order=1, nb_reps=9, weight=None
        )
        SetOfReps.objects.create(
            exercise=e1, order=2, nb_reps=9, weight=None
        )
        SetOfReps.objects.create(
            exercise=e1, order=3, nb_reps=9, weight=None
        )

        # Squats
        SetOfReps.objects.create(
            exercise=e2, order=1, nb_reps=8, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e2, order=2, nb_reps=8, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e2, order=3, nb_reps=8, weight=60.00
        )

        # Deadlifts
        SetOfReps.objects.create(
            exercise=e3, order=1, nb_reps=7, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e3, order=2, nb_reps=7, weight=60.00
        )
        SetOfReps.objects.create(
            exercise=e3, order=3, nb_reps=7, weight=60.00
        )

        # Pull-ups
        SetOfReps.objects.create(
            exercise=e4, order=1, nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e4, order=2, nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e4, order=3, nb_reps=8, weight=80.00
        )

        # Chin-ups
        SetOfReps.objects.create(
            exercise=e5, order=1, nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e5, order=2, nb_reps=8, weight=80.00
        )
        SetOfReps.objects.create(
            exercise=e5, order=3, nb_reps=8, weight=80.00
        )

        # Calf raises
        SetOfReps.objects.create(
            exercise=e6, order=1, nb_reps=30, weight=0.00
        )
        SetOfReps.objects.create(
            exercise=e6, order=2, nb_reps=30, weight=0.00
        )
        SetOfReps.objects.create(
            exercise=e6, order=3, nb_reps=30, weight=0.00
        )
        SetOfReps.objects.create(
            exercise=e6, order=4, nb_reps=30, weight=0.00
        )

        # Abs / Biceps curl
        SetOfReps.objects.create(
            exercise=e7, order=1, nb_reps=12, weight=30.00
        )
        SetOfReps.objects.create(
            exercise=e7, order=2, nb_reps=12, weight=30.00
        )
        SetOfReps.objects.create(
            exercise=e7, order=3, nb_reps=12, weight=30.00
        )

        # --- Workout history generation (last ~3 months, ~2x/week) ---
        # Simulate twice-weekly workouts with slow steady progress and occasional plateaus.
        random.seed(0)

        now = timezone.now()
        start_date = (now - datetime.timedelta(days=90)).date()
        end_date = now.date()

        exercises = list(w.exercises.all())

        # Per-exercise progression parameters
        progress = {}
        for ex in exercises:
            name = ex.exercise_definition.name or ""
            # Heavier compound lifts tend to progress faster in absolute kg
            if "Squat" in name or "Deadlift" in name:
                gain = random.uniform(0.6, 1.5)  # kg per week
            elif "Curl" in name:
                gain = random.uniform(0.2, 0.6)
            elif "Pull" in name or "Chin" in name:
                gain = random.uniform(0.2, 0.9)
            else:
                gain = random.uniform(0.1, 0.6)

            # Occasionally a short plateau occurs
            plateaus = []
            if random.random() < 0.6:
                start_week = random.randint(0, 10)
                length_weeks = random.randint(1, 3)
                plateaus.append((start_week, length_weeks))

            progress[ex.id] = {"gain": gain, "plateaus": plateaus}

        # Build session datetimes: ~2 sessions per week with varying weekdays
        nweeks = max(1, ((end_date - start_date).days // 7) + 1)
        sessions = []
        for week in range(nweeks):
            # most weeks have 2 sessions, some have 1
            count = 2 if random.random() > 0.1 else 1
            days = sorted(random.sample(range(7), count))
            week_start = start_date + datetime.timedelta(days=week * 7)
            for d in days:
                session_date = week_start + datetime.timedelta(days=d)
                if session_date > end_date:
                    continue
                session_time = datetime.time(hour=random.randint(6, 20), minute=random.choice([0, 15, 30, 45]))
                session_dt = datetime.datetime.combine(session_date, session_time)
                session_dt = timezone.make_aware(session_dt)
                sessions.append(session_dt)

        sessions.sort()

        for session_dt in sessions:
            log = WorkoutLog.objects.create(user=user, workout=w, completed_at=session_dt)
            weeks_since = (session_dt.date() - start_date).days / 7.0

            for ex in exercises:
                sets = list(ex.sets_of_reps.all())
                params = progress[ex.id]
                gain = params["gain"]

                # determine if this week falls in a plateau for this exercise
                in_plateau = False
                for ps, plen in params["plateaus"]:
                    if ps <= int(weeks_since) < ps + plen:
                        in_plateau = True
                        break

                for s in sets:
                    nb_target = int(s.nb_reps)
                    wt_target = s.weight

                    if wt_target is not None:
                        # baseline weight as float
                        base_wt = float(wt_target)
                        # effective progress: zero during plateau, otherwise linear with noise
                        effective_weeks = weeks_since if not in_plateau else max(0, weeks_since - random.randint(0, 2))
                        prog_wt = base_wt + gain * effective_weeks * (0.8 + random.random() * 0.4)
                        weight_actual = Decimal(prog_wt).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
                        weight_target_decimal = Decimal(str(wt_target)).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
                    else:
                        weight_actual = None
                        weight_target_decimal = None

                    # reps: small random variation; bodyweight exercises may slowly increase reps
                    if wt_target is None:
                        # every ~3 weeks add ~1 rep on average
                        rep_gain = int(weeks_since // 3)
                        nb_actual = max(1, nb_target + rep_gain + random.randint(-1, 1))
                    else:
                        nb_actual = max(0, nb_target + random.randint(-2, 1))

                    WorkoutLogEntry.objects.create(
                        log=log,
                        set_of_reps=s,
                        nb_reps_target=nb_target,
                        nb_reps_actual=nb_actual,
                        weight_actual=weight_actual,
                        weight_target=weight_target_decimal,
                    )

        self.stdout.write(self.style.SUCCESS("Successfully initialized db."))

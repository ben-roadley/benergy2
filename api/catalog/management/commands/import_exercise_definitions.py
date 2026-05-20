import json
from pathlib import Path

from django.core.management.base import BaseCommand

from catalog.models import ExerciseDefinition

DEFAULT_FILE = Path(__file__).resolve().parent.parent.parent / "data" / "exercises.json"


class Command(BaseCommand):
    help = "Import or update ExerciseDefinition records from a JSON file."

    def add_arguments(self, parser):
        parser.add_argument(
            "--file",
            type=str,
            default=str(DEFAULT_FILE),
            help="Path to the exercises JSON file.",
        )

    def handle(self, *args, **options):
        file_path = Path(options["file"])
        with open(file_path, encoding="utf-8") as fh:
            records = json.load(fh)

        count = 0
        for record in records:
            ExerciseDefinition.objects.update_or_create(
                slug=record["id"],
                defaults={
                    "name": record["name"],
                    "category": record["category"],
                    "force": record.get("force"),
                    "level": record["level"],
                    "mechanic": record.get("mechanic"),
                    "equipment": record.get("equipment"),
                    "primary_muscles": record["primaryMuscles"],
                    "secondary_muscles": record["secondaryMuscles"],
                    "instructions": record["instructions"],
                    "images": record.get("images", []),
                },
            )
            count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Successfully imported/updated {count} exercise definitions."
            )
        )

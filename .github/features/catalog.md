# Feature: Exercise Definition Catalog — Data Layer

## Summary

The `catalog` Django app stores a reference database of 873 exercise definitions sourced from the [free-exercise-db](https://github.com/yuhonas/free-exercise-db) public domain dataset. It exposes a search endpoint (`GET /api/exercise-definitions/?q=`) used by the Workout Editor's autocomplete picker. The catalog is the single source of truth for exercise names across the whole app: the `Exercise` model holds a FK to `ExerciseDefinition` rather than a free-text name field. The catalog is populated via an idempotent management command and is browsable through Django admin.

## User Flow

1. After initial setup, run `task b:manage import_exercise_definitions` to load the 873 definitions from `api/catalog/data/exercises.json`.
2. In the Workout Editor, user types ≥ 2 characters into an exercise card → the autocomplete calls `GET /api/exercise-definitions/?q=<query>` → up to 30 matching definitions are shown with name, category, equipment, and primary muscles.
3. User selects a definition; the editor stores the full `ExerciseDefinition` object and sends `exercise_definition_slug` on save.
4. Admins can browse, search, and filter definitions at `/admin/catalog/exercisedefinition/`.

## Data Model

**`ExerciseDefinition`** (`api/catalog/models.py`)

| Field | Type | Constraints |
|-------|------|-------------|
| `slug` | CharField(100) | Primary key |
| `name` | CharField(200) | — |
| `category` | CharField(50) | — |
| `force` | CharField(20) | null, blank |
| `level` | CharField(20) | — |
| `mechanic` | CharField(20) | null, blank |
| `equipment` | CharField(50) | null, blank |
| `primary_muscles` | JSONField | default: `[]` |
| `secondary_muscles` | JSONField | default: `[]` |
| `instructions` | JSONField | default: `[]` |
| `images` | JSONField | default: `[]` |

Default ordering: `["name"]`.

## Management Command

`import_exercise_definitions` — reads a JSON file and calls `update_or_create` on each record (idempotent).

```
task b:manage import_exercise_definitions            # uses bundled data file
task b:manage import_exercise_definitions --file /path/to/file.json   # custom file
```

Source file: `api/catalog/data/exercises.json` (committed; Unlicense / public domain).

## Django Admin

Registered in `api/catalog/admin.py`.

- **List display:** `slug`, `name`, `category`, `level`, `equipment`
- **Search fields:** `name`, `category`, `equipment`

## API Endpoint

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/exercise-definitions/?q=<query>` | Search by name (case-insensitive contains); requires `q` ≥ 2 chars; returns max 30 results |

Response shape per item: `{ slug, name, category, equipment, primary_muscles, level }`.
Returns HTTP 400 if `q` is missing or shorter than 2 characters.

**New files:** `api/catalog/serializers.py`, `api/catalog/views.py`, `api/catalog/urls.py`.
Registered in `api/project/urls.py` under `api/`.

## Tests

3 unit tests in `api/catalog/tests/test_import_command.py` covering the management command.

## Known Limitations / Future Work

- Image paths are stored in the `images` field but images are not served — image hosting is deferred.

## Related Features

- [insights.md](insights.md) — future per-exercise cross-workout insights will consume `ExerciseDefinition` once `Exercise` is linked to the catalog.

# Feature: Exercise Definition Catalog — Data Layer

## Summary

The FastAPI catalog domain stores a reference database of 873 exercise definitions sourced from the [free-exercise-db](https://github.com/yuhonas/free-exercise-db) public domain dataset. It exposes a search endpoint (`GET /exercise-definitions/?q=`) used by the Workout Editor's autocomplete picker. The catalog is the single source of truth for exercise names across the whole app: the workout exercise model holds a foreign key to the catalog definition rather than a free-text name field.

## User Flow

1. The catalog data is available in the existing PostgreSQL database.
2. In the Workout Editor, user types ≥ 2 characters into an exercise card → the autocomplete calls `GET /exercise-definitions/?q=<query>` → up to 30 matching definitions are shown with name, category, equipment, and primary muscles.
3. User selects a definition; the editor stores the full `ExerciseDefinition` object and sends `exercise_definition_slug` on save.
4. <!-- TODO: clarify whether a FastAPI catalog administration workflow is planned. -->

## Data Model

**`CatalogExercisedefinition`** (`fastapi/src/catalog/models.py`)

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

Source data/import process: <!-- TODO: clarify how the FastAPI deployment populates the catalog. -->

## API Endpoint

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/exercise-definitions/?q=<query>` | Search by name (case-insensitive contains); requires `q` ≥ 2 chars; returns max 30 results |

Response shape per item: `{ slug, name, category, equipment, primary_muscles, level }`.
Returns HTTP 400 if `q` is missing or shorter than 2 characters.

**Implementation:** `fastapi/src/catalog/router.py`, `fastapi/src/catalog/schemas.py`, `fastapi/src/catalog/services.py`.

## Tests

Service tests in `fastapi/src/catalog/tests/test_services.py` cover catalog search and result validation.

## Known Limitations / Future Work

- Image paths are stored in the `images` field but images are not served — image hosting is deferred.

## Related Features

- [insights.md](insights.md) — future per-exercise cross-workout insights will consume `ExerciseDefinition` once `Exercise` is linked to the catalog.

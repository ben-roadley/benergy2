# Feature: Workout Editor

## Summary
Allows users to create new workouts or edit existing ones. A workout is a named structure containing an ordered sequence of exercises, each backed by a catalog entry (`ExerciseDefinition`), with multiple sets defining target reps and optional weight. Exercises are selected via a rich autocomplete search against the 873-entry exercise catalog rather than typed as free text. Once a workout has training logs, its structure is locked but set details (reps, weight) can still be updated.

## User Flow

1. **Create**: User clicks "Manage workouts" on home → navigated to `/workouts/manage` → on the empty state or footer button, clicks "Create new workout" → `/workouts/new` → blank form with one default exercise appears.
2. **Edit**: User clicks "Manage workouts" on home → navigated to `/workouts/manage` → clicks a workout button → `/workouts/:id/edit` → form loads existing data.
3. User sets the workout name.
4. User adds, removes, and reorders exercises via drag-and-drop cards.
5. User selects each exercise using the catalog autocomplete (type ≥ 2 chars → dropdown shows name, category, equipment, primary muscles). The "Add exercise" button is at the bottom of the exercise list.
6. User configures each exercise's sets: target reps and optional weight.
7. User clicks "Create Workout" or "Save Changes".
8. On success, user is redirected to the home page. Validation errors are shown inline on failure.
9. **Locked state**: If the workout already has logs, a yellow banner is shown; name, exercise selection, add/remove controls, and per-exercise rest time are disabled — only set reps/weight can be edited via PATCH.

## Data Model

- **Workout**: `id`, `user` (FK), `name`, `description` (text, optional), `updated_at`
- **Exercise**: `id`, `workout` (FK), `order` (SmallInt), `exercise_definition` (FK → `catalog.ExerciseDefinition`, `on_delete=PROTECT`), `rest_time_after` (SmallInt, 0–300, default=60 seconds); unique constraint on `(workout, order)`
- **SetOfReps**: `id`, `exercise` (FK), `order` (SmallInt), `nb_reps` (SmallInt), `weight` (Decimal 6,2, optional); unique constraint on `(exercise, order)`

`Exercise.name` was removed. The canonical exercise name is `exercise_definition.name` everywhere (editor, live session, logs, insights, warmup hash).

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/workouts/` | List all workouts for the authenticated user; includes `is_stagnating` and `is_editable` flags |
| POST | `/workouts/` | Create a new workout with nested exercises and sets |
| GET | `/workouts/{id}/` | Retrieve a single workout with full exercise and set details |
| PUT | `/workouts/{id}/` | Full replacement of the workout and all nested exercises/sets (only allowed if `is_editable`) |
| PATCH | `/workouts/{id}/` | Partial update; if the workout has logs, only `SetOfReps` fields (`nb_reps`, `weight`) are accepted |
| GET | `/exercise-definitions/?q=<query>` | Search the exercise catalog; requires ≥ 2 chars; returns max 30 results |

### Exercise read shape (inside `GET /workouts/{id}/`)

```json
{
  "order": 1,
  "exercise_name": "Bench Press",
  "exercise_definition": {
    "slug": "Barbell_Bench_Press",
    "name": "Bench Press",
    "category": "Strength",
    "equipment": "Barbell",
    "primary_muscles": ["chest"],
    "level": "intermediate"
  },
  "sets_of_reps": [...],
  "rest_time_after": 60
}
```

### Exercise write shape (inside `POST/PUT /workouts/`)

```json
{
  "exercise_definition_slug": "Barbell_Bench_Press",
  "sets_of_reps": [...],
  "rest_time_after": 60
}
```

## Frontend

- **Manage page:** `frontend/src/components/WorkoutManagementView.vue` — lists workouts and routes into create/edit flows
- **Page/Component:** `frontend/src/components/WorkoutEditorView.vue`
- **Routes:** `/workouts/manage` (hub), `/workouts/new` (create), and `/workouts/:id/edit` (edit)
- **Store (Pinia):** None — form state is managed with local `ref`s inside the component
- **Services:** `fetchWorkout()`, `createWorkout()`, `updateWorkout()`, `patchWorkout()`, `searchExerciseDefinitions()` from `frontend/src/services/workout.js`
- **Key UI elements:** InputText for name, draggable exercise cards, PrimeVue `AutoComplete` for exercise selection (with `forceSelection`, rich `#option` slot, 250ms debounce), per-set inline edit table, InputNumber for `rest_time_after` per exercise card (0–300 s, step 5), "Add exercise" button at the bottom of the list (hidden when locked)

## Business Rules

- A workout must have at least one exercise; each exercise must have at least one set.
- Each exercise must reference an existing `ExerciseDefinition` by slug. Invalid slugs are rejected with a 400.
- Exercises and sets use integer `order` fields starting at 1 with no gaps.
- Once a workout has any `WorkoutLog`, its structure is immutable: exercises cannot be added, removed, changed, or reordered; sets cannot be added, removed, or reordered. Only `SetOfReps.nb_reps` and `SetOfReps.weight` may be patched.
- The editability constraint is enforced server-side via `validate_allowed_update()` in `services.py` (compares `exercise_definition_id` against incoming slug) and exposed to the frontend via the `is_editable` flag.
- `on_delete=PROTECT` on the FK prevents deleting a catalog entry that is used by any workout.
- Drag-and-drop reordering of exercises is disabled when the workout is locked.
- When adding a new set, it copies the last set's reps and weight as defaults.

## Known Limitations / TODOs

- No way to delete or archive a workout.
- No duplicate/template feature — cannot copy an existing workout as a starting point.
- Weight is capped at 9999.99 kg (Decimal 6,2).
- Form state is not persisted: navigating away before saving loses all changes.
- No undo/redo.
- No loading indicators while fetching workout data.

## Related Features

- [workout-session.md](workout-session.md) — the workout structure defined here is executed during a live session.
- [workout-log.md](workout-log.md) — the presence of logs triggers the editability lock described above.
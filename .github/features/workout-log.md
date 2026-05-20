# Feature: Workout Log

## Summary
Captures every completed workout session as a `WorkoutLog` with associated `WorkoutLogEntry` records, and computes whether the user is "stagnating" (no progress in the last 3 sessions). Log data is surfaced in three places: the post-session summary screen, a stagnation flag on the home page, and a dedicated **Training Logs page** where all past sessions for a workout can be reviewed in a table.

## User Flow

1. **Implicit creation**: After the user completes a [Workout Session](workout-session.md), results are submitted via `POST /api/workouts/results/`. The backend creates a `WorkoutLog` and one `WorkoutLogEntry` per set.
2. **Immediate feedback**: The session's Complete Phase displays a grouped results table (actual vs. target reps/weight for every set) with colour coding.
3. **Home page indicators**: The workout list on the home page includes an `is_stagnating` flag. If true, a yellow warning banner reads "No progress in the last 3 sessions" and a "?" button opens a tips dialog.
4. **History button**: Next to each workout's edit pencil, a clock icon (history button) navigates to `/workouts/:id/logs`.
5. **Training Logs page**: Displays all past sessions for the workout, ordered newest-first. Each session shows a locale-formatted date/time heading, then one sub-section per exercise with a compact table: Set | Reps | Weight (shows "—" when no weight was logged).
6. **Stagnation tips**: The tips dialog lists 6 static suggestions (increase rest, deload, add variation, adjust tempo, add sets, focus on recovery).
7. **Implicit lock**: Once a log exists for a workout, the [Workout Editor](workout-editor.md) prevents structural changes to that workout.

## Data Model

- **WorkoutLog**: `id`, `user` (FK), `workout` (FK), `completed_at` (DateTimeField, auto_now_add)
- **WorkoutLogEntry**: `id`, `log` (FK), `set_of_reps` (FK), `nb_reps_target`, `nb_reps_actual`, `weight_target`, `weight_actual`
- **Stagnation**: Not stored — computed on-the-fly by `is_workout_stagnating(user, workout)` in `services.py` and injected into the workout list response

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/workouts/` | Returns workout list; each item includes the computed `is_stagnating` boolean |
| POST | `/api/workouts/results/` | Submits session results; creates `WorkoutLog` + `WorkoutLogEntry` records and updates `SetOfReps` targets |
| GET | `/api/workouts/{id}/logs/` | Returns all completed sessions for a workout, ordered newest-first, with entries grouped by exercise |

## Frontend

- **Home stagnation display:** `frontend/src/components/HomeView.vue` — workout cards show the stagnation banner, tips dialog trigger, and a `pi pi-history` button navigating to the logs page
- **Post-session results display:** `frontend/src/components/WorkoutSession/CompletePhase.vue` — grouped results table
- **Training Logs page:** `frontend/src/components/WorkoutLogsView.vue` — fetches and renders all past sessions for a workout; manages its own local state (no Pinia store)
- **Routes:** `/` (home stagnation flag), `/workout/:id` (session complete screen), `/workouts/:id/logs` (training logs history)
- **Store (Pinia):** Not used by the logs page. `is_stagnating` is returned by the server in the workout list; session results live in `useWorkoutStore` during the session
- **Services:** `submitWorkoutResults(payload)` and `fetchWorkoutLogs(id)` in `frontend/src/services/workout.js`; backend logic in `workout_log_create()` and `update_targets()` in `api/workout/services.py`

## Business Rules

- **Stagnation definition**: The user is stagnating if the last 3 completed sessions have identical `(exerciseOrder, setOrder, actualReps, actualWeight)` tuples across all sets.
- **Stagnation requires 3+ logs**: If fewer than 3 logs exist for a workout, `is_stagnating` is always false.
- **Target updates after logging**:
  - If `actualWeight > targetWeight`: set `weight := actualWeight` and set `nb_reps := actualReps` (whatever reps were done at the new weight).
  - Else if `weight` is unchanged and `actualReps > targetReps`: set `nb_reps := actualReps`.
  - If `actualWeight < targetWeight`: targets are left unchanged.
- **Entry ordering**: Entries are ordered by exercise order then set order for consistent display.
- **Workflow lock**: Once any `WorkoutLog` exists for a workout, structural edits to that workout are prohibited in the editor.
- **Payload flexibility**: Backend accepts both camelCase (`actualReps`) and snake_case (`actual_reps`) keys in submitted result dicts.

## Known Limitations / TODOs

- No per-exercise stagnation detection; stagnation is evaluated globally across all sets.
- No filtering, sorting, or date-range queries on logs.
- No statistics: no streak tracking, total volume, or progress charts.
- Stagnation tips are static; no personalised recommendations.
- No ability to manually back-fill past logs.
- No CSV/JSON export of log data.
- If submission fails after 3 retries, the payload is enqueued in localStorage but there is no UI to show queue status or retry it manually.

## Related Features

- [workout-editor.md](workout-editor.md) — becomes structurally locked once any log exists.
- [workout-session.md](workout-session.md) — logs are created on session submission; result display is part of the session's Complete Phase.
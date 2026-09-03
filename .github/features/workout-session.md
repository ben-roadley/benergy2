# Feature: Workout Session

## Summary
The "live workout" experience starts from the workout chooser page, where the user picks a workout or resumes an active session. Once inside a workout, they execute it set-by-set, log actual reps and weight, and receive phase-driven feedback (warmup timer, rest countdown, next-set preview). Session state is persisted to localStorage so the user can resume after an interruption. On completion, results are submitted to the backend, which creates a log entry and updates future targets.

## User Flow

1. User clicks **Start a workout** on the home page → navigated to `/workouts/start`.
2. On the workout chooser page, the user either resumes an active session, restores a saved session from localStorage, or selects a workout to start.
3. **Restoration logic**: if an active session is already in memory it is resumed; else if localStorage contains a saved session for this workout it is restored; else the workout is fetched from the backend and a fresh session starts.
4. **Warmup Phase**: elapsed-time counter shown (MM:SS). User clicks "Go" when ready.
5. **Exercise Phase**: shows exercise name, set position (Set X of Y), and target reps/weight. User clicks "Done" when the set is complete.
6. **Log Reps Phase**: user adjusts actual reps (±1) and actual weight (±5 kg) via +/− buttons, then clicks "Next".
7. **Rest Phase**: countdown from the completed exercise's `rest_time_after` seconds; "Skip" button available; next exercise preview shown. Auto-advances when countdown reaches 0.
8. Steps 5–7 repeat for every set across all exercises.
9. **Complete Phase**: results are auto-submitted in the background. A grouped summary table is shown (actual vs. target reps/weight, colour-coded). User clicks "Back to Home".

## Data Model

- **Workout** (read from API): `id`, `name`, `exercises[]` each with `rest_time_after` and `sets_of_reps[]`
- **WorkoutLog** (created on submission): `id`, `user` (FK), `workout` (FK), `completed_at`
- **WorkoutLogEntry** (one per set on submission): `id`, `log` (FK), `set_of_reps` (FK), `nb_reps_target`, `nb_reps_actual`, `weight_target`, `weight_actual`
- **Session state** (in-memory + localStorage only): `phase`, `currentStepIndex`, `results[]`, `warmupElapsed`, `restRemaining`

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/workouts/{id}/` | Fetch full workout structure (exercises + sets) to initialise the session |
| POST | `/workouts/results/` | Submit completed session; creates `WorkoutLog` + `WorkoutLogEntry` records and updates `SetOfReps` targets |

## Frontend

- **Chooser:** `frontend/src/components/WorkoutSessionsView.vue` — workout selection page reached from the home launcher
- **Container:** `frontend/src/components/WorkoutSessionView.vue`
- **Phase sub-components:**
  - `frontend/src/components/WorkoutSession/WarmupPhase.vue` — elapsed timer + "Go" button
  - `frontend/src/components/WorkoutSession/ExercisePhase.vue` — exercise name, set metadata, target display, "Done" button
  - `frontend/src/components/WorkoutSession/LogRepsPhase.vue` — actual reps/weight input with +/− buttons
  - `frontend/src/components/WorkoutSession/RestPhase.vue` — countdown timer, "Skip", next-exercise preview
  - `frontend/src/components/WorkoutSession/CompletePhase.vue` — grouped results table
- **Routes:** `/workouts/start` for workout selection and `/workout/:id` for the live session
- **Store (Pinia):** `useWorkoutStore` in `frontend/src/stores/workout.js`
  - **Key state:** `workout`, `phase` (WARMUP | EXERCISE | LOG_REPS | REST | COMPLETE), `currentStepIndex`, `results[]`, `warmupElapsed`, `restRemaining`
  - **Key computed:** `allSteps` (flattened 1-D array of sets), `currentStep`, `isLastStep`, `isActive`, `groupedResults`
  - **Key actions:** `startWorkout(id)`, `endWarmup()`, `enterLogReps()`, `confirmReps(actualReps, actualWeight)`, `advanceToNextStep()`, `abandon()`, `sendResults()`, `save()`, `loadSaved()`, `clearSaved()`

## Business Rules

- **Linear phase machine**: WARMUP → EXERCISE → LOG_REPS → REST → (EXERCISE … repeat) → COMPLETE. No skipping phases.
- **Step flattening**: The workout hierarchy (exercises → sets) is flattened into a 1-D array; `currentStepIndex` walks through it.
- **Auto-advance on rest**: When `restRemaining` reaches 0, the session advances automatically to the next EXERCISE phase.
- **Result tracking**: Each confirmed set records `targetReps`, `targetWeight`, `actualReps`, `actualWeight`.
- **Target update logic** (applied server-side after submission):
  - `actualWeight > targetWeight` → `weight := actualWeight`, `nb_reps := actualReps` (reps recorded at the new weight, regardless of whether they are above or below the old target)
  - `actualWeight == targetWeight` and `actualReps > targetReps` → `nb_reps := actualReps`
  - `actualWeight < targetWeight` → targets left unchanged
- **Submission retry**: Up to 3 attempts with exponential backoff (500 ms, 1 000 ms). On final failure, payload is enqueued in localStorage for later. Submission is fire-and-forget from the UI perspective.
- **Resumability**: Session state is saved to localStorage after every state transition; `loadSaved()` restores it on page reload.
- **Cleanup**: localStorage session is cleared on completion or abandonment.

## Known Limitations / TODOs

- Cannot pause mid-phase or skip a set; every set must be logged in order.
- Weight adjustment is fixed at 5 kg increments — no customisation.
- No audio, haptic, or visual flash feedback on phase transitions.
- UI is not optimised for small mobile screens.
- No background sync for the localStorage retry queue; enqueued results stay until manually retried (no retry UI exists).
- Stagnation/progressive-overload logic is simplistic and does not account for fatigue or periodisation.

## Related Features

- [workout-editor.md](workout-editor.md) — defines the workout structure that is executed in a session.
- [workout-log.md](workout-log.md) — session submission creates the log records; Complete Phase displays them.
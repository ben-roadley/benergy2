# Feature: Workout Navigation

## Summary
The home page now acts as a launcher for the main workout flows. It offers four clear entry points: start a workout, review workout logs and insights, manage workout definitions, and open evening stretches. The new hub pages split the previous workout-list actions into two focused screens: `/workouts/logs-and-insights` for history and charts, and `/workouts/manage` for workout editing.

## User Flow

1. User signs in and lands on `/`.
2. User clicks **Start a workout** to open `/workouts/start`.
3. User clicks **Workout logs & insights** to open `/workouts/logs-and-insights`.
4. On the logs and insights hub, each workout row has a history icon for `/workouts/:id/logs` and a chart icon for `/workouts/:id/insights`.
5. User clicks **Manage workouts** to open `/workouts/manage`.
6. On the manage page, each workout row has a pencil button for `/workouts/:id/edit`.
7. Empty states on the hub pages offer a create-workout button that routes to `/workouts/new`.

## Data Model

No new models. This navigation layer reuses the existing workout, log, and profile data exposed by the APIs documented in [workout-editor.md](workout-editor.md), [workout-log.md](workout-log.md), [workout-session.md](workout-session.md), and [insights.md](insights.md).

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/workouts/` | Lists workouts for the manage and logs/insights hubs |
| GET | `/workouts/{id}/` | Loads a workout for the editor |
| POST | `/workouts/` | Creates a new workout from the editor |
| GET | `/workouts/{id}/logs/` | Loads the training log history for a workout |
| GET | `/workouts/{id}/insights/volume/` | Loads workout volume charts |

## Frontend

- **Home launcher:** `frontend/src/components/HomeView.vue` — four top-level buttons for start, logs/insights, manage, and evening stretches
- **Workout start chooser:** `frontend/src/components/WorkoutSessionsView.vue` — lists workouts, shows resume and stagnation state, and routes into live sessions
- **Logs and insights hub:** `frontend/src/components/WorkoutLogsAndInsightsView.vue` — lists workouts with per-workout history and chart actions
- **Workout management hub:** `frontend/src/components/WorkoutManagementView.vue` — lists workouts with edit and create actions
- **Evening stretches section:** `frontend/src/components/EveningStretchesView.vue` — opened from the home launcher at `/evening-stretches`
- **Routes:** `/`, `/workouts/start`, `/workouts/logs-and-insights`, `/workouts/manage`, and `/evening-stretches`
- **Shared service:** `fetchWorkouts()` in `frontend/src/services/workout.js`

## Related Features

- [workout-session.md](workout-session.md) — live workout flow starts from the workout chooser page.
- [workout-log.md](workout-log.md) — history is now reached through the logs and insights hub.
- [workout-editor.md](workout-editor.md) — editing is reached through the manage workouts hub.
- [insights.md](insights.md) — chart viewing is reached through the logs and insights hub.
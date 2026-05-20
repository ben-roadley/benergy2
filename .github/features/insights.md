# Feature: Workout Insights

## Summary

Provides a visual analytics page for each workout, showing training volume (sets × reps × weight) over time as line charts. One global "Total Workout Load" chart is shown first, followed by one per-exercise chart — all using PrimeVue's Chart.js integration. Bodyweight exercises (where `weight_actual` is null or 0) use the user's profile weight as a fallback; if no profile weight is set, those exercises contribute 0 to volume and a prompt is shown. The feature is read-only and computes all data on-the-fly from existing `WorkoutLog` / `WorkoutLogEntry` records — no new models or migrations were required. This is the first metric in a planned Insights section; further analytics will be added over time.

## User Flow

1. From the home screen, the user taps the **chart-line icon** next to a workout (third icon in the row, after pencil and history).
2. The browser navigates to `/workouts/:id/insights`.
3. The page loads and calls `GET /api/workouts/{id}/insights/volume/`.
4. An educational blurb ("What is training volume?") is shown at the top.
5. If `bodyweight_kg` is `null` and any exercise is bodyweight-only, a prompt to set profile weight is displayed.
6. If only one session has been logged, a banner encourages the user to log more sessions.
7. The **Total Workout Load** chart is rendered first (sum of all exercise volumes per session).
8. Per-exercise charts follow, ordered by exercise order. Each weighted exercise shows volume in kg; bodyweight exercises show volume calculated from profile weight with a labelled note.
9. If no sessions have been logged, an empty state is shown in place of all charts.
10. If the API call fails, an error message is shown with a **Retry** button.
11. The back button navigates to `/`.

## Data Model

No new models. All data is computed from existing records:

- **WorkoutLog**: `id`, `user` (FK), `workout` (FK), `completed_at` — session timestamp; ordered oldest-first for chart x-axis
- **WorkoutLogEntry**: `id`, `log` (FK), `set_of_reps` (FK), `nb_reps_actual`, `weight_actual` — raw inputs for volume calculation
- **UserProfile**: `weight_kg` (Decimal, nullable) — bodyweight fallback for exercises where `weight_actual` is null or 0

## Volume Calculation

```
volume per set = nb_reps_actual × effective_weight

effective_weight =
  float(weight_actual)       if weight_actual is not None and != 0
  float(profile_weight_kg)   elif profile_weight_kg is not None
  0.0                        otherwise
```

`is_bodyweight` per exercise: `True` if **all** entries for that exercise across **all** sessions have `weight_actual` null or 0.

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/workouts/{id}/insights/volume/` | Returns aggregated volume data per session and per exercise for the given workout |

**Response shape:**
```json
{
  "workout_name": "My Workout",
  "bodyweight_kg": 70.0,
  "sessions": ["12 May", "19 May"],
  "total_volume": [2100.5, 2350.0],
  "exercises": [
    { "name": "Squats", "order": 1, "is_bodyweight": false, "volume_per_session": [1200.0, 1350.0] },
    { "name": "Pull-ups", "order": 2, "is_bodyweight": true, "volume_per_session": [900.5, 1000.0] }
  ]
}
```
- `bodyweight_kg` is `null` when profile weight is not set.
- `sessions`, `total_volume`, and each `volume_per_session` are parallel arrays — index `i` corresponds to session `i`.
- `sessions` labels are formatted server-side as `"D MMM"` (e.g. `"12 May"`).
- Returns empty arrays when no sessions have been logged (HTTP 200, not 404).

## Frontend

- **Insights page:** `frontend/src/components/WorkoutInsightsView.vue` — manages its own local state (no Pinia store). Fetches on mount, renders loading/error/empty states and chart cards. Exercises are sorted by `order` client-side via a computed property.
- **Home screen button:** `frontend/src/components/HomeView.vue` — `pi pi-chart-line` button added to `.workout-item-row`, after the existing pencil and history icons.
- **Route:** `/workouts/:id/insights` (`name: 'workout-insights'`) in `frontend/src/router/index.js`.
- **Service:** `fetchWorkoutVolumeInsights(id)` in `frontend/src/services/workout.js` — `GET /api/workouts/{id}/insights/volume/`.
- **Charting:** PrimeVue `<Chart type="line">` (Chart.js v4). `chart.js` is a direct frontend dependency. Chart options use `responsive: true, maintainAspectRatio: false` with a fixed-height wrapper (`height: 200px`) for correct mobile rendering.
- **Pinia stores used:** none (page-local state only). Profile weight is supplied by the API response (`bodyweight_kg`) rather than fetched from `useProfileStore`.

## Known Limitations / TODOs

- `is_bodyweight` is workout-wide, not per-session. If an exercise gains weight in later sessions it flips globally to "weighted".
- Only one metric (volume over time) is implemented. Future metrics (1RM estimates, session frequency, RPE) are planned for the Insights section.
- No filtering by date range or exercise subset.
- No CSV/JSON export of chart data.
- Session date labels are English-only (formatted server-side with `strftime`).

## Related Features

- [workout-log.md](workout-log.md) — provides the `WorkoutLog` / `WorkoutLogEntry` records consumed by this feature.
- [user-profile.md](user-profile.md) — `UserProfile.weight_kg` is the bodyweight fallback used in volume calculation.

# Feature: User Profile

## Summary
Each authenticated user has a single `UserProfile` record (created on first access) that stores personal and fitness data: display name, date of birth, sex, weight, height, fitness level, goals, available equipment, preferred session duration, training days per week, injury history, lifestyle description, sleep quality, and stress level. All fields are optional. The profile is the intended data source for future AI-powered workout recommendations. The `display_name` field is surfaced in the session response and throughout the UI; it falls back to `username` when blank.

## User Flow

1. The user clicks their name in the app header — it navigates to `/profile`.
2. On mount, the profile form fetches the current profile (`GET /api/profile/`) and the valid options for all choice fields (`GET /api/profile/options/`). A blank profile is auto-created on the backend if one does not yet exist.
3. The user fills in any combination of the 14 fields across three sections (About you / Your training / Your lifestyle) and clicks **Save profile**.
4. A `PATCH /api/profile/` request is sent with only the form payload. On success, a Toast confirms the save and `authStore.user.display_name` is updated in-place (no extra session call). On failure, a Toast and an inline `Message` show the parsed field-level errors from the backend.
5. Optionally, the user clicks **Clear all profile data**. A `ConfirmDialog` prompts for confirmation, then `POST /api/profile/clear/` resets all fields to defaults and clears `display_name` in the auth store.
6. After saving a display name, the header and home page welcome message reflect the new name immediately.

## Data Model

**`UserProfile`** — table `users_userprofile`

| Field | Type | Constraints |
|---|---|---|
| `id` | AutoField | PK |
| `user` | OneToOneField → AUTH_USER_MODEL | CASCADE, `related_name='profile'` |
| `display_name` | CharField(100) | blank, default `''` |
| `date_of_birth` | DateField | null, blank; must be in the past |
| `sex` | CharField(20) | choices: `SexChoices`; blank, default `''` |
| `weight_kg` | DecimalField(5,1) | null, blank; min 0.1 |
| `height_cm` | SmallIntegerField | null, blank; min 1 |
| `fitness_level` | CharField(20) | choices: `FitnessLevelChoices`; blank, default `''` |
| `goals` | JSONField | default `[]`; list of strings from `VALID_GOALS` |
| `equipment` | JSONField | default `[]`; list of strings from `VALID_EQUIPMENT` |
| `session_duration` | CharField(10) | choices: `SessionDurationChoices`; blank, default `''` |
| `training_days_per_week` | SmallIntegerField | null, blank; min 1, max 7 |
| `injury_history` | TextField(300) | blank, default `''` |
| `lifestyle_description` | TextField(500) | blank, default `''` |
| `sleep_quality` | CharField(10) | choices: `SleepQualityChoices`; blank, default `''` |
| `stress_level` | CharField(10) | choices: `StressLevelChoices`; blank, default `''` |

**Choice enums** (defined in `api/users/models.py`):
- `SexChoices`: `male`, `female`, `prefer_not_to_say`
- `FitnessLevelChoices`: `beginner`, `intermediate`, `advanced`, `athlete`
- `SessionDurationChoices`: `20_30`, `30_45`, `45_60`, `60_plus`
- `SleepQualityChoices`: `poor`, `average`, `good`
- `StressLevelChoices`: `low`, `medium`, `high`

**Constants** (validated by serializer):
- `VALID_GOALS`: `weight_loss`, `strength_gain`, `general_health`, `endurance`, `sport_performance`, `injury_prevention_longevity`, `flexibility_mobility`, `other`
- `VALID_EQUIPMENT`: `resistance_bands`, `dumbbells`, `barbell_and_plates`, `pull_up_bar`, `kettlebell`, `bodyweight_only`, `other`

## API Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/api/profile/` | Return the authenticated user's profile; auto-creates a blank one if absent |
| PATCH | `/api/profile/` | Partially update the profile; only supplied fields are changed |
| POST | `/api/profile/clear/` | Reset all optional fields to defaults (None / `''` / `[]`) |
| GET | `/api/profile/options/` | Return all valid values for every choice/multi-select field |

All four endpoints require authentication. Unauthenticated requests receive HTTP 403 (DRF `SessionAuthentication` behaviour).

The session endpoint (`GET /api/auth/session/`) also returns `display_name` inside the `user` object so the UI can display it without an extra profile fetch.

## Frontend

- **Route:** `/profile` → `frontend/src/components/ProfileView.vue` (`meta: { requiresAuth: true }`)
- **Store:** `frontend/src/stores/profile.js` — `useProfileStore`
  - State: `profile`, `options`, `loading`, `error`
  - Actions: `fetchProfile()`, `fetchOptions()`, `saveProfile(data)`, `clearProfile()`
  - `saveProfile` and `clearProfile` both update `authStore.user.display_name` in-place
- **Component:** `frontend/src/components/ProfileView.vue`
  - Three sections: *About you*, *Your training*, *Your lifestyle*
  - Dropdowns and MultiSelects populated from `profileStore.options` (fetched on mount)
  - Display labels for raw API values are defined locally in the component (not from the backend)
  - Save: PrimeVue Toast on success; Toast + inline `Message` with parsed field-level errors on failure
  - Clear: PrimeVue `ConfirmDialog` → `clearProfile()` → Toast
- **App.vue:** `<Toast />` and `<ConfirmDialog />` added at the root; `ToastService` and `ConfirmationService` registered in `main.js`
- **Header:** username span shows `display_name || username` and navigates to `/profile` on click
- **Home page:** welcome heading shows `display_name || username`

## Backend Layout

| File | Role |
|---|---|
| `api/users/models.py` | `UserProfile` model, all `TextChoices` classes, `VALID_GOALS`, `VALID_EQUIPMENT` |
| `api/users/migrations/0001_initial.py` | Schema migration creating `users_userprofile` |
| `api/users/services.py` | `get_or_create_profile`, `update_profile`, `clear_profile` |
| `api/users/serializers.py` | `UserProfileSerializer` with field validators |
| `api/users/profile_views.py` | `profile_view`, `profile_clear_view`, `profile_options_view` |
| `api/users/auth_views.py` | `_user_data()` — exposes `display_name` on the session endpoint |
| `api/users/tests/test_services.py` | 11 service unit tests |
| `api/users/tests/test_api.py` | 22 API tests |

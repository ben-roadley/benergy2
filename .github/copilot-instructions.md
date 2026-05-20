# Onboarding notes for coding agents

Summary
-------
This repository implements Benergy — a home training web app. Backend is a Django REST API (located in `api/`). Frontend is a Vue.js app built with Vite (located in `frontend/`). The app supports user auth, a user profile (personal/fitness data), per-user workout editing, workout session logging/history, a "live workout" feature, AI-generated warm-up suggestions (LLM via GitHub Models / Ollama), and a workout Insights section (volume-over-time charts). The stack is containerised and commonly run via Docker Compose.

Intended audience for this app, and context for these notes
----------
- This is a a home training web app for recreational strength and conditioning. This app is also a pet project, for learning how to use modern AI tools efficiently, and so the app can be developed as if it was meant to be commercialized at some point in the future.

Tech stack
----------
- Backend: Python 3.11+, Django, Django REST Framework, pytest for tests
- Frontend: Vue 3 (Vite), Pinia, Vue Router, PrimeVue (Aura theme), Vitest for unit tests
- LLM integration: `openai>=1.0,<2` SDK; OpenAI-compatible API (default: GitHub Models `gpt-4o-mini`; switchable to local Ollama)
- Orchestration: Docker Compose (development) and `Dockerfile.prod` for production images
- CI/CD: build tasks in `Taskfile.yml` (used locally via `task`) — images pushed to a registry for self-hosted deploys

Project layout (short)
----------------------
- `api/` — Django app, `manage.py`, Dockerfiles, tests, services and serializers
  - `api/users/` — auth views, user profile model/services/views/serializers
  - `api/workout/` — workout model/services/views/serializers
  - `api/catalog/` — `ExerciseDefinition` reference model, import management command, exercise data file, and search API (`views.py`, `serializers.py`, `urls.py`)
  - `api/workout/warmup_suggestions_service.py` — isolated LLM service for warm-up suggestions (mock independently in tests)
  - `api/workout/services.py` — includes `compute_volume_insights()` for the Insights feature (volume-over-time aggregation)
  - `api/setup.cfg` — flake8 config (`max-line-length = 88`, aligned with black)
- `frontend/` — Vue app, `package.json`, Playwright e2e config under `e2e/`
- `nginx/` — reverse proxy config and production Dockerfile
- `Taskfile.yml` — primary developer-facing commands (start, tests, build, deploy)
- `requirements/` — `base.txt`, `dev.txt`, `prod.txt`

How to work safely (avoid common failures)
----------------------------------------
- Prefer the `task` commands from `Taskfile.yml` rather than running host commands directly. They wrap `docker compose` and the right env files. Examples:
  - `task up` (start dev stack)
  - `task b:test` (run backend tests inside container)
  - `task f:install` / `task f:dev` / `task f:test` (frontend)
- Use `task b:shell` or `task f:shell` to get an interactive shell inside containers before running Django/manage or `npm` commands.
- After initial setup, run `task b:manage import_exercise_definitions` to populate the exercise catalog (873 definitions from `api/catalog/data/exercises.json`). The command is idempotent.
- Do not run `python manage.py` on the host; run it inside the web container (use `task b:manage` or `task b:shell`). This avoids missing system-level deps and DB access issues.
- Environment files: `.env.dev` for development, `.env.prod` for production. `Taskfile.yml` references these via `dotenv` sections.

Coding guidelines
-----------------

General
1. Keep changes small, readable and well-scoped. Favor explicitness over cleverness.
2. When editing code, run linters and unit tests inside containers using `task b:lint` and `task b:test` / `task f:test`.

Python
- Follow existing style — use `isort`, `black`, `flake8` (there is a `task b:lint` task).
- Write clear function-level docstrings for service functions.
- Backend business logic lives in `services.py` files — unit-tests should target these.
- **LLM error handling:** When integrating with LLM services, catch and log API errors gracefully (rate limits, timeouts, authentication failures, invalid responses). Return sensible defaults (e.g., empty suggestions, fallback responses) rather than failing the entire request. Mock LLM responses in unit tests to avoid external API calls and flaky tests. See `api/workout/warmup_suggestions_service.py` for the canonical pattern.

JavaScript/Vue
- Prefer composition API; keep Pinia stores small and testable.
- Follow existing frontend patterns.
- Frontend business logic lives in Pinia stores and utilities — test with Vitest.

CSS
- Tailwind has been removed. Use plain scoped CSS (`<style scoped>`) in components.
- Use PrimeVue CSS custom properties (`var(--p-*)`) for theme-aware colors and spacing.
- Global body styles live in a non-scoped `<style>` block in `App.vue`.
- Do not add Tailwind or `@apply`.

Domain-specific patterns
- **Exercise–catalog link:** `Exercise` has a FK to `catalog.ExerciseDefinition` (`on_delete=PROTECT`). `Exercise.name` does not exist. The canonical name everywhere (editor, session, logs, insights, warmup hash) is `exercise_definition.name`. Write payloads send `exercise_definition_slug`; read responses include the nested `exercise_definition` object and a flat `exercise_name` convenience field.
- **LLM service:** `warmup_suggestions_service.py` is kept in its own module so `openai.OpenAI` can be mocked without touching `services.py`. Follow this pattern for any future AI/external-API integrations. Handle LLM-specific errors gracefully: log rate limits, timeouts, and invalid responses; return sensible defaults (e.g., empty suggestions) rather than failing the entire request. Mock LLM responses in tests to avoid API calls and dependency on external services.

Useful files & commands
-----------------------
- Developer task runner: `Taskfile.yml` — use `task --list` to see everything. This is the single source of commands for dev, build, test, and deploy.
- Backend entry: `api/manage.py` and `api/Dockerfile` / `api/Dockerfile.prod`.
- Frontend: `frontend/package.json`, `frontend/Dockerfile(.prod)`, and `frontend/e2e/` for Playwright.
- Exercise catalog search: `frontend/src/services/workout.js` exports `searchExerciseDefinitions(query)` calling `GET /api/exercise-definitions/?q=`.
- To build production images and push: use the `build:*` tasks in `Taskfile.yml` which set the right platforms and tags.
- LLM configuration: set `LLM_API_KEY`, `LLM_API_BASE`, `LLM_MODEL` in `.env.dev` / `.env.prod`. For GitHub Models use a GitHub PAT with `Models:Read` scope. For local Ollama set `LLM_API_BASE=http://host.docker.internal:11434/v1` and `LLM_API_KEY=ollama`.

Search + code hygiene notes
--------------------------
- Repo contains a virtualenv under `api/.venv` — ignore it for edits and searches. Focus on source under `api/` and `frontend/`.
- Search for `TODO`, `FIXME`, `HACK` as code pointers, but many matches appear in vendored/venv packages — scope searches to `api/`, `frontend/`, and root config files when triaging.

On PRs and changes
-------------------
- Run `task b:lint` and `task b:test` (backend) and `task f:test` (frontend) before opening a PR.
- Keep PRs small and include which `task` commands you ran to validate your change.

Notes for automation agents
--------------------------
- When invoking commands, prefer `task` wrappers to avoid OS differences (this repo is often developed on Windows and deployed to Linux). If `task` is unavailable, call `docker compose` with the env file specified in `Taskfile.yml`.
- Avoid editing build scripts unless necessary. If you must, update `Taskfile.yml` and provide test commands to verify changes.
- If you need to run tests or builds locally, run them inside the containers (use `task b:shell` / `task f:shell`).

Where to look next
------------------
- `Taskfile.yml` — canonical commands (dev, test, build, deploy)
- `api/` — backend code, `tests/`, `manage.py` and `Dockerfile(s)`
- `frontend/` — frontend app, `package.json`, e2e tests
- `.github/` — CI and workflows (if present)

If something fails
------------------
- Check you used the right env file (`.env.dev` vs `.env.prod`).
- Check container logs with `task logs -- <service>` or `task ps` then `docker compose logs`.
- If tests fail only locally, re-run inside a clean container (`task down` then `task up`), or run `task b:test` which uses the service container.

Contact points
--------------
The repository owner keeps short, pragmatic comments in `.github/copilot-instructions.md` and `Taskfile.yml`. Use those as the first reference when you need quick context.

— End of onboarding notes —

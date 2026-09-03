# Onboarding notes for coding agents

Summary
-------
This repository implements Benergy — a home training web app. Backend is a FastAPI REST API (located in `fastapi/`). Frontend is a Vue.js app built with Vite (located in `frontend/`). The app supports user auth, a user profile (personal/fitness data), per-user workout editing, workout session logging/history, a "live workout" feature, dedicated workout management and logs/insights hub pages, AI-generated warm-up suggestions (LLM via GitHub Models / Ollama), and a workout Insights section (volume-over-time charts). The legacy Django implementation remains in `api/` temporarily during the deployment transition. The stack is containerised and commonly run via Docker Compose.

Intended audience for this app, and context for these notes
----------
- This is a a home training web app for recreational strength and conditioning. This app is also a pet project, for learning how to use modern AI tools efficiently, and so the app can be developed as if it was meant to be commercialized at some point in the future.

Tech stack
----------
- Backend: Python 3.13+, FastAPI, SQLModel, PostgreSQL, pytest for tests
- Frontend: Vue 3 (Vite), Pinia, Vue Router, PrimeVue (Aura theme), Vitest for unit tests
- LLM integration: `openai>=1.0,<2` SDK; OpenAI-compatible API (default: GitHub Models `gpt-4o-mini`; switchable to local Ollama)
- Orchestration: Docker Compose (development) and `Dockerfile.prod` for production images
- CI/CD: build tasks in `Taskfile.yml` (used locally via `task`) — images pushed to a registry for self-hosted deploys

Project layout (short)
----------------------
- `fastapi/` — FastAPI backend, Dockerfile, requirements, SQLModel models, routers, services, schemas, and tests
  - `fastapi/src/auth/` — bearer-token authentication and session endpoints
  - `fastapi/src/users/` — user and profile endpoints, models, schemas, and services
  - `fastapi/src/workouts/` — workout, logging, insights, and warm-up suggestion endpoints and services
  - `fastapi/src/catalog/` — exercise-definition search endpoint and service
  - `fastapi/src/main.py` — FastAPI application and router registration
- `api/` — temporary legacy Django implementation retained during the migration period
- `frontend/` — Vue app, `package.json`, Playwright e2e config under `e2e/`
- `nginx/` — reverse proxy config and production Dockerfile
- `Taskfile.yml` — primary developer-facing commands (start, tests, build, deploy)
- `requirements/` — `base.txt`, `dev.txt`, `prod.txt`

How to work safely (avoid common failures)
----------------------------------------
- Prefer the `task` commands from `Taskfile.yml` rather than running host commands directly. They wrap `docker compose` and the right env files. Examples:
  - `task up` (start dev stack)
  - `task b:test` (run FastAPI tests inside the container)
  - `task f:install` / `task f:dev` / `task f:test` (frontend)
- Use `task f:shell` for frontend work. For FastAPI work, use `docker compose -f docker-compose.yml exec fastapi bash` or the FastAPI container shell.
- The FastAPI service runs with `uvicorn src.main:app` on port 8888 and exposes interactive API documentation at `/docs`.
- The legacy Django service remains in the development Compose file on port 8000 for rollback comparison; do not add new backend behavior there.
- After changing `fastapi/requirements.txt`, rebuild the FastAPI image before running backend tasks: `docker compose -f docker-compose.yml build fastapi`.
- Environment files: `.env.dev` for development, `.env.prod` for production. `Taskfile.yml` references these via `dotenv` sections.

Coding guidelines
-----------------

General
1. Keep changes small, readable and well-scoped. Favor explicitness over cleverness.
2. When editing code, run FastAPI tests and linting with `task b:test`, `task b:coverage`, and `task b:lint`; run frontend tests with `task f:test`.
3. `task b:coverage` enforces 100% coverage across `fastapi/src/**/services.py` modules. Add or update focused service tests when implementation branches change.

Python
- Follow existing style — use clear typed Python, FastAPI routers, Pydantic/SQLModel schemas, and service functions. FastAPI dependencies provide database sessions and the current authenticated user.
- Write clear function-level docstrings for service functions.
- Backend business logic lives in `services.py` files under `fastapi/src/` — unit-tests should target these.
- **LLM error handling:** When integrating with LLM services, catch and log API errors gracefully (rate limits, timeouts, authentication failures, invalid responses). Return sensible defaults (e.g., empty suggestions, fallback responses) rather than failing the entire request. Mock LLM responses in unit tests to avoid external API calls and flaky tests. See `fastapi/src/workouts/warmup_suggestions_service.py`.

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
- **Exercise–catalog link:** FastAPI SQLModel models preserve the existing `workout_exercise` and `catalog_exercisedefinition` tables. The canonical exercise name is `exercise_definition.name`; write payloads send `exercise_definition_slug`, and read responses include the nested `exercise_definition` object and a flat `exercise_name` convenience field.
- **LLM service:** `fastapi/src/workouts/warmup_suggestions_service.py` is kept in its own module so the OpenAI-compatible client can be mocked independently. Handle LLM-specific errors gracefully and mock responses in tests.

Useful files & commands
-----------------------
- Developer task runner: `Taskfile.yml` — use `task --list` to see everything. This is the single source of commands for dev, build, test, and deploy.
- Backend entry: `fastapi/src/main.py`, `fastapi/requirements.txt`, and `fastapi/Dockerfile`.
- Frontend: `frontend/package.json`, `frontend/Dockerfile(.prod)`, and `frontend/e2e/` for Playwright.
- Frontend routing: `frontend/src/router/index.js` for `/workouts/start`, `/workouts/manage`, and `/workouts/logs-and-insights`.
- FastAPI API base URL: `frontend/src/services/api.js` uses `http://localhost:8888` in development.
- Exercise catalog search: `frontend/src/services/workout.js` exports `searchExerciseDefinitions(query)` calling `GET /exercise-definitions/?q=`.
- To build production images and push: use the `build:*` tasks in `Taskfile.yml` which set the right platforms and tags.
- LLM configuration: set `LLM_API_KEY`, `LLM_API_BASE`, `LLM_MODEL` in `.env.dev` / `.env.prod`. For GitHub Models use a GitHub PAT with `Models:Read` scope. For local Ollama set `LLM_API_BASE=http://host.docker.internal:11434/v1` and `LLM_API_KEY=ollama`.

Search + code hygiene notes
--------------------------
- Repo contains a virtualenv under `api/.venv` — ignore it for edits and searches. Focus on source under `api/` and `frontend/`.
- Search for `TODO`, `FIXME`, `HACK` as code pointers, but many matches appear in vendored/venv packages — scope searches to `api/`, `frontend/`, and root config files when triaging.

On PRs and changes
-------------------
- Run `task b:test` and `task b:lint` (backend) plus `task f:test` (frontend) before opening a PR.
- Keep PRs small and include which `task` commands you ran to validate your change.

Notes for automation agents
--------------------------
- When invoking commands, prefer `task` wrappers to avoid OS differences (this repo is often developed on Windows and deployed to Linux). If `task` is unavailable, call `docker compose` with the env file specified in `Taskfile.yml`.
- Avoid editing build scripts unless necessary. If you must, update `Taskfile.yml` and provide test commands to verify changes.
- If you need to run tests or builds locally, run them inside the containers (use `task b:shell` / `task f:shell`).

Where to look next
------------------
- `Taskfile.yml` — canonical commands (dev, test, build, deploy)
- `fastapi/` — FastAPI code, tests, requirements, and Dockerfile
- `api/` — temporary legacy Django code retained during the migration period
- `frontend/` — frontend app, `package.json`, e2e tests
- `.github/` — CI and workflows (if present)

If something fails
------------------
- Check you used the right env file (`.env.dev` vs `.env.prod`).
- Check container logs with `task logs -- <service>` or `task ps` then `docker compose logs`.
- If tests fail only locally, re-run inside a clean container (`task down` then `task up`), or rerun `task b:test`.

Contact points
--------------
The repository owner keeps short, pragmatic comments in `.github/copilot-instructions.md` and `Taskfile.yml`. Use those as the first reference when you need quick context.

— End of onboarding notes —

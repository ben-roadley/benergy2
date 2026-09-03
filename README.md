# ⚡ benergy

**Presentation**

This is a training app for home workouts — track sessions, log workouts, and run live workouts. 🏋️‍♀️📈

Main features:
- User authentication and per-user workout management
- User profile (personal info, fitness level, goals, equipment, lifestyle) — foundation for future AI workout advice
- Workout editor with catalog-backed exercise autocomplete (873 exercise definitions, rich search with category/equipment/muscles)
- Live workout mode (timers for warm-up and resting, count sets/reps)
- AI-generated warm-up suggestions during the warm-up phase (HuggingFace inference api for now, self-hosted via llama.cpp in the future)
- Workout session logging, history viewer (per-workout table of past sessions with reps and weights), and stagnation detection
- Workout Insights: volume-over-time charts (sets × reps × weight) per exercise and as a global total, with bodyweight fallback from user profile

Tech stack:

- REST API backend (FastAPI with SQLModel) and Vite frontend (Vue)
- LLM integration via OpenAI-compatible SDK
- Container-first dev workflow with `Taskfile.yml` wrappers

=> This is a small, container-first monorepo: a FastAPI backend (`fastapi/`) and a Vite frontend (`frontend/`). Built for local development with `Taskfile.yml` wrappers and Docker Compose. 🧰🚀

**Backend refactor**

The backend has been rewritten from Django REST Framework to FastAPI. FastAPI provides automatic OpenAPI documentation, Pydantic request and response validation, and a smaller modular service structure while preserving the existing PostgreSQL data model and frontend API surface. The legacy Django implementation remains in `api/` temporarily as a rollback reference; production Compose wiring will be switched to FastAPI before deployment.

**Why this repo**
- Personal home training app (API + frontend) used for development and Raspberry Pi deploys.

**Quick start (recommended)**
- Use the `task` commands from `Taskfile.yml` (preferred — they set correct envs and containers):

```bash
task --list            # see available developer commands
task up                # start dev stack (docker compose)
task b:shell           # open a shell in the backend container
task f:shell           # open a shell in the frontend container
```

To get the development stack running:

```bash
task up
```

The FastAPI service is available at `http://localhost:8888`. Interactive OpenAPI documentation is available at `http://localhost:8888/docs`.

The legacy Django service is still started on port 8000 during the transition, but it is no longer the target backend.

Notes:
- Use `.env.dev` for development and `.env.prod` for production.
- The FastAPI container is named `fastapi` and runs `uvicorn src.main:app`.

**Frontend (local dev)**
- If you prefer running frontend tools locally, use the `task` wrappers:

```bash
task f:install
task f:dev
```

**Backend (tests & maintenance)**
- Run FastAPI tests and linting through the Taskfile:

```bash
task b:test
task b:coverage
task b:lint
```

These commands run inside the `fastapi` container. Django-only management commands are no longer exposed through the Taskfile.

**Docker / Production**
- Use `docker-compose.yml` for development and `docker-compose.prod.yml` for production. Prefer the `task` build/deploy tasks when available (`Taskfile.yml`).

```bash
task build            # run build tasks (see Taskfile.yml)
task prod:deploy      # deploy latest images in production
```

**Project layout (high level)**
- `fastapi/` — FastAPI backend, SQLModel models, routers, services, schemas, tests, and Dockerfile
- `api/` — temporary legacy Django backend retained during the migration period
- `frontend/` — Vite + Vue app, `package.json`, e2e tests
- `nginx/` — reverse-proxy
- `Taskfile.yml` — canonical developer commands (use `task`)

**Contributing**
- Open an issue or PR. Run the FastAPI container tests and `task f:test` before opening PRs. Keep changes small and add tests for new behavior.

**License & contact**
- This project is licensed under the MIT License. See the `LICENSE` file for details.

Thanks for checking out benergy — happy hacking! ✨

## CI / GitHub Actions

This repo includes two GitHub Actions workflows:

- `ci-dev.yml` (runs on push to `dev`): runs backend unit tests (pytest) with coverage and frontend tests (npm). The backend job enforces 100% coverage.
- `release.yml` (runs when a new tag is pushed to `main`): builds and pushes Docker images (amd64 + arm64) to GitHub Container Registry (GHCR) using the `task` targets in `Taskfile.yml` (`task build:all-amd64` and `task build:all-arm64`).

Secrets and tokens
- Actions already provide a `GITHUB_TOKEN` with repository-scoped permissions; the release workflow uses it to authenticate to GHCR. No additional secret is required for Actions to push packages if you keep the workflows as-is.
- If you want to run the `task` build/push commands locally (or from another runner) you can create a Personal Access Token (PAT) with `write:packages` and `repo` scopes and use it to login to GHCR. Create the PAT at https://github.com/settings/tokens and save it as a repo secret (e.g. `GHCR_PAT`) or use it locally with `docker login`.

Local examples
- Login to GHCR (local):

```bash
docker login ghcr.io -u <your-github-username> -p <PERSONAL_ACCESS_TOKEN>
```

- Or set environment variables and run `task` (PowerShell example):

```powershell
$env:GITHUB_ACTOR = "ben-roadley"
$env:GITHUB_TOKEN = "<PERSONAL_ACCESS_TOKEN>"  # or use GITHUB_TOKEN in Actions
task build:all-amd64
```

Images and tags
- Built images are pushed to GHCR under `ghcr.io/<owner>/<repo>:<tag>`. The `Taskfile.yml` current targets tag images with names like `web_amd64`, `frontend_amd64`, `nginx_amd64`, and `web_arm64`, etc. Example image names:

```
ghcr.io/ben-roadley/benergy:web_amd64
ghcr.io/ben-roadley/benergy:frontend_arm64
```

Raspberry Pi deployment tips
- On your Raspberry Pi pull the appropriate `arm64` images (or `arm/v7` if you build that variant). Example:

```bash
docker pull ghcr.io/ben-roadley/benergy:web_arm64
docker pull ghcr.io/ben-roadley/benergy:frontend_arm64
docker compose -f docker-compose.prod.yml up -d
```

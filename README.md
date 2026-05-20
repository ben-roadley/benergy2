# ⚡ benergy

**Presentation**

This is a training app for home workouts — track sessions, log workouts, and run live workouts. 🏋️‍♀️📈

Main features:
- User authentication and per-user workout management
- User profile (personal info, fitness level, goals, equipment, lifestyle) — foundation for future AI workout advice
- Workout editor with catalog-backed exercise autocomplete (873 exercise definitions, rich search with category/equipment/muscles)
- Live workout mode (timers for warm-up and resting, count sets/reps)
- AI-generated warm-up suggestions during the warm-up phase (GitHub Models / Ollama, hash-cached per workout)
- Workout session logging, history viewer (per-workout table of past sessions with reps and weights), and stagnation detection
- Workout Insights: volume-over-time charts (sets × reps × weight) per exercise and as a global total, with bodyweight fallback from user profile

Tech stack:
- REST API backend (Django) and Vite frontend (Vue)
- LLM integration via OpenAI-compatible SDK (GitHub Models or local Ollama)
- Container-first dev workflow with `Taskfile.yml` wrappers

=> This is a small, container-first monorepo: a Django REST API (`api/`) and a Vite frontend (`frontend/`). Built for local development with `Taskfile.yml` wrappers and Docker Compose. 🧰🚀

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

Notes:
- Do NOT run `python manage.py` on the host. Use `task b:manage` or `task b:shell` to run management commands inside the backend container.
- Use `.env.dev` for development and `.env.prod` for production.

**Frontend (local dev)**
- If you prefer running frontend tools locally, use the `task` wrappers:

```bash
task f:install
task f:dev
```

**Backend (tests & maintenance)**
- Run backend tests and linters inside containers with `task b:test` and `task b:lint`.

```bash
task b:test
task b:lint
```

**Docker / Production**
- Use `docker-compose.yml` for development and `docker-compose.prod.yml` for production. Prefer the `task` build/deploy tasks when available (`Taskfile.yml`).

```bash
task build            # run build tasks (see Taskfile.yml)
task deploy           # deploy/push images (project-specific)
```

**Project layout (high level)**
- `api/` — Django backend, `manage.py`, tests, Dockerfiles
- `frontend/` — Vite + Vue app, `package.json`, e2e tests
- `nginx/` — reverse-proxy
- `Taskfile.yml` — canonical developer commands (use `task`)

**Contributing**
- Open an issue or PR. Run `task b:lint`, `task b:test`, and `task f:test` before opening PRs. Keep changes small and add tests for new behavior.

**License & contact**
- This project is licensed under the MIT License. See the `LICENSE` file for details.

Thanks for checking out benergy — happy hacking! ✨

## CI / GitHub Actions

This repo includes two GitHub Actions workflows:

- `ci-dev.yml` (runs on push to `dev`): runs backend unit tests (pytest) with coverage and frontend tests (npm). The backend job enforces 100% coverage.
- `release.yml` (runs on push to `main`): creates a timestamped tag, then builds and pushes Docker images (amd64 + arm64) to GitHub Container Registry (GHCR) using the `task` targets in `Taskfile.yml` (`task build:all-amd64` and `task build:all-arm64`).

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

- Consider a small deploy script on the Pi to stop the stack, pull new images, and restart. Optionally run a tool like `watchtower` to auto-update containers.

Notes & recommendations
- For a personal project this workflow is simple and effective: dev branch runs tests, merging to `main` creates a release tag and publishes images to GHCR.
- If you prefer the `Taskfile.yml` to be the single source of truth for tests as well, we can add `b:test-local` / `f:test-local` task targets and call `task` from the `ci-dev.yml` workflow instead.

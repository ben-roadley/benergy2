# Project instructions

Benergy is a small, multi-app home training project:

- `fastapi/` - Python FastAPI backend
- `frontend/` - Vue 3 frontend
- `exercise-catalog-api/` - Java Spring Boot API
- `exercise-catalog-ui/` - Angular frontend
- `nginx/` - reverse proxy; Docker Compose runs the services

## Working in this repository

- Keep changes focused and follow the patterns of the app being changed.
- Read nearby code and relevant project documentation before making changes.
- Avoid unrelated refactors and new dependencies unless they are needed.
- Prefer the `task` commands in `Taskfile.yml`; they run commands in the expected containers and environment.
- Run the smallest relevant checks and report what ran.
- Never commit secrets or local environment files.

## Useful checks

- FastAPI: `task b:test`, `task b:lint`; use `task b:coverage` when changing service logic.
- Vue frontend: `task f:test`; `task f:e2e` for end-to-end changes (requires the stack to be running).
- Exercise catalog API: `task c:test`.
- Exercise catalog UI: `task e:test`.

Run `task --list` for the available development, build, and deployment commands.

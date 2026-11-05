# Exercise catalog API

Spring Boot 4.0 / Java 21 REST API that will manage the exercise catalog stored in the shared Postgres database (`catalog_exercisedefinition`, owned by the Django app).

## Run

```
task up                # starts the whole stack, including this service on http://localhost:8090
task c:test            # Maven tests inside the container
task c:shell           # shell inside the container
```

- `GET /hello` — hello world
- `GET /actuator/health` — health check

## Notes

- Maven is provided by the Maven Wrapper (`mvnw`); nothing to install except Docker.
- The database schema is owned by Django migrations: Hibernate runs with `ddl-auto=none`.
- DB settings come from the `SQL_*` variables in `.env.dev`.
- `Dockerfile` is for development (`spring-boot:run`, source bind-mounted); `Dockerfile.prod` builds a slim JRE image.

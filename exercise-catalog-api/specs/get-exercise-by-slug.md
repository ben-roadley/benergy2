# Spec: Get exercise by slug

Status: implemented

## Goal

Return one exercise definition from the catalog, identified by its slug. This is the first real endpoint of the Spring Boot service. It also establishes the conventions (entity mapping, JSON naming, error format, tests) that later endpoints will reuse.

## Context

- Data: table `catalog_exercisedefinition` (873 rows), owned by Django migrations. This service only reads it.
- The slug is the primary key (`varchar(100)`). Real values look like `3_4_Sit-Up` or `90_90_Hamstring`: letters, digits, `_` and `-`, case-sensitive.
- `workout_exercise.exercise_definition_id` references the slug, so the slug is the public identifier of an exercise.
- The existing FastAPI catalog uses the prefix `/exercise-definitions`. We keep the same name.

## Endpoint

`GET /exercise-definitions/{slug}`

### Success: 200 OK

```json
{
  "slug": "3_4_Sit-Up",
  "name": "3/4 Sit-Up",
  "category": "strength",
  "force": "pull",
  "level": "beginner",
  "mechanic": "compound",
  "equipment": "body only",
  "primary_muscles": ["abdominals"],
  "secondary_muscles": [],
  "instructions": ["Lie down on the floor and secure your feet. ..."],
  "images": ["3_4_Sit-Up/0.jpg", "3_4_Sit-Up/1.jpg"]
}
```

- All 11 columns are returned, with the same names as the database columns.
- `force`, `mechanic` and `equipment` are nullable and are returned as `null` when empty (never omitted).
- `primary_muscles`, `secondary_muscles`, `instructions` and `images` are always arrays, possibly empty.
- `images` holds relative paths exactly as stored. Serving images is out of scope.

### Not found: 404

When no exercise has this slug, the response is an RFC 9457 problem document (`application/problem+json`, built into Spring as `ProblemDetail`):

```json
{
  "title": "Not Found",
  "status": 404,
  "detail": "Exercise definition 'nope' not found",
  "instance": "/exercise-definitions/nope"
}
```

Spring omits `type` when it is `about:blank`.

## Rules

1. The slug match is exact and case-sensitive: `3_4_sit-up` returns 404.
2. No slug format validation. An unknown value is simply a 404, and the lookup is a parameterised query, so there is no injection risk.
3. The endpoint is read-only and idempotent. It never writes to the database.
4. No authentication: this app has none, by decision.
5. JSON property names are snake_case, to stay consistent with the FastAPI API and the frontend. This needs `spring.jackson.property-naming-strategy=SNAKE_CASE`, because Jackson defaults to camelCase.

## Design (kept deliberately small)

| Piece | Choice |
|-------|--------|
| Entity | `ExerciseDefinition` (JPA `@Entity`, `@Table(name = "catalog_exercisedefinition")`, `@Id` on `slug`). `jsonb` columns are mapped to `List<String>` with `@JdbcTypeCode(SqlTypes.JSON)`. |
| Repository | `ExerciseDefinitionRepository extends JpaRepository<ExerciseDefinition, String>`; `findById` is enough, nothing to write. |
| Controller | `ExerciseDefinitionController`, `@RestController` with `@RequestMapping("/exercise-definitions")`. It calls the repository directly. |
| Response type | The entity is serialised directly, since the response is the whole row. No DTO and no service layer until a feature needs them. |
| 404 | The controller throws `ResponseStatusException(HttpStatus.NOT_FOUND, ...)`. With `spring.mvc.problemdetails.enabled=true` Spring renders it as the problem document above. |
| Schema | Hibernate stays on `ddl-auto=none`. The entity must never be used to create or alter tables. |

Everything lives in `com.benergy.catalog`. We can split into sub-packages once there is more than one feature.

## Acceptance criteria

- [x] `GET /exercise-definitions/3_4_Sit-Up` returns 200 with the full document above, and the arrays are real JSON arrays (not strings).
- [x] An exercise with a null `force` returns `"force": null`.
- [x] `GET /exercise-definitions/does-not-exist` returns 404 with `application/problem+json`.
- [x] `GET /exercise-definitions/3_4_sit-up` returns 404 (case-sensitive).
- [x] Response property names are snake_case.
- [x] `task c:test` passes, and the endpoint works against the real Postgres in the dev stack (`curl localhost:8090/exercise-definitions/3_4_Sit-Up`).

Implementation note: Boot 4 serialises with Jackson 3, but Hibernate 7.2 only detects Jackson 2 for `jsonb` mapping, so `com.fasterxml.jackson.core:jackson-databind` is added to the `pom.xml` for Hibernate's use.

## Tests

1. **Controller slice tests** (`@WebMvcTest` with the repository mocked via `@MockitoBean`):
   - found: status 200 and every field, including snake_case names and a `null` field;
   - not found: status 404, problem+json content type and `detail`.
2. **Repository integration test** (`@DataJpaTest` against Postgres): checks that the `jsonb` to `List<String>` mapping really works on the real table. This is the part most likely to break, and it is invisible to mocked tests.

Decision: the integration test runs against the compose `db` service (the stack must be up, and Django must have loaded the catalog), not against Testcontainers. It only reads, so it never modifies data.

## Out of scope

List and search endpoints, create/update/delete, pagination, image serving, authentication, caching, OpenAPI/Swagger docs.

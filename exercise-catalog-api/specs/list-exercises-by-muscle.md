# Spec: List exercises, filtered by primary muscle

Status: implemented

## Goal

Return a lightweight list of exercises, optionally restricted to one primary muscle. The UI calls it when the user opens a muscle from the `GET /muscles` menu, and then calls `GET /exercise-definitions/{slug}` when the user opens one exercise.

## Context

- Data: `catalog_exercisedefinition` (873 rows). `primary_muscles` is a `jsonb` array of strings, with exactly one muscle per exercise today.
- Sizes measured earlier: the largest muscle (quadriceps) has 148 exercises, about 16 KB as summaries. The whole catalog as summaries is about 100 KB, against about 757 KB with full rows (the `instructions` text is the bulk of it). So the list returns summaries only.
- Muscle names come from `GET /muscles` and are passed back as is: lowercase, may contain a space (`middle back`).
- Same conventions as the other specs: read-only, snake_case JSON, no authentication.

## Endpoint

`GET /exercise-definitions?primary_muscle=<muscle>`

| Parameter | Required | Meaning |
|-----------|----------|---------|
| `primary_muscle` | no | Exact muscle name, e.g. `quadriceps` or `middle back` (URL-encoded as `middle%20back`). |

### Success: 200 OK

`GET /exercise-definitions?primary_muscle=calves`

```json
[
  {
    "slug": "Ankle_Circles",
    "name": "Ankle Circles",
    "category": "stretching",
    "equipment": null,
    "level": "beginner"
  },
  {
    "slug": "Anterior_Tibialis-SMR",
    "name": "Anterior Tibialis-SMR",
    "category": "stretching",
    "equipment": "other",
    "level": "intermediate"
  }
]
```

(Abridged: the real response has one entry per calves exercise, 28 today.)

Each entry has exactly five fields: `slug`, `name`, `category`, `equipment` (nullable, returned as `null`), `level`. Instructions, images, force, mechanic and the muscle arrays are only in the detail endpoint.

## Rules

1. With `primary_muscle`, only exercises whose `primary_muscles` contains that muscle are returned.
2. The match is exact and case-sensitive, like the slug lookup: `Quadriceps` returns `[]`. The UI always sends the names it got from `/muscles`.
3. An unknown or blank muscle is not an error: the response is `200` with `[]`. The endpoint is a filter, and "nothing matches" is a valid answer.
4. Without `primary_muscle`, all 873 exercises are returned (about 100 KB as summaries). This keeps the endpoint ready for other filters (`category`, `level`, name search) in later specs, without a new route.
5. Entries are ordered by `name`, then by `slug`, using the database's text collation. That ordering ignores case, spaces and punctuation (for example `Atlas Stones` comes before `Atlas Stone Trainer`), which reads naturally in a menu but is not Java's plain string order. The order is deterministic.
6. No pagination for now: the largest result is 873 summaries. Revisit when search or a larger dataset arrives.
7. Read-only and idempotent.
8. The `/exercise-definitions` collection path and `/exercise-definitions/{slug}` do not conflict: the first has no path variable.

## Design

| Piece | Choice |
|-------|--------|
| Result type | `ExerciseSummary`, a record `(String slug, String name, String category, String equipment, String level)`. Records were mapped from native-query columns in the muscles spec, and the same approach is used here. |
| Query | Two native queries on `ExerciseDefinitionRepository`, both returning `List<ExerciseSummary>` ordered by `name, slug`: `findAllSummaries()` and `findSummariesByPrimaryMuscle(String muscle)`. The filter is `where primary_muscles @> jsonb_build_array(cast(:muscle as text))`. |
| Safety | The muscle is a bound parameter, and `jsonb_build_array` builds the JSON, so no quoting by hand and no injection. The `?`-style jsonb operators are avoided because `?` clashes with JDBC placeholders. |
| Controller | A `list` method in `ExerciseDefinitionController`: `@GetMapping` with `@RequestParam(required = false) String primaryMuscle`, mapped to the query parameter `primary_muscle` (`@RequestParam("primary_muscle")`). It calls the first or second query depending on whether the parameter is present. |
| Service layer | None, as before. |

Why two queries rather than one with an optional parameter: a single native query with `(:muscle is null or ...)` is harder to read and gets a worse plan. Two short queries stay obvious.

## Acceptance criteria

- [x] `GET /exercise-definitions?primary_muscle=calves` returns 200 with only calves exercises, each with exactly the five summary fields.
- [x] `GET /exercise-definitions?primary_muscle=middle%20back` works for a muscle name containing a space.
- [x] `GET /exercise-definitions?primary_muscle=Quadriceps` and `?primary_muscle=nope` return `200` and `[]`.
- [x] `GET /exercise-definitions` returns all exercises (873 today), sorted by name.
- [x] For every muscle returned by `GET /muscles`, the size of its list equals its `count`.
- [x] `equipment` is `null` (not missing) for exercises that have none.
- [x] `GET /exercise-definitions/3_4_Sit-Up` and `GET /muscles` still work.
- [x] `task c:test` passes, and the endpoint works against the compose Postgres (`curl "localhost:8090/exercise-definitions?primary_muscle=calves"`).

## Tests

1. **Controller slice tests** (`@WebMvcTest`, repository mocked):
   - with `primary_muscle`: calls `findSummariesByPrimaryMuscle` with the decoded name (`middle back`), and the JSON has exactly the five snake_case fields, including a `null` equipment;
   - without the parameter: calls `findAllSummaries`;
   - no matches: `200` and `[]`.
2. **Repository integration tests** (`@DataJpaTest` against the compose Postgres, read-only):
   - for each muscle from `findMuscleCounts()`, `findSummariesByPrimaryMuscle(name)` returns `count` rows;
   - an unknown muscle and a wrong-case muscle return an empty list;
   - `findAllSummaries()` has `repository.count()` rows, sorted by name.

## Out of scope

Pagination, name search (`q`), `category`/`level`/`equipment` filters, secondary muscles, multiple muscles in one request, sorting options, including the muscle arrays in the summary.

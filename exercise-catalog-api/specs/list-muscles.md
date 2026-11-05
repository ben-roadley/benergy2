# Spec: List primary muscles

Status: implemented

## Goal

Return every primary muscle present in the catalog with its number of exercises. The UI uses it to draw the muscle menu, and then fetches the exercises of the chosen muscle (separate, later spec).

## Context

- Data: `catalog_exercisedefinition.primary_muscles` is a `jsonb` array of strings. Today every row has exactly one primary muscle (873 rows, 17 distinct muscles).
- The values are free text in the database, not a separate table, so the list must be computed from the rows.
- Muscle names are returned as stored (lowercase, e.g. `middle back`). Any grouping of muscles (e.g. several back muscles into one "back" entry) is a UI decision and is out of scope.
- Follows the conventions of [get-exercise-by-slug.md](get-exercise-by-slug.md): read-only, snake_case JSON, no authentication.

## Endpoint

`GET /muscles`

### Success: 200 OK

```json
[
  { "name": "abdominals", "count": 93 },
  { "name": "abductors", "count": 8 },
  { "name": "adductors", "count": 13 },
  { "name": "biceps", "count": 53 },
  { "name": "calves", "count": 28 }
]
```

(Abridged: the real response has one entry per muscle, 17 with today's data.)

## Rules

1. `count` is the number of exercises whose `primary_muscles` contains that muscle. If an exercise ever has several primary muscles, it is counted under each, so the counts could then add up to more than the number of exercises.
2. Entries are sorted alphabetically by `name`, for a stable menu. The UI can re-sort (for example by `count`).
3. Muscles with no exercise do not appear. If the catalog is empty or has no muscles, the response is `200` with `[]`, never a 404.
4. Exercises with an empty `primary_muscles` array are ignored.
5. Read-only and idempotent. No parameters, no pagination (17 entries).
6. The path is `/muscles`, not `/exercise-definitions/muscles`: a muscle is a resource the client browses, and a separate path cannot collide with `/exercise-definitions/{slug}`, so every slug stays reachable.

## Design

| Piece | Choice |
|-------|--------|
| Query | One native SQL query on `ExerciseDefinitionRepository`: `select m.name as name, count(*) as count from catalog_exercisedefinition e cross join lateral jsonb_array_elements_text(e.primary_muscles) as m(name) group by m.name order by m.name`. |
| Result type | `MuscleCount`, a Java `record` (`String name, long count`), returned straight to JSON. The query result is mapped to it with a Spring Data interface projection or a constructor mapping, whichever is simpler to make work. |
| Controller | A new `MuscleController` (`@RequestMapping("/muscles")`) calling the repository directly, with no service layer. The query lives on `ExerciseDefinitionRepository`, since it reads that table. |

The grouping is done in the database: loading 873 rows and counting them in Java would be wasteful.

## Acceptance criteria

- [x] `GET /muscles` returns 200 and a JSON array of `{ "name", "count" }` objects.
- [x] With the current data it contains 17 entries, including `quadriceps` with a count greater than 0, with no duplicate names.
- [x] Entries are sorted alphabetically by `name`.
- [x] The counts add up to the total number of exercises (873 today, as each has one primary muscle).
- [x] `GET /exercise-definitions/3_4_Sit-Up` still returns the exercise.
- [x] An empty result returns `200` and `[]`.
- [x] `task c:test` passes, and the endpoint works against the compose Postgres (`curl localhost:8090/muscles`).

## Tests

1. **Controller slice test** (`@WebMvcTest`, repository mocked): the response has the right JSON shape for two entries, and an empty list gives `[]`.
2. **Repository integration test** (`@DataJpaTest` against the compose Postgres, read-only): names are unique and sorted, `quadriceps` is present, and the counts add up to `repository.count()`. The tests avoid exact counts per muscle so they don't break if the catalog data is refreshed.

## Out of scope

Listing the exercises of a muscle (next spec, `GET /exercise-definitions?primary_muscle=...`), grouping muscles, secondary muscles, caching, localisation of muscle names.

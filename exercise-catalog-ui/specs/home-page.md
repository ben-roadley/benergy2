# Spec: Home page

Status: implemented

## Goal

Landing page of the catalog: lets the user pick a primary muscle to explore its exercises.

## API used

`GET /muscles` returns `[{ "name": "biceps", "count": 53 }, ...]`, sorted by name. See [list-muscles.md](../../exercise-catalog-api/specs/list-muscles.md).

The API has no CORS configuration, so the dev server proxies `/api/*` to `http://exercise-catalog-api:8090/*` (Angular `proxy.conf.json`). The UI calls `/api/muscles`.

## UI

Route `/`. From top to bottom:

1. Top bar with the app name: **Benergy Exercise Catalog** (PrimeNG `Toolbar`).
2. Heading: **Explore**.
3. Responsive grid of PrimeNG `Card`s, one per muscle, in API order. Each card shows the muscle name (capitalized) and, in a smaller muted line, the exercise count (e.g. "53 exercises").
4. Clicking a card navigates to `/muscles/:name` (the muscle's exercise list, page to be built later; until then it is an unmatched route).

States:
- Loading: `Skeleton` cards in the grid.
- Empty (`[]`): `Message` "No muscles found."
- Error: `Message` (error severity) "Could not load muscles."

## Acceptance criteria

- [ ] The top bar shows "Benergy Exercise Catalog" and the heading "Explore" is visible.
- [ ] One card per muscle returned by `/muscles`, showing name and count (count visually secondary).
- [ ] The grid reflows on narrow screens.
- [ ] Clicking a card navigates to `/muscles/<name>` (name URL-encoded, e.g. `middle%20back`).
- [ ] Loading, empty and error states are displayed.
- [ ] The dev proxy lets the browser reach the API with no CORS error.

## Out of scope

The muscle page itself, search, re-sorting or grouping of muscles.


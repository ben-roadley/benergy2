# Spec: Muscle exercise list page

Status: implemented

## Goal

Show the exercises that train one primary muscle, so the user can pick one and open its detail page.

## API used

- `GET /exercise-definitions?primary_muscle=<muscle>` returns summaries `{ slug, name, category, equipment, level }`, sorted by name, 10 to about 150 entries. See [list-exercises-by-muscle.md](../../exercise-catalog-api/specs/list-exercises-by-muscle.md). Called as `/api/exercise-definitions` through the dev proxy.
- **Images (see below):** the summary carries a nullable `image` (first image path); the API does not serve image files.

### Images

Originally the summary had no image field, and `images` (relative paths such as `3_4_Sit-Up/0.jpg`) only exists in the detail endpoint. No image file is in the repo or served by the API. The dataset is the public free-exercise-db, whose files are reachable at `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/<path>` (checked: `3_4_Sit-Up/0.jpg` returns 200).

Decision (validated):
1. **API:** nullable `image` field added to `ExerciseSummary` (first entry of `images`), with its spec and tests updated.
2. **UI:** build the image URL as `imageBaseUrl + image`, with `IMAGE_BASE_URL` in a single constant (`src/app/image-base-url.ts`) (the URL above for now), so it can later point at our own hosting without touching components.

Rejected: one detail call per row (up to 150 requests), and downloading 1,700+ images into the repo for now.

## UI

Route `/muscles/:name`. From top to bottom:

1. Top bar (already in the app shell).
2. `Breadcrumb`: Explore > *Muscle* (Explore links back to `/`).
3. Heading with the capitalized muscle name, and a `Tag` with the number of exercises.
4. Filter bar: `IconField` + `InputText` search box ("Search exercises") and, next to it, three `Select`s: **Category**, **Level**, **Equipment**. Each has a clear button and shows its label as placeholder when empty. Options are the distinct non-null values found in the loaded list, sorted alphabetically (so only values that give results are offered). Filters combine with AND, together with the search text. All filtering is client-side, no new API call. The bar wraps on narrow screens.
5. `DataView` in list layout, 20 rows per page with its built-in paginator (hidden when there is one page). One row per exercise, the whole row is a link to `/exercises/:slug`:

```
+--------+-------------------------------------------+
| image  |  Barbell Squat                            |
| 96x96  |  [strength] [beginner] [barbell]    >     |
+--------+-------------------------------------------+
```

   - Image: PrimeNG `Image`, lazy loaded, fixed 96x96, `object-fit: cover`, with a neutral placeholder when `image` is `null` or fails to load.
   - Name in bold; below it, small `Tag`s for category, level and equipment (equipment hidden when `null`).
   - On narrow screens the row keeps the same layout with a 64px image.

Why a list and not a grid of cards: names can be long, there are three attributes to read per exercise, and scanning 100 rows top to bottom is faster than across a grid. The home page already uses cards for the muscles.

States:
- Loading: 6 `Skeleton` rows.
- Empty (`[]`, for example an unknown muscle in the URL): `Message` "No exercises found for this muscle."
- No match (search or filters): `Message` "No exercise matches your search."
- Error: `Message` (error severity) "Could not load exercises."

## Acceptance criteria

- [ ] Opening a card from the home page lands on `/muscles/<name>` and lists only that muscle's exercises, with the right count in the heading.
- [ ] Each row shows image, name, and category / level / equipment tags.
- [ ] Missing or broken images show a placeholder, not a broken icon.
- [ ] The search box and the Category / Level / Equipment selects filter rows (combined with AND); the paginator goes back to page 1 and follows the filtered result.
- [ ] Select options come from the loaded exercises; clearing a select removes its filter.
- [ ] Clicking a row navigates to `/exercises/<slug>` (detail page built later).
- [ ] Breadcrumb "Explore" goes back to the home page.
- [ ] Loading, empty, no-match and error states are displayed.

## Out of scope

The exercise detail page, filtering on exercises without equipment (`null`), multi-select filters, sorting options, serving images from our own backend, infinite scroll.

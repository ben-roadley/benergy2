# Spec: Exercise page

Status: implemented

## Goal

Show every field of one exercise, so the user can learn how to do it and what it trains.

## API used

`GET /exercise-definitions/{slug}` returns `slug, name, category, force, level, mechanic, equipment, primary_muscles, secondary_muscles, instructions, images`. `force`, `mechanic` and `equipment` can be `null`; the four others are arrays, possibly empty. Unknown slug: `404` problem document. See [get-exercise-by-slug.md](../../exercise-catalog-api/specs/get-exercise-by-slug.md). Called as `/api/exercise-definitions/:slug` through the dev proxy. Image URLs are built with `IMAGE_BASE_URL`, as on the [muscle exercises page](muscle-exercises-page.md).

## UI

Route `/exercises/:slug` (target of the row links of the muscle page). From top to bottom:

1. `Breadcrumb`: Explore > *first primary muscle* (links to `/muscles/<muscle>`) > *exercise name*.
2. Heading: the exercise name.
3. Two blocks, side by side on wide screens, stacked on narrow ones:
   - **Left: images.** All `images` as `Image` thumbnails with click-to-zoom preview (`preview`). Missing or broken image: neutral placeholder. No images: one placeholder.
   - **Right: details** in a `Card`: category, level, force, mechanic and equipment as label / `Tag` pairs (a `null` value shows a muted "Not specified"), then **Primary muscles** and **Secondary muscles** as `Tag`s. Each muscle tag links to `/muscles/<muscle>`. No secondary muscle: muted "None".
4. **Instructions** in a `Card` below: a numbered list, one step per item (empty: muted "No instructions.").

States:
- Loading: `Skeleton` blocks.
- Unknown slug (404): `Message` (warn) "Exercise not found." with a link back to Explore.
- Other error: `Message` (error) "Could not load exercise."

## Acceptance criteria

- [ ] Every field of the response is visible: name, slug (in the URL), category, level, force, mechanic, equipment, primary and secondary muscles, instructions, images.
- [ ] `null` fields and empty arrays show a muted placeholder text, not blank space.
- [ ] Clicking an image opens a larger preview.
- [ ] The breadcrumb and muscle tags navigate to the muscle page.
- [ ] Clicking a row on the muscle page opens this page.
- [ ] Loading, not-found and error states are displayed.

## Out of scope

Editing, favorites, related exercises, serving images from our backend.

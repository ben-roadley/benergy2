import { test, expect } from '@playwright/test'

const TEST_USER = 'testuser'
const TEST_PASS = 'testpass123'

async function login(page) {
  await page.goto('/login')
  await page.locator('#username').fill(TEST_USER)
  await page.locator('#password input').fill(TEST_PASS)
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).toHaveURL('/')
}

async function selectExercise(page, exerciseName) {
  await page.locator('input[placeholder="Search exercises..."]').first().fill(exerciseName)
  const option = page.getByRole('option', { name: exerciseName, exact: true })
  await option.waitFor({ state: 'visible', timeout: 5000 })
  await option.click()
}

test.describe('Workout Editor', () => {
  test.beforeEach(async ({ page }) => {
    await login(page)
  })

  // ---- Create ----

  test('creates a new workout and shows it on the management page', async ({ page }) => {
    const name = `E2E Create ${Date.now()}`

    // Navigate directly — the "Create new workout" button only appears when workouts already exist
    await page.goto('/workouts/new')
    await expect(page.getByRole('heading', { name: 'New Workout' })).toBeVisible()

    await page.locator('#workout-name').fill(name)
    // The form already has one default exercise — search and select from catalog
    await selectExercise(page, 'Pushups')

    await page.getByRole('button', { name: 'Create Workout' }).click()

    await expect(page).toHaveURL('/workouts/manage')
  })

  // ---- Validation ----

  test('shows an error when the workout name is empty', async ({ page }) => {
    await page.goto('/workouts/new')

    await page.getByRole('button', { name: 'Create Workout' }).click()

    await expect(page.getByText('Workout name is required.')).toBeVisible()
    await expect(page).toHaveURL('/workouts/new')
  })

  test('shows an error when an exercise has no name', async ({ page }) => {
    await page.goto('/workouts/new')

    await page.locator('#workout-name').fill('E2E No Name Exercise')
    // Leave the default exercise unselected and submit
    await page.getByRole('button', { name: 'Create Workout' }).click()

    await expect(page.getByText('Please select an exercise from the catalog.')).toBeVisible()
    await expect(page).toHaveURL('/workouts/new')
  })

  // ---- Edit ----

  test('loads existing workout data in edit mode', async ({ page }) => {
    const name = `E2E Edit ${Date.now()}`

    // Create a workout to edit
    await page.goto('/workouts/new')
    await page.locator('#workout-name').fill(name)
    // Search and select an exercise from catalog
    await selectExercise(page, 'Bodyweight Squat')
    await page.getByRole('button', { name: 'Create Workout' }).click()
    await expect(page).toHaveURL('/workouts/manage')

    // Go to management page and open the workout for editing
    await page.goto('/workouts/manage')
    const row = page.locator('.workout-item-row').filter({ hasText: name })
    await row.getByRole('button', { name }).click()

    await expect(page).toHaveURL(/\/workouts\/\d+\/edit/)
    await expect(page.getByRole('heading', { name: 'Edit Workout' })).toBeVisible()
    await expect(page.locator('#workout-name')).toHaveValue(name)
    await expect(page.locator('input[placeholder="Search exercises..."]').first()).toHaveValue('Bodyweight Squat')
  })

  test('saves changes made in edit mode and returns to home', async ({ page }) => {
    const originalName = `E2E ToEdit ${Date.now()}`
    const updatedName = `E2E Edited ${Date.now()}`

    // Create the workout
    await page.goto('/workouts/new')
    await page.locator('#workout-name').fill(originalName)
    // Search and select an exercise from catalog
    await selectExercise(page, 'Barbell Lunge')
    await page.getByRole('button', { name: 'Create Workout' }).click()
    await expect(page).toHaveURL('/workouts/manage')
    await page.goto('/workouts/manage')

    // Open for editing
    const row = page.locator('.workout-item-row').filter({ hasText: originalName })
    await row.getByRole('button', { name: originalName }).click()
    await expect(page).toHaveURL(/\/workouts\/\d+\/edit/)

    // Change the name
    await page.locator('#workout-name').clear()
    await page.locator('#workout-name').fill(updatedName)
    await page.getByRole('button', { name: 'Save Changes' }).click()

    await expect(page).toHaveURL('/workouts/manage')
    await page.goto('/workouts/manage')
    await expect(page.getByRole('button', { name: updatedName })).toBeVisible()
  })
})

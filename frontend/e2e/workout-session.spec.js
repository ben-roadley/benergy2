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

async function createWorkout(page, name) {
  await page.goto('/workouts/new')
  await page.locator('#workout-name').fill(name)
  // Search and select an exercise from catalog
  await selectExercise(page, 'Pushups')
  // The default exercise has 3 sets; remove 2 so the session has a single set
  await page.locator('button.set-col-actions').last().click()
  await page.locator('button.set-col-actions').last().click()
  await page.getByRole('button', { name: 'Create Workout' }).click()
  await expect(page).toHaveURL('/')
}

async function startWorkout(page, workoutName) {
  await page.goto('/workouts/start')
  await page.getByRole('button', { name: workoutName }).click()
  await expect(page).toHaveURL(/\/workout\/\d+/)
}

// Helper: drives through all phases of a 1-set workout to completion.
async function runFullSession(page, workoutName) {
  await startWorkout(page, workoutName)

  // Warmup → Exercise
  await page.getByRole('button', { name: 'Go', exact: true }).click()

  // Exercise → Log reps
  await expect(page.locator('h2.exercise-name')).toContainText('Pushups')
  await page.getByRole('button', { name: 'Done' }).click()

  // Log reps → Complete (single set — no rest phase)
  await expect(page.getByText('How many reps did you do?')).toBeVisible()
  await page.getByRole('button', { name: 'Next' }).click()

  await expect(page.getByText('Workout Complete')).toBeVisible()
}

// Serial so each test can rely on DB state from the previous one.
test.describe.serial('Workout Session', () => {
  let workoutName

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage()
    workoutName = `Session E2E ${Date.now()}`
    await login(page)
    await createWorkout(page, workoutName)
    await page.close()
  })

  test.beforeEach(async ({ page }) => {
    await login(page)
  })

  // ---- Phase rendering ----

  test('shows the warmup phase when a session is started', async ({ page }) => {
    await startWorkout(page, workoutName)
    await expect(page.locator('.phase-label')).toContainText('Warm up')
    await expect(page.getByRole('button', { name: 'Go', exact: true })).toBeVisible()
  })

  // ---- Warm-up suggestions ----

  test('shows the warm-up suggestions section with heading and refresh button', async ({ page }) => {
    await startWorkout(page, workoutName)

    await expect(page.locator('.suggestions-section')).toBeVisible()
    await expect(page.locator('.suggestions-title')).toContainText('Warm-up ideas')
    await expect(page.getByRole('button', { name: 'Refresh suggestions' })).toBeVisible()
  })

  test('shows suggestions or error state (never stays in loading indefinitely)', async ({ page }) => {
    await startWorkout(page, workoutName)

    // The suggestions section must settle into either a list or an error — not a spinner — within 10 s.
    await expect(
      page.locator('.suggestions-list, .suggestions-error')
    ).toBeVisible({ timeout: 10000 })
  })

  // ---- Full happy path ----

  test('completes the full session and shows results', async ({ page }) => {
    await runFullSession(page, workoutName)

    // Results table
    await expect(page.locator('.result-group-title')).toContainText('Pushups')
    await expect(page.locator('.result-row')).toHaveCount(1)
  })

  test('Back to Home navigates to the home page', async ({ page }) => {
    await runFullSession(page, workoutName)

    await page.getByRole('button', { name: 'Back to Home' }).click()

    await expect(page).toHaveURL('/')
  })

  // ---- Locked state (relies on a log having been created by previous tests) ----

  test('editing the workout after a session shows the locked state banner', async ({ page }) => {
    // The workout was completed in a previous serial test, so it is now locked.
    await page.goto('/workouts/manage')
    const row = page.locator('.workout-item-row').filter({ hasText: workoutName })
    await row.getByRole('button', { name: workoutName }).click()

    await expect(page).toHaveURL(/\/workouts\/\d+\/edit/)
    await expect(page.getByText('Editing limited:')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Add exercise' })).not.toBeVisible()
  })
})

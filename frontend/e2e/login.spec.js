import { test, expect } from '@playwright/test'

// These tests run against a live dev stack (task up).
// A user with these credentials must exist in the dev database.
// Adjust if your dev superuser credentials differ.
const TEST_USER = 'testuser'
const TEST_PASS = 'testpass123'

test.describe('Login flow', () => {
  test('redirects unauthenticated users to /login', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveURL(/\/login/)
  })

  test('shows the login form', async ({ page }) => {
    await page.goto('/login')
    await expect(page.locator('label[for="username"]')).toBeVisible()
    await expect(page.locator('label[for="password"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
  })

  test('shows error on invalid credentials', async ({ page }) => {
    await page.goto('/login')

    await page.locator('#username').fill('wronguser')
    await page.locator('#password input').fill('wrongpass')
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByText('Login failed.')).toBeVisible()
  })

  test('logs in successfully and redirects to home', async ({ page }) => {
    await page.goto('/login')

    await page.locator('#username').fill(TEST_USER)
    await page.locator('#password input').fill(TEST_PASS)
    await page.getByRole('button', { name: 'Login' }).click()

    // Should redirect to home and show welcome message
    await expect(page).toHaveURL('/')
    await expect(page.getByText(`Welcome, ${TEST_USER}`, { exact: false })).toBeVisible()
  })

  test('authenticated user is redirected away from /login', async ({ page }) => {
    // Log in first
    await page.goto('/login')
    await page.locator('#username').fill(TEST_USER)
    await page.locator('#password input').fill(TEST_PASS)
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL('/')

    // Try navigating back to /login
    await page.goto('/login')
    await expect(page).toHaveURL('/')
  })

  test('logout returns to login page', async ({ page }) => {
    // Log in
    await page.goto('/login')
    await page.locator('#username').fill(TEST_USER)
    await page.locator('#password input').fill(TEST_PASS)
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page).toHaveURL('/')

    // Click logout
    await page.getByRole('button', { name: 'Logout' }).click()
    await expect(page).toHaveURL(/\/login/)
  })
})
 
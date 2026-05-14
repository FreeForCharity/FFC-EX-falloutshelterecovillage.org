import { test, expect } from '@playwright/test'

/**
 * Fallout Shelter Ecovillage homepage smoke tests.
 *
 * Verifies that the main homepage sections render and that key navigation
 * links exist after the WordPress-to-static migration.
 */

test.describe('Homepage', () => {
  test('renders the hero heading', async ({ page }) => {
    await page.goto('/')
    const heading = page.locator('#hero h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Fallout Shelter Ecovillage')
  })

  test('has all primary homepage sections', async ({ page }) => {
    await page.goto('/')
    for (const id of ['hero', 'mission', 'programs', 'visit', 'events', 'donate', 'contact']) {
      await expect(page.locator(`#${id}`)).toBeAttached()
    }
  })

  test('events section shows recurring gatherings', async ({ page }) => {
    await page.goto('/')
    const events = page.locator('#events')
    await expect(events).toBeVisible()
    await expect(events).toContainText('Recurring gatherings')
  })

  test('donate section lists mailing addresses', async ({ page }) => {
    await page.goto('/')
    const donate = page.locator('#donate')
    await expect(donate).toBeVisible()
    await expect(donate).toContainText('Coachella Canal')
    await expect(donate).toContainText('PO Box 382')
  })

  test('contact section has a mailto link', async ({ page }) => {
    await page.goto('/')
    const contact = page.locator('#contact')
    const mailto = contact.locator('a[href^="mailto:"]').first()
    await expect(mailto).toBeVisible()
    await expect(mailto).toHaveAttribute('href', /info@falloutshelterecovillage\.org/)
  })

  test('header wordmark links home', async ({ page }) => {
    await page.goto('/')
    const wordmarkLink = page.locator('header a[href="/"]').first()
    await expect(wordmarkLink).toBeVisible()
  })
})

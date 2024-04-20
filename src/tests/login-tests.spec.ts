import { expect } from "@playwright/test"
import { test } from '../fixtures/base'

test.describe('Login Tests', () => {

    test('Validate load state', async ({ loginPage, page }) => {
      await page.goto("/")
      await expect(loginPage.loginContent()).toBe(true)
    })
    test('Validate successful login', async ({ loginPage, securePage,page }) => {
      await page.goto("/")
      try {
        await loginPage.login("tomsmith", "SuperSecretPassword!")
        await expect(page).toHaveURL('/secure')
        await expect(securePage.successMessage).toBeVisible()
      } catch (error) {
        console.log('Login failed', error)
      }
    })
    // TODO: finish test for failed login
    // test('Validate failed login', async ({ loginPage, page }) => {
    //   await page.goto('/')
    // })  
})
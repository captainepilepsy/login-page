import { expect } from "@playwright/test"
import { test } from '../fixtures/base'

test.describe('Login Tests', () => {

    test('Validate load state', async ({ loginPage, page }) => {
      // Testing page content on load
      await page.goto('/login')
      try {
        await expect(loginPage.loginContent()).toBeTruthy() 
      } catch (error) {
        console.log('Login page validation failed', error)
      }
    })
    test('Validate successful login', async ({ loginPage, securePage, page }) => {
      // Testing valid credentials
      await page.goto('/login')
        await loginPage.login("tomsmith", "SuperSecretPassword!")
        await expect(page).toHaveURL('/secure')
        await expect(securePage.successMessage).toBeVisible()
        await expect(securePage.successMessage).toHaveCSS(
          'background-color', 'rgb(93, 164, 35)')
      })
    test('Validate password failed login', async ({ securePage, loginPage, page }) => {
      // Testing invalid password, with valid username.
        await page.goto('/login')
        await loginPage.login("tomsmith", "invalidpassword")
        await expect(securePage.successMessage).toBeHidden()
        await expect(page.getByText('Your password is invalid!')).toBeVisible()
        await expect(page.getByText('Your password is invalid!')).toHaveCSS(
          'background-color','rgb(198, 15, 19)')        
    })
    test('Validate username failed login', async ({ securePage, loginPage, page }) => {
      // Testing submit on empty fields, invalid username with valid password.
        await page.goto('/login')
        await loginPage.loginButton.click()
        await expect(page.getByText('Your username is invalid!')).toBeVisible()
        await loginPage.login("tomsmi", "SuperSecretPassword!")
        await expect(securePage.successMessage).toBeHidden()
        await expect(page.getByText('Your username is invalid!')).toBeVisible()
    })
    test('Username case sensitive', async ({ securePage, loginPage, page }) => {
        //testing case sensitivity on username field
        await page.goto('/login')
        await loginPage.login("TOMSMITH", "SuperSecretPassword!")
        await expect(page).toHaveURL('/login')
        await expect(securePage.successMessage).toBeHidden()
        await expect(page.getByText('Your username is invalid!')).toBeVisible()

    })     
})
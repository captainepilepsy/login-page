import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page
  readonly pageTitle: Locator
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly loginInstructions: Locator

  constructor(page: Page) { 
    this.page = page
    this.loginInstructions = page.getByRole('heading', { name: 'This is where you can log' })
    this.pageTitle = page.getByRole('heading', { name: 'Login Page' })
    this.usernameInput = page.getByLabel('Username')
    this.passwordInput = page.getByLabel('Password') 
    this.loginButton = page.getByRole('button', { name: ' Login' })
  }
}

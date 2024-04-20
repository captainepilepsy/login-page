import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page
  readonly pageTitle: Locator
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly loginInstructions: Locator
  readonly logoutSuccess: Locator
  readonly loginFailure: Locator

  constructor(page: Page) { 
    this.page = page
    this.loginInstructions = page.getByRole('heading', { name: 'This is where you can log' })
    this.pageTitle = page.getByRole('heading', { name: 'Login Page' })
    this.usernameInput = page.getByLabel('Username')
    this.passwordInput = page.getByLabel('Password') 
    this.loginButton = page.getByRole('button', { name: ' Login' })
    this.logoutSuccess = page.getByText('You logged out of the secure area!')
    this.loginFailure = page.getByText('Your password is invalid!')
  }
  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
  async loginContent() {
    await this.loginInstructions.isVisible()
    await this.pageTitle.isVisible()
    await this.usernameInput.isVisible()
    await this.passwordInput.isVisible()
    await this.loginButton.isVisible()   
  }
}

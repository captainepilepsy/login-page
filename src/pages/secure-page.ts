import { Page, Locator } from '@playwright/test'

export class SecurePage {
  readonly page: Page
  readonly successMessage: Locator
  readonly secureTitle: Locator
  readonly welcomeMessage: Locator
  readonly logoutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.successMessage = page.getByText('You logged into a secure area')
    this.secureTitle = page.getByRole('heading', { name: 'Secure Area', exact: true })
    this.welcomeMessage = page.getByRole('heading', { name: 'Welcome to the Secure Area.' })
    this.logoutButton = page.getByRole('link', { name: 'Logout' })
  }
}
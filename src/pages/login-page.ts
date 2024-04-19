import { Locator, Page } from '@playwright/test';

class LoginPage {
  readonly page: Page
  readonly pageTitle: Locator
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
}
import { LoginPage } from "../pages/login-page"
import { test as base } from '@playwright/test'

export const test = base.extend<{
  loginPage: LoginPage
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  }
})
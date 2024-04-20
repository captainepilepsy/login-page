import { LoginPage } from "../pages/login-page"
import { test as base } from '@playwright/test'
import { SecurePage } from "../pages/secure-page"

export const test = base.extend<{
  loginPage: LoginPage
  securePage: SecurePage
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  securePage: async ({ page }, use) => {
    await use(new SecurePage(page))
  },
})
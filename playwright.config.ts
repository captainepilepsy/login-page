import { devices, defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  fullyParallel: true,
  reporter: 'html',
  timeout: 60000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
})
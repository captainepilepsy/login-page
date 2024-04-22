import { devices, defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  fullyParallel: true,
  reporter: './src/fixtures/reporter',
  timeout: 60000,
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    screenshot: 'only-on-failure',
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
})
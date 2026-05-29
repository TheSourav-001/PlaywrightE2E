
import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

  await page.goto('https://demo.evershop.io/account/login');

  await page.locator('input[name="email"]').fill('lafil74353@mtupu.com');
  await page.locator('input[name="password"]').fill('sourav123');
  await page.locator('button:has-text("SIGN IN")').click();

  await expect(page).toHaveURL(/.*account/);

  await page.context().storageState({ path: authFile });
});
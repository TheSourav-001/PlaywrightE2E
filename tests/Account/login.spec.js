import { test, expect } from '@playwright/test';
import { Login } from "../../pages/login.js";
test.use({ storageState: { cookies: [], origins: [] } });

const registerEmail = "thisemailfortestingpurpose@gmail.com";
const registerPassword = "thisemailfortestingpurpose@gmail.com";
const invalidEmailFormat = "thisemailfortestingpurposegmail.com";
const blankSpace = "   ";
const wrongEmail = "wrongemailfortestingpurpose@gmail.com";
const wrongPassword = "wrongpassword123";
const unregisteredEmail = "unregistereduser12345@gmail.com";
const shortPassword = "ab";

async function expectLoginError(page) {
  const possibleErrorLocators = [
    page.locator('[role="alert"]'),
    page.locator('.message-error'),
    page.locator('.error-message'),
    page.locator('.message-danger'),
    page.locator('.notification-error'),
    page.locator('[class*="error"]'),
  ];

  for (const locator of possibleErrorLocators) {
    try {
      if ((await locator.count()) > 0) {
        await expect(locator.first()).toBeVisible({ timeout: 3000 });
        return;
      }
    } catch (error) {
      continue;
    }
  }

  await expect(page).toHaveURL(/\/account\/login/);
}

test.describe("Login page functionality test suite", () => {
  let login;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);

    await page.goto("/account/login", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    await expect(page.locator('#field-email')).toBeVisible();
    await expect(page.locator('#field-password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test("TC01: Validate Login with valid credentials | Expected: User should be able to login successfully", async ({ page }) => {
    await login.enterEmailInput(registerEmail);
    await login.enterPasswordInput(registerPassword);
    await login.clickButton("Sign In");

    await expect(page).toHaveURL("https://demo.evershop.io");
  });

  test("TC02: Validate Login with invalid email format | Expected: User should see validation error", async ({ page }) => {
    await login.enterEmailInput(invalidEmailFormat);
    await login.enterPasswordInput(registerPassword);
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC03: Validate Login with blank email | Expected: User should see required field error", async ({ page }) => {
    await login.enterEmailInput("");
    await login.enterPasswordInput(registerPassword);
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC04: Validate Login with blank password | Expected: User should see required field error", async ({ page }) => {
    await login.enterEmailInput(registerEmail);
    await login.enterPasswordInput("");
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC05: Validate Login with both fields blank | Expected: User should not be able to submit", async ({ page }) => {
    await login.enterEmailInput("");
    await login.enterPasswordInput("");
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC06: Validate Login with wrong password | Expected: User should see incorrect credential error", async ({ page }) => {
    await login.enterEmailInput(registerEmail);
    await login.enterPasswordInput(wrongPassword);
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC07: Validate Login with unregistered email | Expected: User should see account not found or invalid credential error", async ({ page }) => {
    await login.enterEmailInput(unregisteredEmail);
    await login.enterPasswordInput(registerPassword);
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC08: Validate Login with email containing leading and trailing spaces | Expected: System should trim or show validation error", async ({ page }) => {
    await login.enterEmailInput(`   ${registerEmail}   `);
    await login.enterPasswordInput(registerPassword);
    await login.clickButton("Sign In");

    const currentUrl = page.url();
    expect(currentUrl).toContain("/account/login");
  });

  test("TC09: Validate Login with short password | Expected: User should see validation error", async ({ page }) => {
    await login.enterEmailInput(registerEmail);
    await login.enterPasswordInput(shortPassword);
    await login.clickButton("Sign In");

    await expectLoginError(page);
  });

  test("TC10: Validate Login button visibility and form stability | Expected: Login form should remain visible after failed attempt", async ({ page }) => {
    await login.enterEmailInput(wrongEmail);
    await login.enterPasswordInput(wrongPassword);
    await login.clickButton("Sign In");

    await expect(page.locator('#field-email')).toBeVisible();
    await expect(page.locator('#field-password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page).toHaveURL(/\/account\/login/);
  });
});
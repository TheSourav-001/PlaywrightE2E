# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\login.spec.js >> Login page functionality test suite >> TC01: Validate Login with valid credentials | Expected: User should be able to login successfully
- Location: tests\Account\login.spec.js:14:3

# Error details

```
ReferenceError: login is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Login } from "../../pages/login.js";
  3  | 
  4  | test.describe("Login page functionality test suite", () => {
  5  |   test.beforeEach(async ({ page }) => {
> 6  |     login = new Login(page);
     |          ^ ReferenceError: login is not defined
  7  |     await page.goto("/account/login", {
  8  |       waitUntil: "domcontentloaded",
  9  |       timeout: 60000,
  10 |     });
  11 |     await expect(page.locator('#field-email')).toBeVisible();
  12 |   });
  13 | 
  14 |   test("TC01: Validate Login with valid credentials | Expected: User should be able to login successfully", async ({ page }) => {
  15 | 
  16 |     const email = `testuser_${Date.now()}@example.com`;
  17 |     const password = "TestPassword123!";
  18 | 
  19 |     await login.enterEmailInput(email);
  20 |     await login.enterPasswordInput(password);
  21 |     await login.clickButton("Sign In");
  22 | 
  23 |     await expect(page).toHaveURL("https://demo.evershop.io/account/login");
  24 |   });
  25 | });
```
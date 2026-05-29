# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\login.spec.js >> Login page functionality test suite >> TC01: Validate Login with valid credentials | Expected: User should be able to login successfully
- Location: tests\Account\login.spec.js:16:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://demo.evershop.io/"
Received: "https://demo.evershop.io/account/login"
Timeout:  10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    23 × unexpected value "https://demo.evershop.io/account/login"

```

```yaml
- banner:
  - navigation:
    - navigation:
      - list:
        - listitem:
          - button "Shop"
        - listitem:
          - link "About us":
            - /url: /page/about-us
  - link:
    - /url: /
    - img
  - link:
    - /url: "#"
  - link:
    - /url: https://demo.evershop.io/account/login
  - button "Shopping cart with 0 items"
- main:
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem:
        - link "Login" [disabled]
  - heading "Welcome Back!" [level=1]
  - paragraph: Please sign in to your account
  - group:
    - group:
      - text: Email *
      - group:
        - textbox "Email *":
          - /placeholder: Email
          - text: testuser_1779973381602@example.com
        - group
    - group:
      - text: Password *
      - group:
        - textbox "Password *":
          - /placeholder: Password
          - text: TestPassword123!
        - group
        - group:
          - button
    - button "Sign In"
  - link "Create an account":
    - /url: https://demo.evershop.io/account/register
  - link "Forgot your password?":
    - /url: https://demo.evershop.io/account/reset-password
- contentinfo:
  - img
  - img
  - img "PayPal"
  - text: © 2022 Evershop. All Rights Reserved.
  - region "Notifications alt+T"
- alert: Invalid email or password
- button "close"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { Login } from "../../pages/login.js";
  3  | 
  4  | let login;
  5  | 
  6  | test.describe("Login page functionality test suite", () => {
  7  |   test.beforeEach(async ({ page }) => {
  8  |     login = new Login(page);
  9  |     await page.goto("/account/login", {
  10 |       waitUntil: "domcontentloaded",
  11 |       timeout: 60000,
  12 |     });
  13 |     await expect(page.locator('#field-email')).toBeVisible();
  14 |   });
  15 | 
  16 |   test("TC01: Validate Login with valid credentials | Expected: User should be able to login successfully", async ({ page }) => {
  17 | 
  18 |     const email = `testuser_${Date.now()}@example.com`;
  19 |     const password = "TestPassword123!";
  20 | 
  21 |     await login.enterEmailInput(email);
  22 |     await login.enterPasswordInput(password);
  23 |     await login.clickButton("Sign In");
  24 | 
> 25 |     await expect(page).toHaveURL("https://demo.evershop.io/");
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  26 |   });
  27 | });
```
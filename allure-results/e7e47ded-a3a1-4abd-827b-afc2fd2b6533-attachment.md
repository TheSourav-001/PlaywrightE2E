# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\registration.spec.js >> Account page functionality test >> TC09: Validate registration with keeping blank spaces using all fields
- Location: tests\Account\registration.spec.js:95:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Full name is required')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Full name is required')

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
        - link "Create an account" [disabled]
  - heading "Create an account" [level=1]
  - paragraph: Join us for exclusive offers and order tracking
  - group:
    - group:
      - text: Full Name *
      - group:
        - textbox "Full Name *":
          - /placeholder: Full Name
        - group
    - group:
      - text: Email *
      - group:
        - textbox "Email *":
          - /placeholder: Email
        - group
      - alert: Email is required
    - group:
      - text: Password *
      - group:
        - textbox "Password *":
          - /placeholder: Password
        - group
        - group:
          - button
      - alert: Password must be at least 6 characters long
    - button "Sign Up"
  - text: Already have an account?
  - link "Login":
    - /url: https://demo.evershop.io/account/login
- contentinfo:
  - img
  - img
  - img "PayPal"
  - text: © 2022 Evershop. All Rights Reserved.
  - region "Notifications alt+T"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { Account } from "../../pages/account.page.js";
  3   | 
  4   | const fullname = "Sourav Dipto Apu";
  5   | const email = `sourav${Date.now()}@example.com`;
  6   | const password = "sourav123";
  7   | const invalidEmail = "sourav.com";
  8   | const registeredEmail = "setala3967@ccadas.com";
  9   | const shortPassword = "ab";
  10  | const blankSpace = " ";
  11  | 
  12  | test.describe("Account page functionality test", () => {
  13  |   let account;
  14  | 
  15  |   test.beforeEach(async ({ page }) => {
  16  |   account = new Account(page);
  17  | 
  18  |   await page.goto("/account/register", {
  19  |     waitUntil: "domcontentloaded",
  20  |     timeout: 60000,
  21  |   });
  22  |    await expect(
  23  |     page.locator('#field-full_name')
  24  |   ).toBeVisible();
  25  | });
  26  | 
  27  |   test("TC01: Validate Registration with valid credentials", async ({ page }) => {
  28  |     const account = new Account(page);
  29  |   
  30  |     await account.enterFullname(fullname);
  31  |     await account.enterEmailInput(email);
  32  |     await account.enterPasswordInput(password);
  33  |     await account.clickButton("Sign Up");
  34  | 
  35  |     await expect(page).toHaveURL("https://demo.evershop.io/");
  36  |   });
  37  | 
  38  |  test("TC02: Validate Registration without fullname", async ({ page }) => {
  39  |     const account = new Account(page);
  40  |  
  41  |     await account.enterEmailInput(email);
  42  |     await account.enterPasswordInput(password);
  43  |     await account.clickButton("Sign Up");
  44  | 
  45  |     await expect(page.locator("text=Full name is required")).toBeVisible();
  46  |   });
  47  | 
  48  |   test ("TC03: Validate Registration without email", async ({page})=>{
  49  |      await account.enterFullname(fullname); 
  50  |      await account.enterPasswordInput(password);
  51  |      await account.clickButton("Sign Up");
  52  | 
  53  |      await expect(page.getByText("Email is required")).toBeVisible();
  54  |   });
  55  | 
  56  |   test ("TC04: Validate registration without password", async({page})=>{
  57  |     await account.enterFullname(fullname);
  58  |     await account.enterEmailInput(email);
  59  |     await account.clickButton("Sign Up");
  60  | 
  61  |     await expect(page.getByText("Password is required")).toBeVisible();
  62  |   });
  63  | 
  64  |   test ("TC05: Validate registration with invalid email formate", async({page})=>{
  65  |     await account.enterFullname(fullname);
  66  |     await account.enterEmailInput(invalidEmail);
  67  |     await account.enterPasswordInput(password);
  68  |     await account.clickButton("Sign Up");
  69  | 
  70  |     await expect(page.getByText("Please enter a valid email address")).toBeVisible();
  71  |   });
  72  |   test ("TC06: Validate registration with already registered email", async({page})=>{
  73  |     await account.enterFullname(fullname);
  74  |     await account.enterEmailInput(registeredEmail);
  75  |     await account.enterPasswordInput(password);
  76  |     await account.clickButton("Sign Up");
  77  | 
  78  |     await expect(page.getByText("Email is already used")).toBeVisible();
  79  |   });
  80  |   test ("TC07: Validate registration with short password", async({page})=>{
  81  |     await account.enterFullname(fullname);
  82  |     await account.enterEmailInput(email);
  83  |     await account.enterPasswordInput(shortPassword);
  84  |     await account.clickButton("Sign Up");
  85  | 
  86  |     await expect(page.getByText("Password must be at least 6 characters long")).toBeVisible();
  87  |   });
  88  |   test ("TC08: Validate registration with empty fields", async({page})=>{
  89  |     await account.clickButton("Sign Up");
  90  | 
  91  |     await expect(page.getByText("Full name is required")).toBeVisible();
  92  |     await expect(page.getByText("Email is required")).toBeVisible();
  93  |     await expect(page.getByText("Password is required")).toBeVisible();
  94  |   });
  95  |   test ("TC09: Validate registration with keeping blank spaces using all fields", async({page})=>{
  96  |     await account.enterFullname(blankSpace);
  97  |     await account.enterEmailInput(blankSpace);
  98  |     await account.enterPasswordInput(blankSpace);
  99  |     await account.clickButton("Sign Up");
  100 | 
> 101 |     await expect(page.getByText("Full name is required")).toBeVisible();
      |                                                           ^ Error: expect(locator).toBeVisible() failed
  102 |     await expect(page.getByText("Email is required")).toBeVisible();
  103 |     await expect(page.getByText("Password is required")).toBeVisible();
  104 |   });
  105 |   test ("TC10: Validate Show/Hide Password functionality", async({page})=>{
  106 |     await account.enterPasswordInput(password);
  107 |     await account.clickOnEyeIcon();
  108 | 
  109 |     await expect(page.locator(".lucide-eye")).toBeVisible();
  110 |   });
  111 | });
```
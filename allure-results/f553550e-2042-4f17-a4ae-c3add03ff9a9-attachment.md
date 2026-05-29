# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\registration.spec.js >> Registration page functionality test suite >> TC09: Validate registration with keeping blank spaces into the name input field | Expected: The system should not allow user to register using the blank spaces
- Location: tests\Account\registration.spec.js:93:3

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
    - waiting for" https://demo.evershop.io/" navigation to finish...
    - navigated to "https://demo.evershop.io/"

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
    - /url: https://demo.evershop.io/account
  - button "Shopping cart with 0 items"
- main:
  - button "Previous slide":
    - img
  - img "Crafted With Care"
  - heading "Crafted With Care" [level=2]
  - paragraph: Elegant designs that enhance your daily life, from morning coffee to home organization
  - link "View Collection":
    - /url: /accessories
  - button "Next slide":
    - img
  - heading "Kids shoes collection" [level=3]
  - paragraph: Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
  - link "Shop kids":
    - /url: /accessories
  - heading "Women shoes collection" [level=3]
  - paragraph: Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
  - link "Shop kids":
    - /url: /accessories
  - heading "Men shoes collection" [level=3]
  - paragraph: Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
  - link "Shop kids":
    - /url: /accessories
  - heading "Featured Products" [level=3]
  - link "Stainless Steel Thermos - Yellow Stainless Steel Thermos - Yellow $35.00":
    - /url: /accessories/stainless-steel-thermos-yellow
    - img "Stainless Steel Thermos - Yellow"
    - heading "Stainless Steel Thermos - Yellow" [level=3]
    - text: $35.00
  - link "Stainless Steel Thermos - Black Stainless Steel Thermos - Black $35.00":
    - /url: /accessories/stainless-steel-thermos-black
    - img "Stainless Steel Thermos - Black"
    - heading "Stainless Steel Thermos - Black" [level=3]
    - text: $35.00
  - link "Modern Ceramic Vase - Green Modern Ceramic Vase - Green $25.00":
    - /url: /accessories/modern-ceramic-vase-green
    - img "Modern Ceramic Vase - Green"
    - heading "Modern Ceramic Vase - Green" [level=3]
    - text: $25.00
  - link "Modern Ceramic Vase - Black Modern Ceramic Vase - Black $25.00":
    - /url: /accessories/modern-ceramic-vase-black
    - img "Modern Ceramic Vase - Black"
    - heading "Modern Ceramic Vase - Black" [level=3]
    - text: $25.00
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
  10  | const blankSpace = "   ";
  11  | 
  12  | test.describe("Registration page functionality test suite", () => {
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
  27  |   test("TC01: Validate Registration with valid credentials | Expected: User should be able to register successfully", async ({ page }) => {
  28  |   
  29  |     await account.enterFullname(fullname);
  30  |     await account.enterEmailInput(email);
  31  |     await account.enterPasswordInput(password);
  32  |     await account.clickButton("Sign Up");
  33  | 
  34  |     await expect(page).toHaveURL("https://demo.evershop.io/");
  35  |   });
  36  | 
  37  |  test("TC02: Validate Registration without fullname | Expected: User should see an error message", async ({ page }) => {
  38  |  
  39  |     await account.enterEmailInput(email);
  40  |     await account.enterPasswordInput(password);
  41  |     await account.clickButton("Sign Up");
  42  | 
  43  |     await expect(page.locator("text=Full name is required")).toBeVisible();
  44  |   });
  45  | 
  46  |   test ("TC03: Validate Registration without email | Expected: User should see an error message", async ({page})=>{
  47  |      await account.enterFullname(fullname); 
  48  |      await account.enterPasswordInput(password);
  49  |      await account.clickButton("Sign Up");
  50  | 
  51  |      await expect(page.getByText("Email is required")).toBeVisible();
  52  |   });
  53  | 
  54  |   test ("TC04: Validate registration without password | Expected: User should see an error message", async({page})=>{
  55  |     await account.enterFullname(fullname);
  56  |     await account.enterEmailInput(email);
  57  |     await account.clickButton("Sign Up");
  58  | 
  59  |     await expect(page.getByText("Password is required")).toBeVisible();
  60  |   });
  61  | 
  62  |   test ("TC05: Validate registration with invalid email formate | Expected: User should see an error message", async({page})=>{
  63  |     await account.enterFullname(fullname);
  64  |     await account.enterEmailInput(invalidEmail);
  65  |     await account.enterPasswordInput(password);
  66  |     await account.clickButton("Sign Up");
  67  | 
  68  |     await expect(page.getByText("Please enter a valid email address")).toBeVisible();
  69  |   });
  70  |   test ("TC06: Validate registration with already registered email | Expected: User should see an error message", async({page})=>{
  71  |     await account.enterFullname(fullname);
  72  |     await account.enterEmailInput(registeredEmail);
  73  |     await account.enterPasswordInput(password);
  74  |     await account.clickButton("Sign Up");
  75  | 
  76  |     await expect(page.getByText("Email is already used")).toBeVisible();
  77  |   });
  78  |   test ("TC07: Validate registration with short password | Expected: User should see an error message", async({page})=>{
  79  |     await account.enterFullname(fullname);
  80  |     await account.enterEmailInput(email);
  81  |     await account.enterPasswordInput(shortPassword);
  82  |     await account.clickButton("Sign Up");
  83  | 
  84  |     await expect(page.getByText("Password must be at least 6 characters long")).toBeVisible();
  85  |   });
  86  |   test ("TC08: Validate registration with empty fields | Expected: User should see error messages", async({page})=>{
  87  |     await account.clickButton("Sign Up");
  88  | 
  89  |     await expect(page.getByText("Full name is required")).toBeVisible();
  90  |     await expect(page.getByText("Email is required")).toBeVisible();
  91  |     await expect(page.getByText("Password is required")).toBeVisible();
  92  |   });
  93  |   test ("TC09: Validate registration with keeping blank spaces into the name input field | Expected: The system should not allow user to register using the blank spaces", async({page})=>{
  94  |     await account.enterFullname(blankSpace);
  95  |     await account.enterEmailInput(email);
  96  |     await account.enterPasswordInput(password);
  97  |     await account.clickButton("Sign Up");
  98  | 
> 99  |     await expect(page.getByText("Full name is required")).toBeVisible();
      |                                                           ^ Error: expect(locator).toBeVisible() failed
  100 |   });
  101 |   test ("TC10: Validate Show/Hide Password functionality | Expected: User should be able to show or hide the password", async({page})=>{
  102 |     await account.enterPasswordInput(password);
  103 |     
  104 |     await expect(page.locator(".lucide-eye-closed")).toBeVisible();
  105 |     await account.clickOnEyeIcon();
  106 |     await expect(page.locator(".lucide-eye")).toBeVisible();
  107 |   });
  108 | });
```
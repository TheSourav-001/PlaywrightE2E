# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\registration.spec.js >> Registration page functionality test suite >> TC09: Validate registration with keeping blank spaces into the name input field | Expected: The system should not allow user to register using the blank spaces
- Location: tests\Account\registration.spec.js:94:3

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

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - navigation [ref=e9]:
        - navigation [ref=e12]:
          - list [ref=e13]:
            - listitem [ref=e14]:
              - button "Shop" [ref=e15]:
                - text: Shop
                - img [ref=e16]
            - listitem [ref=e18]:
              - link "About us" [ref=e19] [cursor=pointer]:
                - /url: /page/about-us
      - link [ref=e22] [cursor=pointer]:
        - /url: /
        - img [ref=e23]
      - generic [ref=e27]:
        - link [ref=e29] [cursor=pointer]:
          - /url: "#"
          - img [ref=e30]
        - link [ref=e34] [cursor=pointer]:
          - /url: https://demo.evershop.io/account
          - img [ref=e35]
        - button "Shopping cart with 0 items" [ref=e40] [cursor=pointer]:
          - img [ref=e41]
  - main [ref=e44]:
    - generic [ref=e46]:
      - button "Previous slide" [ref=e47]:
        - img [ref=e48]
      - generic [ref=e51]:
        - generic [ref=e55]:
          - img [ref=e56]
          - generic [ref=e58]:
            - heading [level=2] [ref=e59]: Crafted With Care
            - paragraph [ref=e60]: Elegant designs that enhance your daily life, from morning coffee to home organization
            - link [ref=e61] [cursor=pointer]:
              - /url: /accessories
              - text: View Collection
        - generic [ref=e65]:
          - img "Premium Quality Products" [ref=e66]
          - generic [ref=e68]:
            - heading "Premium Quality Products" [level=2] [ref=e69]
            - paragraph [ref=e70]: Discover our exquisite collection of ceramic and stainless steel products
            - link "Shop Now" [ref=e71] [cursor=pointer]:
              - /url: /accessories
        - generic [ref=e75]:
          - img [ref=e76]
          - generic [ref=e78]:
            - heading [level=2] [ref=e79]: Crafted With Care
            - paragraph [ref=e80]: Elegant designs that enhance your daily life, from morning coffee to home organization
            - link [ref=e81] [cursor=pointer]:
              - /url: /accessories
              - text: View Collection
        - generic [ref=e85]:
          - img [ref=e86]
          - generic [ref=e88]:
            - heading [level=2] [ref=e89]: Premium Quality Products
            - paragraph [ref=e90]: Discover our exquisite collection of ceramic and stainless steel products
            - link [ref=e91] [cursor=pointer]:
              - /url: /accessories
              - text: Shop Now
      - button "Next slide" [ref=e92]:
        - img [ref=e93]
    - generic [ref=e97]:
      - generic [ref=e99]:
        - heading "Kids shoes collection" [level=3] [ref=e100]
        - paragraph [ref=e101]: Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
        - link "Shop kids" [ref=e103] [cursor=pointer]:
          - /url: /accessories
      - generic [ref=e105]:
        - heading "Women shoes collection" [level=3] [ref=e106]
        - paragraph [ref=e107]: Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
        - link "Shop kids" [ref=e109] [cursor=pointer]:
          - /url: /accessories
      - generic [ref=e111]:
        - heading "Men shoes collection" [level=3] [ref=e112]
        - paragraph [ref=e113]: Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.
        - link "Shop kids" [ref=e115] [cursor=pointer]:
          - /url: /accessories
    - generic [ref=e117]:
      - heading "Featured Products" [level=3] [ref=e118]
      - generic [ref=e120]:
        - link "Stainless Steel Thermos - Yellow Stainless Steel Thermos - Yellow $35.00" [ref=e123] [cursor=pointer]:
          - /url: /accessories/stainless-steel-thermos-yellow
          - img "Stainless Steel Thermos - Yellow" [ref=e125]
          - generic [ref=e126]:
            - heading "Stainless Steel Thermos - Yellow" [level=3] [ref=e127]
            - generic [ref=e128]: $35.00
        - link "Stainless Steel Thermos - Black Stainless Steel Thermos - Black $35.00" [ref=e131] [cursor=pointer]:
          - /url: /accessories/stainless-steel-thermos-black
          - img "Stainless Steel Thermos - Black" [ref=e133]
          - generic [ref=e134]:
            - heading "Stainless Steel Thermos - Black" [level=3] [ref=e135]
            - generic [ref=e136]: $35.00
        - link "Modern Ceramic Vase - Green Modern Ceramic Vase - Green $25.00" [ref=e139] [cursor=pointer]:
          - /url: /accessories/modern-ceramic-vase-green
          - img "Modern Ceramic Vase - Green" [ref=e141]
          - generic [ref=e142]:
            - heading "Modern Ceramic Vase - Green" [level=3] [ref=e143]
            - generic [ref=e144]: $25.00
        - link "Modern Ceramic Vase - Black Modern Ceramic Vase - Black $25.00" [ref=e147] [cursor=pointer]:
          - /url: /accessories/modern-ceramic-vase-black
          - img "Modern Ceramic Vase - Black" [ref=e149]
          - generic [ref=e150]:
            - heading "Modern Ceramic Vase - Black" [level=3] [ref=e151]
            - generic [ref=e152]: $25.00
  - contentinfo [ref=e153]:
    - generic [ref=e155]:
      - generic [ref=e157]:
        - img [ref=e159]
        - img [ref=e164]
        - img "PayPal" [ref=e171]
      - generic [ref=e178]: © 2022 Evershop. All Rights Reserved.
    - region "Notifications alt+T"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { Account } from "../../pages/account.page.js";
  3   | test.use({ storageState: { cookies: [], origins: [] } });
  4   | 
  5   | const fullname = "Sourav Dipto Apu";
  6   | const email = `sourav${Date.now()}@example.com`;
  7   | const password = "sourav123";
  8   | const invalidEmail = "sourav.com";
  9   | const registeredEmail = "setala3967@ccadas.com";
  10  | const shortPassword = "ab";
  11  | const blankSpace = "   ";
  12  | 
  13  | test.describe("Registration page functionality test suite", () => {
  14  |   let account;
  15  | 
  16  |   test.beforeEach(async ({ page }) => {
  17  |   account = new Account(page);
  18  | 
  19  |   await page.goto("/account/register", {
  20  |     waitUntil: "domcontentloaded",
  21  |     timeout: 60000,
  22  |   });
  23  |    await expect(
  24  |     page.locator('#field-full_name')
  25  |   ).toBeVisible();
  26  | });
  27  | 
  28  |   test("TC01: Validate Registration with valid credentials | Expected: User should be able to register successfully", async ({ page }) => {
  29  |   
  30  |     await account.enterFullname(fullname);
  31  |     await account.enterEmailInput(email);
  32  |     await account.enterPasswordInput(password);
  33  |     await account.clickButton("Sign Up");
  34  | 
  35  |     await expect(page).toHaveURL("https://demo.evershop.io/");
  36  |   });
  37  | 
  38  |  test("TC02: Validate Registration without fullname | Expected: User should see an error message", async ({ page }) => {
  39  |  
  40  |     await account.enterEmailInput(email);
  41  |     await account.enterPasswordInput(password);
  42  |     await account.clickButton("Sign Up");
  43  | 
  44  |     await expect(page.locator("text=Full name is required")).toBeVisible();
  45  |   });
  46  | 
  47  |   test ("TC03: Validate Registration without email | Expected: User should see an error message", async ({page})=>{
  48  |      await account.enterFullname(fullname); 
  49  |      await account.enterPasswordInput(password);
  50  |      await account.clickButton("Sign Up");
  51  | 
  52  |      await expect(page.getByText("Email is required")).toBeVisible();
  53  |   });
  54  | 
  55  |   test ("TC04: Validate registration without password | Expected: User should see an error message", async({page})=>{
  56  |     await account.enterFullname(fullname);
  57  |     await account.enterEmailInput(email);
  58  |     await account.clickButton("Sign Up");
  59  | 
  60  |     await expect(page.getByText("Password is required")).toBeVisible();
  61  |   });
  62  | 
  63  |   test ("TC05: Validate registration with invalid email formate | Expected: User should see an error message", async({page})=>{
  64  |     await account.enterFullname(fullname);
  65  |     await account.enterEmailInput(invalidEmail);
  66  |     await account.enterPasswordInput(password);
  67  |     await account.clickButton("Sign Up");
  68  | 
  69  |     await expect(page.getByText("Please enter a valid email address")).toBeVisible();
  70  |   });
  71  |   test ("TC06: Validate registration with already registered email | Expected: User should see an error message", async({page})=>{
  72  |     await account.enterFullname(fullname);
  73  |     await account.enterEmailInput(registeredEmail);
  74  |     await account.enterPasswordInput(password);
  75  |     await account.clickButton("Sign Up");
  76  | 
  77  |     await expect(page.getByText("Email is already used")).toBeVisible();
  78  |   });
  79  |   test ("TC07: Validate registration with short password | Expected: User should see an error message", async({page})=>{
  80  |     await account.enterFullname(fullname);
  81  |     await account.enterEmailInput(email);
  82  |     await account.enterPasswordInput(shortPassword);
  83  |     await account.clickButton("Sign Up");
  84  | 
  85  |     await expect(page.getByText("Password must be at least 6 characters long")).toBeVisible();
  86  |   });
  87  |   test ("TC08: Validate registration with empty fields | Expected: User should see error messages", async({page})=>{
  88  |     await account.clickButton("Sign Up");
  89  | 
  90  |     await expect(page.getByText("Full name is required")).toBeVisible();
  91  |     await expect(page.getByText("Email is required")).toBeVisible();
  92  |     await expect(page.getByText("Password is required")).toBeVisible();
  93  |   });
  94  |   test ("TC09: Validate registration with keeping blank spaces into the name input field | Expected: The system should not allow user to register using the blank spaces", async({page})=>{
  95  |     await account.enterFullname(blankSpace);
  96  |     await account.enterEmailInput(email);
  97  |     await account.enterPasswordInput(password);
  98  |     await account.clickButton("Sign Up");
  99  | 
> 100 |     await expect(page.getByText("Full name is required")).toBeVisible();
      |                                                           ^ Error: expect(locator).toBeVisible() failed
  101 |   });
  102 |   test ("TC10: Validate Show/Hide Password functionality | Expected: User should be able to show or hide the password", async({page})=>{
  103 |     await account.enterPasswordInput(password);
  104 |     
  105 |     await expect(page.locator(".lucide-eye-closed")).toBeVisible();
  106 |     await account.clickOnEyeIcon();
  107 |     await expect(page.locator(".lucide-eye")).toBeVisible();
  108 |   });
  109 | });
```
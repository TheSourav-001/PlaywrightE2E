import { test, expect } from '@playwright/test';
import { Account } from "../../pages/account.page.js";
test.use({ storageState: { cookies: [], origins: [] } });

const fullname = "Sourav Dipto Apu";
const email = `sourav${Date.now()}@example.com`;
const password = "sourav123";
const invalidEmail = "sourav.com";
const registeredEmail = "setala3967@ccadas.com";
const shortPassword = "ab";
const blankSpace = "   ";

test.describe("Registration page functionality test suite", () => {
  let account;

  test.beforeEach(async ({ page }) => {
  account = new Account(page);

  await page.goto("/account/register", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
   await expect(
    page.locator('#field-full_name')
  ).toBeVisible();
});

  test("TC01: Validate Registration with valid credentials | Expected: User should be able to register successfully", async ({ page }) => {
  
    await account.enterFullname(fullname);
    await account.enterEmailInput(email);
    await account.enterPasswordInput(password);
    await account.clickButton("Sign Up");

    await expect(page).toHaveURL("https://demo.evershop.io/");
  });

 test("TC02: Validate Registration without fullname | Expected: User should see an error message", async ({ page }) => {
 
    await account.enterEmailInput(email);
    await account.enterPasswordInput(password);
    await account.clickButton("Sign Up");

    await expect(page.locator("text=Full name is required")).toBeVisible();
  });

  test ("TC03: Validate Registration without email | Expected: User should see an error message", async ({page})=>{
     await account.enterFullname(fullname); 
     await account.enterPasswordInput(password);
     await account.clickButton("Sign Up");

     await expect(page.getByText("Email is required")).toBeVisible();
  });

  test ("TC04: Validate registration without password | Expected: User should see an error message", async({page})=>{
    await account.enterFullname(fullname);
    await account.enterEmailInput(email);
    await account.clickButton("Sign Up");

    await expect(page.getByText("Password is required")).toBeVisible();
  });

  test ("TC05: Validate registration with invalid email formate | Expected: User should see an error message", async({page})=>{
    await account.enterFullname(fullname);
    await account.enterEmailInput(invalidEmail);
    await account.enterPasswordInput(password);
    await account.clickButton("Sign Up");

    await expect(page.getByText("Please enter a valid email address")).toBeVisible();
  });
  test ("TC06: Validate registration with already registered email | Expected: User should see an error message", async({page})=>{
    await account.enterFullname(fullname);
    await account.enterEmailInput(registeredEmail);
    await account.enterPasswordInput(password);
    await account.clickButton("Sign Up");

    await expect(page.getByText("Email is already used")).toBeVisible();
  });
  test ("TC07: Validate registration with short password | Expected: User should see an error message", async({page})=>{
    await account.enterFullname(fullname);
    await account.enterEmailInput(email);
    await account.enterPasswordInput(shortPassword);
    await account.clickButton("Sign Up");

    await expect(page.getByText("Password must be at least 6 characters long")).toBeVisible();
  });
  test ("TC08: Validate registration with empty fields | Expected: User should see error messages", async({page})=>{
    await account.clickButton("Sign Up");

    await expect(page.getByText("Full name is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Password is required")).toBeVisible();
  });
  test ("TC09: Validate registration with keeping blank spaces into the name input field | Expected: The system should not allow user to register using the blank spaces", async({page})=>{
    await account.enterFullname(blankSpace);
    await account.enterEmailInput(email);
    await account.enterPasswordInput(password);
    await account.clickButton("Sign Up");

    await expect(page.getByText("Full name is required")).toBeVisible();
  });
  test ("TC10: Validate Show/Hide Password functionality | Expected: User should be able to show or hide the password", async({page})=>{
    await account.enterPasswordInput(password);
    
    await expect(page.locator(".lucide-eye-closed")).toBeVisible();
    await account.clickOnEyeIcon();
    await expect(page.locator(".lucide-eye")).toBeVisible();
  });
});
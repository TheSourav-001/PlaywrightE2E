import { test, expect } from "@playwright/test";
import { Logout } from "../../pages/Logout/logout";

test.describe("Logout functionality test suite", () => {
    test("Complete Logout Validation Flow", async ({ page }) => {
        const logoutPage = new Logout(page);

        await test.step("Setup: Navigate to account page", async () => {
            await page.goto("/account", {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });
        });

        await test.step("TC01: Verify logout button is visible | Expected: Logout button should be visible", async () => {
            await expect(logoutPage.logoutButton).toBeVisible();
        });

        await test.step("TC02: Verify logout button is enabled | Expected: Logout button should be enabled", async () => {
            await expect(logoutPage.logoutButton).toBeEnabled();
        });

        await test.step("TC03: Verify logout button has correct text | Expected: Button text should be Logout", async () => {
            await expect(logoutPage.logoutButton).toHaveText("Logout");
        });

        await test.step("TC09: Verify logout button is not disabled | Expected: Logout button should not be disabled", async () => {
            await expect(logoutPage.logoutButton).not.toBeDisabled();
        });

        await test.step("TC10: Verify logout button is not hidden | Expected: Logout button should not be hidden", async () => {
            await expect(logoutPage.logoutButton).not.toBeHidden();
        });

        await test.step("TC04: Verify user is redirected to home page after logout | Expected: URL should be base URL", async () => {
            await logoutPage.clickOnLogoutButton();
            await page.waitForURL("**/", { timeout: 10000 });
            expect(page.url()).not.toContain("/account");
        });

        await test.step("TC05: Verify logout button disappears after logout | Expected: Logout button should not be visible", async () => {
            await expect(logoutPage.logoutButton).not.toBeVisible();
        });

        await test.step("TC08: Verify account icon is visible after logout | Expected: Account icon should still be visible on home page", async () => {
            await expect(page.locator('a[href="/account/login"]')).toBeVisible();
        });

        await test.step("TC06: Verify user cannot directly access account page after logout | Expected: Should redirect to login page", async () => {
            await page.goto("/account", { waitUntil: "domcontentloaded" });
            expect(page.url()).toContain("/account/login");
        });

        await test.step("TC07: Verify login page shows after logout and accessing account | Expected: Login heading should be visible", async () => {
            await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
        });
    });
});
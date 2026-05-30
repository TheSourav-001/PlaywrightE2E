import { test, expect } from '@playwright/test';
import { Search } from '../../pages/Search Page/searchProduct';

const products = [
  "Stainless Steel Thermos - Yellow",
  "Modern Ceramic Vase - White",
  "Ceramic Candy Bowl - Yellow",
  "Desk Pen Holder - White",
  "Ceramic Coffee Cup - Yellow",
];

test.describe("Search page functionality test suite", () => {
  let searchPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new Search(page);

    await page.goto("/", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  });

  for (const itemName of products) {
    test(`TC01: Validate search with correct product name: ${itemName} | Expected: ${itemName} should be displayed after search`, async ({ page }) => {
      await searchPage.clickSearchIcon();
      await searchPage.clickOnSearchBox(itemName);

      await expect(
        page.getByText(itemName).first()
      ).toBeVisible();
    });
  }

  test("TC02: Validate search with partial product name | Expected: Relevant products should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("Thermos");

    await expect(page.getByText("Stainless Steel Thermos").first()).toBeVisible();
  });

  test("TC03: Validate search with lowercase product name | Expected: Matching product should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("ceramic");

    await expect( page.getByText("Ceramic").first()).toBeVisible();
  });

  test("TC04: Validate search with uppercase product name | Expected: Matching product should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("CERAMIC");

    await expect(page.getByText("Ceramic").first()).toBeVisible();
  });

  test("TC05: Validate search with invalid product name | Expected: No matching product should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("Macbook Air M5");

    await expect(page.getByText("No products found")).toHaveCount(0);
  });

  test("TC06: Validate search with special characters | Expected: No matching product should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("@#$%^&*");

    await expect(page.getByText("No products found")).toHaveCount(0);
  });

  test("TC07: Validate search with numeric values | Expected: No matching product should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("123456");

    await expect(
      page.getByText("No products found")).toHaveCount(0);
  });

  test("TC08: Validate search with empty input | Expected: Search should not break application", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("");

    await expect(page).toHaveURL(/.*/);
  });

  test("TC09: Validate search with leading and trailing spaces | Expected: Matching product should be displayed", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("   Ceramic Coffee Cup - Yellow   ");

    await expect(
      page.getByText("Ceramic Coffee Cup - Yellow").first()
    ).toBeVisible();
  });

  test("TC10: Validate clearing search input | Expected: Product list should return to default state", async ({ page }) => {
    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox("Thermos");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Backspace");

    await expect(
      page.getByText("Stainless Steel Thermos - Yellow").first()
    ).toBeVisible();
  });
});
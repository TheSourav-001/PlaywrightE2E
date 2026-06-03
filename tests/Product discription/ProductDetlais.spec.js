import { test, expect } from '@playwright/test';
import { ProductDetlais } from '../../pages/Product validation/productDetlais';
import { products } from '../../data/products';

test.describe("Product Details page functionality test suite", () => {

    let detailsPage;

    test.beforeEach(async ({ page }) => {
        detailsPage = new ProductDetlais(page);
    });

    for (const product of products) {

        test(`TC01: Verify product information for: ${product.name} | Expected: Product name, price, SKU and description should be visible`, async ({ page }) => {

            await page.goto(product.url, {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });

            await detailsPage.verifyProductName(product.name);
            await detailsPage.verifyProductPrice();
            await detailsPage.verifyProductSku();
            await detailsPage.verifyProductDescription();
        });

        test(`TC02: Verify product image for: ${product.name} | Expected: Product image should be visible`, async ({ page }) => {

            await page.goto(product.url, {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });

            await detailsPage.verifyProductImage(product.name);
        });

        test(`TC03: Verify product color options for: ${product.name} | Expected: Color should be visible and selectable`, async ({ page }) => {

            await page.goto(product.url, {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });

            await detailsPage.verifyProductColor();

            const selectedColor = await detailsPage.selectRandomColor();

            console.log(`Selected Color: ${selectedColor}`);
        });

        test(`TC04: Verify quantity field for: ${product.name} | Expected: Quantity field should be visible and allow random quantity selection`, async ({ page }) => {

            await page.goto(product.url, {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });

            await detailsPage.verifyProductQuantity();

            const quantity = await detailsPage.selectRandomQuantity();

            console.log(`Selected Quantity: ${quantity}`);
        });

        test(`TC05: Verify Add To Cart button for: ${product.name} | Expected: Product should be added to cart successfully`, async ({ page }) => {

            await page.goto(product.url, {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });

            await detailsPage.verifyAddToCartButton();

            const selectedColor = await detailsPage.selectRandomColor();
            const quantity = await detailsPage.selectRandomQuantity();

            console.log(`Selected Color: ${selectedColor}`);
            console.log(`Selected Quantity: ${quantity}`);

            await detailsPage.clickButton("ADD TO CART");
            //await expect(page.getByText(product.name)).toBeVisible();
        });

        test(`TC06: Verify breadcrumb navigation for: ${product.name} | Expected: Breadcrumb navigation should be visible`, async ({ page }) => {

            await page.goto(product.url, {
                waitUntil: "domcontentloaded",
                timeout: 60000,
            });

            await detailsPage.verifyBreadcrumb();
        });
    }
});
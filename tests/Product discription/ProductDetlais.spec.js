import { test } from '@playwright/test';
import { ProductDetlais } from '../../pages/Product validation/productDetlais';

const products = [
  {
    name: "Stainless Steel Thermos - Yellow",
    url: "/accessories/stainless-steel-thermos-yellow"
  },
  {
    name: "Modern Ceramic Vase - White",
    url: "/accessories/modern-ceramic-vase-white"
  },
  {
    name: "Ceramic Candy Bowl - Yellow",
    url: "/accessories/ceramic-candy-bowl-yellow"
  },
  {
    name: "Desk Pen Holder - White",
    url: "/accessories/desk-pen-holder-white"
  },
  {
    name: "Ceramic Coffee Cup - Yellow",
    url: "/accessories/ceramic-coffee-cup-yellow"
  }
];

test.describe("Product Details page functionality test suite", () => {

  let detailsPage;

  test.beforeEach(async ({ page }) => {
    detailsPage = new ProductDetlais(page);
  });

  for (const product of products) {

    test(
      `TC01: Verify product information for: ${product.name} | Expected: Product name, price, SKU and description should be visible`,
      async ({ page }) => {

        await page.goto(product.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await detailsPage.verifyProductName(product.name);
        await detailsPage.verifyProductPrice();
        await detailsPage.verifyProductSku();
        await detailsPage.verifyProductDescription();
      }
    );

    test(
      `TC02: Verify product image for: ${product.name} | Expected: Product image should be visible`,
      async ({ page }) => {

        await page.goto(product.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await detailsPage.verifyProductImage(product.name);
      }
    );

    test(
      `TC03: Verify product color options for: ${product.name} | Expected: Available color options should be visible`,
      async ({ page }) => {

        await page.goto(product.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await detailsPage.verifyProductColor();
      }
    );

    test(
      `TC04: Verify quantity field for: ${product.name} | Expected: Quantity field should be visible and default quantity should be 1`,
      async ({ page }) => {

        await page.goto(product.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await detailsPage.verifyProductQuantity();
      }
    );

    test(
      `TC05: Verify Add To Cart button for: ${product.name} | Expected: Add To Cart button should be visible and enabled`,
      async ({ page }) => {

        await page.goto(product.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await detailsPage.verifyAddToCartButton();
      }
    );

    test(
      `TC06: Verify breadcrumb navigation for: ${product.name} | Expected: Breadcrumb navigation should be visible`,
      async ({ page }) => {

        await page.goto(product.url, {
          waitUntil: "domcontentloaded",
          timeout: 60000,
        });

        await detailsPage.verifyBreadcrumb();
      }
    );

  }

});
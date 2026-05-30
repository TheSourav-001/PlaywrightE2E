import { BasePage } from "../basePage/basePage";
import { expect } from "@playwright/test";

export class ProductDetlais extends BasePage {
    constructor(page) {
        super(page);

        this.productName = page.locator('h1.product__single__name');
        this.productPrice = page.locator('.product__single__price');
        this.productSku = page.locator('li:has-text("SKU") span');
        this.productDescription = page.locator('.product__single__description');
        this.productColor = page.locator('.variant-option-list');
        this.productQuantity = page.locator('input[name="qty"]');
        this.addToCartButton = page.getByRole('button', {
            name: 'ADD TO CART'
        });

        this.breadcrumb = page.locator('nav[aria-label="breadcrumb"]');
    }

    async verifyProductName(expectedName) {
        await expect(this.productName)
            .toContainText(expectedName);
    }

    async verifyProductPrice() {
        await expect(this.productPrice)
            .toBeVisible();
    }

    async verifyProductSku() {
        await expect(this.productSku)
            .toBeVisible();
    }

    async verifyProductDescription() {
        await expect(this.productDescription)
            .toBeVisible();
    }

    async verifyProductImage(productName) {
        await expect(
            this.page.getByAltText(productName)
        ).toBeVisible();
    }

    async verifyProductColor() {
        await expect(this.productColor)
            .toBeVisible();
    }

    async verifyProductQuantity() {
        await expect(this.productQuantity)
            .toBeVisible();

        await expect(this.productQuantity)
            .toHaveValue('1');
    }

    async verifyAddToCartButton() {
        await expect(this.addToCartButton)
            .toBeVisible();

        await expect(this.addToCartButton)
            .toBeEnabled();
    }

    async verifyBreadcrumb() {
        await expect(this.breadcrumb)
            .toBeVisible();
    }

    async clickAddToCart() {
        await this.addToCartButton.click();
    }
}
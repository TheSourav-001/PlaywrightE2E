import { expect } from '@playwright/test';
import { BasePage } from "../basePage/basePage";

export class Addtocart extends BasePage {
    constructor(page) {
        super(page);

        this.pageTitleLocator = this.page.locator('.shopping-cart-title');
        this.productRowsLocator = this.page.locator('tbody tr');
        this.subTotalLocator = this.page.locator('.cart__total__summary');
        this.totalLocator = this.page.locator('.grand-total');
        this.checkoutButtonLocator = this.page.locator('button[title="CHECKOUT"]');
    }

    async verifyPageTitle() {
        await expect(this.pageTitleLocator).toBeVisible();
        await expect(this.pageTitleLocator).toHaveText('Shopping Cart');
    }

    async verifyProductNames() {
        const count = await this.productRowsLocator.count();

        for (let i = 0; i < count; i++) {
            const productNameLocator = this.productRowsLocator.nth(i).locator('.font-semibold.wrap-break-word');

            await expect(productNameLocator).toBeVisible();
        }
    }

    async verifyProductImages() {
        const count = await this.productRowsLocator.count();

        for (let i = 0; i < count; i++) {
            const productImageLocator = this.productRowsLocator.nth(i).locator('img');

            await expect(productImageLocator).toBeVisible();
        }
    }

    async verifyProductColors() {
        const count = await this.productRowsLocator.count();

        for (let i = 0; i < count; i++) {
            const productColorLocator = this.productRowsLocator.nth(i).locator('span.text-muted-foreground').first();

            await expect(productColorLocator).toBeVisible();
        }
    }

    async verifyProductQuantity() {
        const count = await this.productRowsLocator.count();

        for (let i = 0; i < count; i++) {
            const quantityLocator = this.productRowsLocator.nth(i).locator('td:nth-child(2) span.min-w-12');

            await expect(quantityLocator).toBeVisible();
        }
    }

    async verifyRemoveButtons() {
        const count = await this.productRowsLocator.count();

        for (let i = 0; i < count; i++) {
            const removeButtonLocator = this.productRowsLocator.nth(i).getByText('Remove');

            await expect(removeButtonLocator).toBeVisible();
        }
    }

    async verifySubTotalVisible() {
        await expect(this.subTotalLocator).toBeVisible();
    }

    async verifyTotalVisible() {
        await expect(this.totalLocator).toBeVisible();
    }

    async verifyCheckoutButton() {
        await expect(this.checkoutButtonLocator).toBeVisible();
        await expect(this.checkoutButtonLocator).toBeEnabled();
    }

    async verifyPriceCalculation() {
        const count = await this.productRowsLocator.count();

        for (let i = 0; i < count; i++) {
            const rowLocator = this.productRowsLocator.nth(i);

            const priceQuantityText = await rowLocator.locator('.text-sm.text-muted-foreground').textContent();
            const totalPriceText = await rowLocator.locator('td:last-child .font-bold').textContent();

            const unitPrice = Number(priceQuantityText.match(/\$(\d+(\.\d+)?)/)[1]);
            const quantity = Number(priceQuantityText.match(/x\s*(\d+)/)[1]);
            const displayedTotal = Number(totalPriceText.replace('$', ''));

            expect(displayedTotal).toBe(unitPrice * quantity);
        }
    }

    async verifyProductName(expectedProductName) {
        await expect(this.page.getByText(expectedProductName)).toBeVisible();
    }

    async verifyCartPage() {
        await this.verifyPageTitle();
        await this.verifyProductNames();
        await this.verifyProductImages();
        await this.verifyProductColors();
        await this.verifyProductQuantity();
        await this.verifyRemoveButtons();
        await this.verifySubTotalVisible();
        await this.verifyTotalVisible();
        await this.verifyCheckoutButton();
        await this.verifyPriceCalculation();
    }
     async verifyCartNotEmpty() {
    await expect(this.productRowsLocator.first()).toBeVisible();
}

async verifyProductQuantityValue(expectedQuantity) {
    const quantityLocator = this.productRowsLocator.first().locator('td:nth-child(2) span.min-w-12');

    await expect(quantityLocator).toHaveText(expectedQuantity.toString());
}

async removeFirstProduct() {
    await this.productRowsLocator.first().getByText('Remove').click();
}

async verifyCheckoutNavigation() {
    await this.clickButton("CHECKOUT");

    await expect(this.page).toHaveURL(/checkout/);
}

async verifyCartPersistence() {
    await this.page.reload();

    await expect(this.productRowsLocator.first()).toBeVisible();
 }
}
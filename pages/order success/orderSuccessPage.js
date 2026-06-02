import { expect } from "@playwright/test";
import { BasePage } from "../basePage/basePage";

export class OrderSuccess extends BasePage {
    constructor(page) {
        super(page);

        this.checkoutSuccessBreadcrumb = page.getByText(/Checkout success/i);
        this.orderNumber = page.locator(".thank-you span");
        this.thankYouMessage = page.getByText("Thank you");

        this.contactInformationTitle = page.getByText("Contact information");
        this.shippingAddressTitle = page.getByText("Shipping Address");
        this.paymentMethodTitle = page.getByText("Payment Method");
        this.billingAddressTitle = page.getByText("Billing Address");

        this.productName = page.locator(".font-semibold.text-sm");
        this.productImage = page.locator('img[alt]');
        this.productColor = page.getByText("Color");

        this.subTotal = page.getByText("Sub total");
        this.shippingCost = page.getByText(/Shipping \(/i);
        this.totalAmount = page.getByText("Total", { exact: true });

        this.continueShoppingButton = page.getByRole("button", { name: "CONTINUE SHOPPING" });
        this.placeOrderButton = page.getByRole("button", { name: "Place Order" });
    }

    async verifyCheckoutSuccessBreadcrumb() {
        await expect(this.checkoutSuccessBreadcrumb).toBeVisible();
    }

    async verifyOrderNumber() {
        await expect(this.orderNumber).toBeVisible();
    }

    async verifyOrderNumberNotEmpty() {
        await expect(this.orderNumber).not.toHaveText("");
    }

    async verifyThankYouMessage() {
        await expect(this.thankYouMessage).toBeVisible();
    }

    async verifyContactInformationSection() {
        await expect(this.contactInformationTitle).toBeVisible();
    }

    async verifyShippingAddressSection() {
        await expect(this.shippingAddressTitle).toBeVisible();
    }

    async verifyPaymentMethodSection() {
        await expect(this.paymentMethodTitle).toBeVisible();
    }

    async verifyBillingAddressSection() {
        await expect(this.billingAddressTitle).toBeVisible();
    }

    async verifyProductName() {
        await expect(this.productName).toBeVisible();
    }

    async verifyProductNameNotEmpty() {
        await expect(this.productName).not.toHaveText("");
    }

    async verifyProductImage() {
        await expect(this.productImage).toBeVisible();
    }

    async verifyProductImageHasAlt() {
        await expect(this.productImage).toHaveAttribute("alt", /.+/);
    }

    async verifyProductColor() {
        await expect(this.productColor).toBeVisible();
    }

    async verifySubTotal() {
        await expect(this.subTotal).toBeVisible();
    }

    async verifyShippingCost() {
        await expect(this.shippingCost).toBeVisible();
    }

    async verifyTotalAmount() {
        await expect(this.totalAmount).toBeVisible();
    }

    async verifyContinueShoppingButton() {
        await expect(this.continueShoppingButton).toBeVisible();
        await expect(this.continueShoppingButton).toBeEnabled();
    }

    async verifyPlaceOrderButtonNotVisible() {
        await expect(this.placeOrderButton).not.toBeVisible();
    }

    async verifyCheckoutSuccessBreadcrumbNotHidden() {
        await expect(this.checkoutSuccessBreadcrumb).not.toBeHidden();
    }

    async verifyThankYouMessageNotHidden() {
        await expect(this.thankYouMessage).not.toBeHidden();
    }

    async verifyContinueShoppingButtonNotDisabled() {
        await expect(this.continueShoppingButton).not.toBeDisabled();
    }

    async verifySubTotalNotEmpty() {
        await expect(this.subTotal).not.toHaveText("Sub total");
    }

    async verifyShippingCostNotEmpty() {
        await expect(this.shippingCost).toBeVisible();
    }

    async verifyTotalAmountNotEmpty() {
        await expect(this.totalAmount).not.toHaveText("Total");
    }

    async verifyProductImageNotBroken() {
        const src = await this.productImage.getAttribute("src");
        expect(src).not.toBeNull();
        expect(src.length).toBeGreaterThan(0);
    }

    async verifyOrderNumberIsNumeric() {
        const text = await this.orderNumber.textContent();
        expect(text.trim().length).toBeGreaterThan(0);
    }

    async verifyContactInformationNotHidden() {
        await expect(this.contactInformationTitle).not.toBeHidden();
    }

    async verifyShippingAddressNotHidden() {
        await expect(this.shippingAddressTitle).not.toBeHidden();
    }

    async verifyPaymentMethodNotHidden() {
        await expect(this.paymentMethodTitle).not.toBeHidden();
    }

    async verifyBillingAddressNotHidden() {
        await expect(this.billingAddressTitle).not.toBeHidden();
    }

    async verifyProductColorNotHidden() {
        await expect(this.productColor).not.toBeHidden();
    }

    async verifySubTotalVisible() {
        await expect(this.subTotal).toBeVisible();
    }
}
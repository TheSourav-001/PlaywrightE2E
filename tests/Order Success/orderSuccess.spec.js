import { test, expect } from "@playwright/test";
import { Checkout } from "../../pages/Checkout/checkout";
import { OrderSuccess } from "../../pages/order success/orderSuccessPage";
import { checkoutData } from "../../data/checkoutData";

test.describe("Order Success page functionality test suite", () => {

    test("Complete Order Success Page Validation Flow", async ({ page }) => {

        const checkoutPage = new Checkout(page);
        const orderSuccessPage = new OrderSuccess(page);
        
        await test.step("Setup: Fill checkout form and place order", async () => {
            await page.goto("/checkout", { waitUntil: "domcontentloaded", timeout: 60000 });

            await checkoutPage.fillShippingAddress(
                checkoutData.fullName,
                checkoutData.telephone,
                checkoutData.address,
                checkoutData.address2,
                checkoutData.city,
                checkoutData.postcode
            );
            await checkoutPage.selectCountry(checkoutData.country);
            await checkoutPage.selectProvince(checkoutData.province);
            await checkoutPage.selectSameBillingAddress();
            await checkoutPage.selectBasicShippingMethod();
            await page.waitForTimeout(3000);
            await checkoutPage.selectCashOnDelivery();
            await checkoutPage.clickButton("Place Order");

            await page.waitForURL("**/checkout/success**", { timeout: 30000 });
            await page.waitForLoadState("domcontentloaded");
        });

        await test.step("TC01: Verify checkout success breadcrumb | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyCheckoutSuccessBreadcrumb();
        });

        await test.step("TC02: Verify order number | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyOrderNumber();
        });

        await test.step("TC03: Verify thank you message | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyThankYouMessage();
        });

        await test.step("TC04: Verify contact information section | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyContactInformationSection();
        });

        await test.step("TC05: Verify shipping address section | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyShippingAddressSection();
        });

        await test.step("TC06: Verify payment method section | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyPaymentMethodSection();
        });

        await test.step("TC07: Verify billing address section | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyBillingAddressSection();
        });

        await test.step("TC08: Verify product name | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyProductName();
        });

        await test.step("TC09: Verify product image | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyProductImage();
        });

        await test.step("TC10: Verify product color | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyProductColor();
        });

        await test.step("TC11: Verify subtotal amount | Expected: Should be visible", async () => {
            await orderSuccessPage.verifySubTotal();
        });

        await test.step("TC12: Verify shipping cost | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyShippingCost();
        });

        await test.step("TC13: Verify total amount | Expected: Should be visible", async () => {
            await orderSuccessPage.verifyTotalAmount();
        });

        await test.step("TC14: Verify continue shopping button | Expected: Should be visible and enabled", async () => {
            await orderSuccessPage.verifyContinueShoppingButton();
        });

        // ✅ Negative TCs
        await test.step("TC15: Verify place order button not visible | Expected: Should not appear on success page", async () => {
            await orderSuccessPage.verifyPlaceOrderButtonNotVisible();
        });

        await test.step("TC16: Verify breadcrumb is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyCheckoutSuccessBreadcrumbNotHidden();
        });

        await test.step("TC17: Verify thank you message is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyThankYouMessageNotHidden();
        });

        await test.step("TC18: Verify continue shopping button is not disabled | Expected: Should not be disabled", async () => {
            await orderSuccessPage.verifyContinueShoppingButtonNotDisabled();
        });

        await test.step("TC19: Verify order number is not empty | Expected: Should contain a value", async () => {
            await orderSuccessPage.verifyOrderNumberIsNumeric();
        });

        await test.step("TC20: Verify product name is not empty | Expected: Should contain product name text", async () => {
            await orderSuccessPage.verifyProductNameNotEmpty();
        });

        await test.step("TC21: Verify product image has alt attribute | Expected: Alt attribute should not be empty", async () => {
            await orderSuccessPage.verifyProductImageHasAlt();
        });

        await test.step("TC22: Verify product image src is not broken | Expected: Image src should exist", async () => {
            await orderSuccessPage.verifyProductImageNotBroken();
        });

        await test.step("TC23: Verify contact information is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyContactInformationNotHidden();
        });

        await test.step("TC24: Verify shipping address is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyShippingAddressNotHidden();
        });

        await test.step("TC25: Verify payment method is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyPaymentMethodNotHidden();
        });

        await test.step("TC26: Verify billing address is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyBillingAddressNotHidden();
        });

        await test.step("TC27: Verify product color is not hidden | Expected: Should not be hidden", async () => {
            await orderSuccessPage.verifyProductColorNotHidden();
        });

        await test.step("TC28: Verify subtotal label is visible | Expected: Sub total label should be visible", async () => {
            await orderSuccessPage.verifySubTotalVisible();
        });

        await test.step("TC29: Verify shipping cost label is visible | Expected: Shipping cost should be visible", async () => {
            await orderSuccessPage.verifyShippingCostNotEmpty();
        });

        await test.step("TC30: Verify total amount label is visible | Expected: Total label should be visible", async () => {
            await orderSuccessPage.verifyTotalAmount();
        });
    });
});
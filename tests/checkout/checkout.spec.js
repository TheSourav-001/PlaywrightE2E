import { test, expect } from "@playwright/test";
import { Checkout } from "../../pages/Checkout/checkout";
import { checkoutData } from "../../data/checkoutData";

test.describe("Checkout page functionality test suite", () => {

    let checkoutPage;

    test.beforeEach(async ({ page }) => {
        checkoutPage = new Checkout(page);

        await page.goto("/checkout", {
            waitUntil: "domcontentloaded",
            timeout: 60000,
        });
    });

    test("TC01: Verify checkout page loaded | Expected: Checkout page should load successfully", async () => {
        await checkoutPage.verifyCheckoutPageLoaded();
    });

    test("TC02: Verify contact information section | Expected: Contact information section should be visible", async () => {
        await checkoutPage.verifyContactInformation();
    });

    test("TC03: Verify shipping address fields | Expected: All shipping address fields should be visible", async () => {
        await checkoutPage.verifyShippingAddressFields();
    });

    test("TC04: Verify shipping address form input | Expected: User should be able to enter shipping information", async () => {

        await checkoutPage.fillShippingAddress(
            checkoutData.fullName,
            checkoutData.telephone,
            checkoutData.address,
            checkoutData.address2,
            checkoutData.city,
            checkoutData.postcode
        );

        await expect(checkoutPage.fullNameInput).toHaveValue(checkoutData.fullName);
        await expect(checkoutPage.telephoneInput).toHaveValue(checkoutData.telephone);
        await expect(checkoutPage.addressInput).toHaveValue(checkoutData.address);
        await expect(checkoutPage.address2Input).toHaveValue(checkoutData.address2);
        await expect(checkoutPage.cityInput).toHaveValue(checkoutData.city);
        await expect(checkoutPage.postCodeInput).toHaveValue(checkoutData.postcode);
    });

   test("TC05: Verify country selection | Expected: User should be able to select country", async () => {

    await checkoutPage.selectCountry(checkoutData.country);

    await expect(checkoutPage.countryDropdown)
        .toContainText(checkoutData.country);
});

    test("TC06: Verify province selection | Expected: User should be able to select province", async () => {

    await checkoutPage.selectCountry(checkoutData.country);

    await checkoutPage.selectProvince(checkoutData.province);

    await expect(checkoutPage.provinceDropdown)
        .toContainText(checkoutData.province);
});

    test("TC07: Verify same billing address selection | Expected: Same billing address option should be selectable", async () => {

        await checkoutPage.selectSameBillingAddress();

        await expect(checkoutPage.sameAddressRadio).toBeVisible();
    });

    test("TC08: Verify different billing address selection | Expected: Different billing address option should be selectable", async () => {

        await checkoutPage.selectDifferentBillingAddress();

        await expect(checkoutPage.differentAddressRadio).toBeVisible();
    });

    test("TC09: Verify Cash On Delivery payment method | Expected: Cash On Delivery option should be selectable", async () => {

        await checkoutPage.selectCashOnDelivery();

        await expect(checkoutPage.cashOnDeliveryRadio).toBeVisible();
    });

    test("TC10: Verify Paypal payment method | Expected: Paypal option should be selectable", async () => {

        await checkoutPage.selectPaypal();

        await expect(checkoutPage.paypalRadio).toBeVisible();
    });

    test("TC11: Verify Credit Card payment method | Expected: Credit Card option should be selectable", async () => {

        await checkoutPage.selectCreditCard();

        await expect(checkoutPage.creditCardRadio).toBeVisible();
    });

    test("TC12: Verify complete checkout flow | Expected: User should be able to complete checkout form", async () => {

        await checkoutPage.verifyCheckoutPageLoaded();

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
        await checkoutPage.selectCashOnDelivery();

        await expect(checkoutPage.fullNameInput).toHaveValue(checkoutData.fullName);
    });

    test("TC13: Verify logout button visibility | Expected: Logout button should be visible", async () => {
        await checkoutPage.verifyLogoutButton();
    });

    test("TC14: Verify shipping address section | Expected: Shipping address section should be visible", async () => {
        await checkoutPage.verifyShippingAddressTitle();
    });

    test("TC15: Verify shipping method section | Expected: Shipping method section should be visible", async () => {
        await checkoutPage.verifyShippingMethodSection();
    });

    test("TC16: Verify billing address section | Expected: Billing address section should be visible", async () => {
        await checkoutPage.verifyBillingAddressSection();
    });

    test("TC17: Verify payment information section | Expected: Payment information section should be visible", async () => {
        await checkoutPage.verifyPaymentInformationSection();
    });

});
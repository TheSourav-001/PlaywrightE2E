import { expect } from "@playwright/test";
import { BasePage } from "../basePage/basePage";

export class Checkout extends BasePage {
    constructor(page) {
        super(page);

        this.contactInformationTitle = page.getByText("Contact Information");
        this.logoutButton = page.getByRole("button", { name: "Logout" });

        this.shippingAddressTitle = page.getByText("Shipping Address", { exact: true });

        this.fullNameInput = page.locator('#field-shippingAddress\\.full_name');
        this.telephoneInput = page.locator('#field-shippingAddress\\.telephone');
        this.addressInput = page.locator('#field-shippingAddress\\.address_1');
        this.address2Input = page.locator('#field-shippingAddress\\.address_2');
        this.cityInput = page.locator('#field-shippingAddress\\.city');
        this.countryDropdown = page.locator('#field-shippingAddress\\.country');
        this.provinceDropdown = page.locator('#field-shippingAddress\\.province');
        this.postCodeInput = page.locator('#field-shippingAddress\\.postcode');

        this.shippingMethodTitle = page.getByText("Shipping Method", { exact: true });

        this.billingAddressTitle = page.getByText("Billing Address", { exact: true });

        this.sameAddressRadio = page.getByText("Same as shipping address", { exact: true });
        this.differentAddressRadio = page.getByText("Use a different billing address");

        this.paymentInformationTitle = page.getByText("Payment Information", { exact: true });

        this.cashOnDeliveryRadio = page.getByText("Cash On Delivery", { exact: true });
        this.paypalRadio = page.getByText("Paypal", { exact: true });
        this.creditCardRadio = page.getByText("Credit Card", { exact: true });

        this.basicShippingMethod = page
            .locator('label[for^="shipping-method"]')
            .filter({ hasText: 'Basic' });

        this.expressShippingMethod = page
            .locator('label[for^="shipping-method"]')
            .filter({ hasText: 'Express' });
    }

    async verifyCheckoutPageLoaded() {
        await expect(this.contactInformationTitle).toBeVisible();
        await expect(this.shippingAddressTitle).toBeVisible();
        await expect(this.billingAddressTitle).toBeVisible();
        await expect(this.paymentInformationTitle).toBeVisible();
    }

    async verifyContactInformation() {
        await expect(this.contactInformationTitle).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
    }

    async fillShippingAddress(fullName, telephone, address, address2, city, postcode) {
        await this.fullNameInput.fill(fullName);
        await this.telephoneInput.fill(telephone);
        await this.addressInput.fill(address);
        await this.address2Input.fill(address2);
        await this.cityInput.fill(city);
        await this.postCodeInput.fill(postcode);
    }

    async selectCountry(country) {
        await this.countryDropdown.click();
        await this.page.getByRole("option", { name: country }).click();
    }

    async selectProvince(province) {
        await this.selectCountry("United States");
        await this.provinceDropdown.click();
        await this.page
            .getByRole("option", { name: province, exact: true })
            .click();
    }

    async selectSameBillingAddress() {
        await this.sameAddressRadio.click();
    }

    async selectDifferentBillingAddress() {
        await this.differentAddressRadio.click();
    }

    async selectCashOnDelivery() {
        await this.cashOnDeliveryRadio.click();
    }

    async selectPaypal() {
        await this.paypalRadio.click();
    }

    async selectCreditCard() {
        await this.creditCardRadio.click();
    }

    async verifyShippingAddressFields() {
        await expect(this.fullNameInput).toBeVisible();
        await expect(this.telephoneInput).toBeVisible();
        await expect(this.addressInput).toBeVisible();
        await expect(this.address2Input).toBeVisible();
        await expect(this.cityInput).toBeVisible();
        await expect(this.countryDropdown).toBeVisible();
        await expect(this.provinceDropdown).toBeVisible();
        await expect(this.postCodeInput).toBeVisible();
    }

    async verifyLogoutButton() {
        await expect(this.logoutButton).toBeVisible();
    }

    async verifyShippingAddressTitle() {
        await expect(this.shippingAddressTitle).toBeVisible();
    }

    async verifyShippingMethodSection() {
        await expect(this.shippingMethodTitle).toBeVisible();
    }

    async verifyBillingAddressSection() {
        await expect(this.billingAddressTitle).toBeVisible();
    }

    async verifyPaymentInformationSection() {
        await expect(this.paymentInformationTitle).toBeVisible();
    }

    async selectBasicShippingMethod() {
        await this.basicShippingMethod.click();
        await this.page
            .getByText('Please select a shipping method')
            .waitFor({ state: 'hidden', timeout: 5000 });
    }

    async selectExpressShippingMethod() {
        await this.expressShippingMethod.click();
        await this.page
            .getByText('Please select a shipping method')
            .waitFor({ state: 'hidden', timeout: 5000 });
    }

    async clickButton(name) {
        await this.page.getByRole("button", { name }).click();
    }
}
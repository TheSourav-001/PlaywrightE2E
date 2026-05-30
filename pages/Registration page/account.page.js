import {BasePage} from "./basePage";

export class Account extends BasePage {
    constructor(page) {
        super(page);

        this.accountIconLocator = this.page.locator('a[href="/account/login"]');
        this.accountLinkLocator = this.page.getByRole("link", { name: "Create an account" });
        this.fullnameInputLocator =  this.page.locator('#field-full_name');
        this.emailInputLocator = this.page.locator('#field-email');
        this.passwordInputLocator = this.page.locator('#field-password');
        this.clickOnEyeIconLocator = page.locator('button:has(.lucide-eye-closed)');
    }

    async clickOnAccountIcon() {
        await this.accountIconLocator.click();
    }
    async enterFullname(fullname) {
        await this.fullnameInputLocator.fill(fullname);
    }
    async enterEmailInput(email) {
        await this.emailInputLocator.fill(email);
    }
    async enterPasswordInput(password) {
        await this.passwordInputLocator.fill(password);
    }
    async clickOnEyeIcon() {
        await this.clickOnEyeIconLocator.click();
    }
}
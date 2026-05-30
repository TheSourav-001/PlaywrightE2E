import { BasePage } from "./basePage";

export class Login extends BasePage {
    constructor(page) {
        super(page);
        
        this.emailInputLocator = this.page.locator('#field-email');
        this.passwordInputLocator = this.page.locator('#field-password');
    }
    async enterEmailInput(email) {
        await this.emailInputLocator.fill(email);
    }
    async enterPasswordInput(password) {
        await this.passwordInputLocator.fill(password);
    }
}
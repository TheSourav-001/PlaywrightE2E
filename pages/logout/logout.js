import { BasePage } from "../basePage/basePage";

export class Logout extends BasePage {
    constructor(page) {
        super(page);

        this.accountIconLocator = this.page.locator('a[href="/account/login"]');
        this.logoutButton = this.page.getByRole("link", { name: "Logout" });
    }
    async clickOnAccountIcon() {
        await this.accountIconLocator.click();
    }

    async clickOnLogoutButton() {
        await this.logoutButton.click();
    }
}
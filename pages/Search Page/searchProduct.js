import { BasePage } from "../basePage/basePage";

export class Search extends BasePage{
    constructor (page){
        super(page);

        this.clickOnSearchIcon = this.page.locator("//a[@class='search__icon']");
        this.SearchBox = this.page.getByRole('textbox', { name: 'Search' });
    }
    async clickSearchIcon(){
        await this.clickOnSearchIcon.click();
    }
    async clickOnSearchBox(product){
        await this.SearchBox.fill(product);
        await this.SearchBox.press('Enter');
    }
}
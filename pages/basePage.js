export class BasePage{
   constructor (page){
    this.page = page;
   }
   buttonLocator (button){
    return this.page.getByRole("button", { name: button });
   }

   async clickButton (button){
     await this.buttonLocator(button).click();
   }
}
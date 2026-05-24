import {expect, Page} from "@playwright/test";

export class HomePage{
    constructor(public page: Page){}


public LOGINBUTT= "xpath=//a[@class='ico-login']";


async clickLoginButton(){
     await this.page.waitForTimeout(5000);
    await this.page.click(this.LOGINBUTT);
};
}

import{expect,Page} from '@playwright/test';

export class SauceLoginPage{
    constructor(private page:Page){}


private USERNAME = "#user-name";
private PASSWORD = "#password";
private LOGINBTN = "#login-button";
private HOMEPGLABEL = "xpath=//div[text()='Swag Labs']"


async enterCredentials(){
    await this.page.fill(this.USERNAME,'standard_user');
    await this.page.fill(this.PASSWORD,'secret_sauce');
}

async clickLoginBtn(){
    await this.page.click(this.LOGINBTN);
}

async headerIsVisible(){
    const label = this.page.locator(this.HOMEPGLABEL);
    expect(label).toBeVisible();
    const txt = await label.textContent();
    console.log('HEADER IS '+txt);
}














}
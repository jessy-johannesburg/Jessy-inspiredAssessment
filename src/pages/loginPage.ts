import {expect, Page} from "@playwright/test";

export class LoginPage{
    constructor(public page: Page){}

public EMAIL= "input#Email";
public PASSWORD= "input#Password";
public LOGINBUTT= "xpath=//*[@class='button-1 login-button']";


async enterEmail(){
    await this.page.fill(this.EMAIL, 'jessytalasani@gmail.com');
}       

async enterPassword(){
    await this.page.fill(this.PASSWORD, 'Midrand@1');
}       

async clickLoginButton(){
    await this.page.click(this.LOGINBUTT);
}   
}
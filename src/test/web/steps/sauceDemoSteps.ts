import { Given,When,Then } from "@cucumber/cucumber";
import { SauceLoginPage } from "../../../pages/sauceLoginPage";
import { ENV } from "../../../config/env"


let sauceLoginPage : SauceLoginPage

Given('I am on Sauce Demo Login page',async function(){
    sauceLoginPage = new SauceLoginPage(this.page);
   await this.page.goto(ENV.SAUCEDEMO_BASE_URL);
})

When('I enter username and password', async function () {
  await sauceLoginPage.enterCredentials();
})

Then('I click on Login btn', async function() {
    await this.page.waitForTimeout(3000);
  await sauceLoginPage.clickLoginBtn();
})

Then('I should be navigating to homePage', async function() {
  await sauceLoginPage.headerIsVisible();
})




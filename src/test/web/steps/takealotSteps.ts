import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { RegisterPage } from '../../../pages/registerPage';

let registerPage: RegisterPage;

Given('I am on the takealot landing page', async function () {
    registerPage = new RegisterPage(this.page);
    await this.page.goto('https://www.takealot.com/');
});

When('I click on the Register button', async function () { 
    await registerPage.clickRegisterButton();
});

Then('I should be navigated to the register page', async function () {
    await registerPage.verifyRegisterPage
});

When('I fill in the registration form with valid details', async function () {
    await registerPage.enterFirstName();
    await registerPage.enterLastName();     
    await registerPage.enterEmail();

    await registerPage.enterPassword();     
    await registerPage.enterPhoneNo();
    await registerPage.clickContinueButton();
}); 

Then('I should see a confirmation message indicating successful registration', async function () {
      await expect(this.page.locator('.success-message')).toBeVisible();
      await expect(this.page.locator('.success-message')).toContainText('Registration successful');
});
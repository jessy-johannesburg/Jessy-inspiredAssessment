import{ Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';     
import { HomePage } from '../../../pages/homePage'; 
import { LoginPage } from '../../../pages/loginPage';
import { ProdPage } from '../../../pages/prodPage';

let homePage: HomePage;
let loginPage: LoginPage;
let prodPage: ProdPage;

Given('I am on the demo webshop login page',async function()  {
    homePage= new HomePage(this.page);
    loginPage= new LoginPage(this.page);
    prodPage= new ProdPage(this.page);
   await this.page.goto('https://demowebshop.tricentis.com/');
})

Then('I should be navigated to home page', () => {
  
})

When('I login with valid credentials', async function() {
    await loginPage.enterEmail();
    await loginPage.enterPassword();
    await loginPage.clickLoginButton();
})

Then('I should be navigated to desktop category page', () => {
  
})

When('I select the cheapest product and add it to cart', () => {
  // Write code here that turns the phrase above into concrete actions
})


When('I accept terms and conditions and proceed to checkout', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('I accept t&amp;c and proceed to checkout', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('I should be navigated to checkout page', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('I should be navigated to checkout page', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('I select cod payment method and confirm the order', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('I should capture the order number', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('I accept t&amp;c and proceed to checkout', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('the product should be added to cart successfully', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('I accept t&amp;c and proceed to checkout', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('I click on Login button', async function() {
   await homePage.clickLoginButton();
})

When('I click on desktop category', async function() {
  await prodPage.clickDesktopCategory();
})

When('I select computers menu', async function() {
  await prodPage.clickComputerMenu();
})

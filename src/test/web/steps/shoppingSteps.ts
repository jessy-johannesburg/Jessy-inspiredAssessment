import{ Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../../pages/homePage';
import { LoginPage } from '../../../pages/loginPage';
import { ProdPage } from '../../../pages/prodPage';
import { CheckoutPage } from '../../../pages/checkoutPage';

let homePage: HomePage;
let loginPage: LoginPage;
let prodPage: ProdPage;
let checkoutPage: CheckoutPage;

let orderNumber: string;


// ======================================================
// Launch Application
// ======================================================

Given('I am on the demo webshop login page', async function () {

    homePage = new HomePage(this.page);
    loginPage = new LoginPage(this.page);
    prodPage = new ProdPage(this.page);
    checkoutPage = new CheckoutPage(this.page);

    await this.page.goto('https://demowebshop.tricentis.com/');
});


// ======================================================
// Login Steps
// ======================================================

When('I click on Login button', async function () {

    await homePage.clickLoginButton();
});

When('I login with valid credentials', async function () {

    await loginPage.enterEmail();

    await loginPage.enterPassword();

    await loginPage.clickLoginButton();
});


// ======================================================
// Product Selection Steps
// ======================================================

When('I select computers menu', async function () {

    await prodPage.clickComputerMenu();
});

When('I click on desktop category', async function () {

    await prodPage.clickDesktopCategory();
});

Then('I should be navigated to desktop category page', async function () {

    await prodPage.verifyDesktopPage();
});

When('I select the cheapest product', async function () {
    await prodPage.clickCheapestDesktop();
});

When('I click on add to cart button', async function () {
    await prodPage.clickAddToCart();
});

Then('the product should be added to cart successfully', async function () {

    await prodPage.verifyProductAddedToCart();
});


// ======================================================
// Checkout Steps
// ======================================================

When('I accept terms and conditions and proceed to checkout', async function () {

    await checkoutPage.proceedToCheckout();
});

Then('I should be navigated to checkout page', async function () {

    await checkoutPage.verifyCheckoutPage();
});


// ======================================================
// Billing Details Steps
// ======================================================

When(
    'I fill in the billing details and continue to shipping method',
    async function () {

        // await checkoutPage.selectCountry();

        // await checkoutPage.enterCity('Pretoria');

        // await checkoutPage.enterAddress('123 Main Street');

        // await checkoutPage.enterZipCode('0001');

        // await checkoutPage.enterPhoneNumber('9876543210');

        await checkoutPage.clickBillingContinue();

        // await checkoutPage.continueShippingAddress();
    }
);

Then('I should be navigated to shipping method page', async function () {
   await checkoutPage.continueShippingAddress();
});


// ======================================================
// Shipping Method Steps
// ======================================================

When(
    'I select the default shipping method and continue to payment method',
    async function () {

        await checkoutPage.continueShippingMethod();
    }
);

Then('I should be navigated to payment method page', async function () {

    await expect(
        this.page.locator('#checkout-step-payment-method')
    ).toBeVisible();
});


// ======================================================
// Payment Steps
// ======================================================

When('I verify cod payment method and confirm the order', async function () {

    await checkoutPage.selectCashOnDelivery();

    await checkoutPage.continuePaymentMethod();

    await checkoutPage.continuePaymentInfo();

    await checkoutPage.clickConfirmOrder();

    await checkoutPage.verifyOrderSuccess();
});


// ======================================================
// Order Number Steps
// ======================================================

Then('I should capture the order number', async function () {

    orderNumber = await checkoutPage.captureOrderNumber();

    console.log(`Order Number: ${orderNumber}`);

    expect(orderNumber).not.toBe('');
});
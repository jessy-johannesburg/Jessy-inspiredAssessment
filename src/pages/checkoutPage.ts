import { expect, Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

     private countryDropdown = '//select[@name="BillingNewAddress.CountryId"]';
     private cityTxt = '#BillingNewAddress_City';
    private addressTxt = '#BillingNewAddress_Address1';
    private zipTxt = '#BillingNewAddress_ZipPostalCode';
    private phoneTxt = '#BillingNewAddress_PhoneNumber';

    private billingContinueBtn =
        "xpath=//div[@id='billing-buttons-container']";

    private shippingAddressContinueBtn =
        "xpath=(//input[@class='button-1 new-address-next-step-button'])[2]";

    private shippingMethodContinueBtn =
        "xpath=//input[@class='button-1 shipping-method-next-step-button']";

    private paymentMethodContinueBtn =
        "xpath=//input[@class='button-1 payment-method-next-step-button']";

    private paymentInfoContinueBtn =
        "xpath=//input[@class='button-1 payment-info-next-step-button']";

    private confirmOrderBtn =
        "xpath=//input[@class='button-1 confirm-order-next-step-button']";

    private codRadioBtn = '#paymentmethod_0';

    async proceedToCheckout() {

        await this.page.click('#topcartlink');

        await this.page.check('#termsofservice');

        await this.page.click('#checkout');
    }

    async verifyCheckoutPage() {

        await expect(this.page).toHaveURL(/onepagecheckout/);
    }

    // =========================
    // Billing Details Functions
    // =========================

    async selectCountry() {

        await this.page.selectOption(
    this.countryDropdown,
    { label: 'South Africa' }
);
    }

    async enterCity(city: string) {

        await this.page.fill(
            this.cityTxt,
            city
        );
    }

    async enterAddress(address: string) {

        await this.page.fill(
            this.addressTxt,
            address
        );
    }

    async enterZipCode(zipCode: string) {

        await this.page.fill(
            this.zipTxt,
            zipCode
        );
    }

    async enterPhoneNumber(phone: string) {

        await this.page.fill(
            this.phoneTxt,
            phone
        );
    }

   async clickBillingContinue() {

    await this.page.locator(
        '#billing-buttons-container input.button-1'
    ).click();
}

    // =========================
    // Payment Functions
    // =========================

    async continueShippingAddress() {

        await this.page.click(
            this.shippingAddressContinueBtn
        );
    }

    async continueShippingMethod() {

        await this.page.click(
            this.shippingMethodContinueBtn
        );
    }

    async selectCashOnDelivery() {

        await this.page.check(
            this.codRadioBtn
        );
    }

    async continuePaymentMethod() {

        await this.page.click(
            this.paymentMethodContinueBtn
        );
    }

    async continuePaymentInfo() {

        await this.page.click(
            this.paymentInfoContinueBtn
        );
    }

    async clickConfirmOrder() {

        await this.page.click(
            this.confirmOrderBtn
        );
    }

    async verifyOrderSuccess() {

    await expect(this.page.locator('.section.order-completed .title')).toContainText(
        'Your order has been successfully processed!'
    );
    }

    async captureOrderNumber(): Promise<string> {

        const orderDetails = await this.page
            .locator('.details')
            .textContent();

        const orderNumber =
            orderDetails?.match(/\d+/)?.[0] || '';

        return orderNumber;
    }
}
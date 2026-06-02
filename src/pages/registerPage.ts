import { Page, expect } from '@playwright/test';

export class RegisterPage {
    constructor(public page: Page){}

    public REGISTERBUTT = "xpath=//a[contains(text(),'Register')]";
    public REGISTERPAGEHEADER = "xpath=//h2[text()='Register']";
    public FIRSTNAME = "#register_customer_first_name";
    public LASTNAME = "#register_customer_last_name";
    public EMAIL = "#register_customer_email";
    public PASSWORD = "#register_customer_new_password";
    public CONFIRM_PASSWORD = "#register_customer_confirm_password";
    public PHONE_NO = "#register_customer_mobile_national_number";
    public CONTINUEBUTT = "xpath=//button[@class='button submit-action disabled']";


    async clickRegisterButton(){
        await this.page.click(this.REGISTERBUTT);
    }

    async verifyRegisterPage() {
        await expect(this.page.locator(this.REGISTERPAGEHEADER)).toBeVisible();
    }

    async enterFirstName(){
        await this.page.fill(this.FIRSTNAME, 'Jessy');
    }

    async enterLastName(){
        await this.page.fill(this.LASTNAME, 'Talasani');
    }           

    async enterEmail(){
        await this.page.fill(this.EMAIL, 'jessytalasani@gmail.com');
      
    }

    async enterPassword() {
       await this.page.waitForTimeout(15000);
    // Close popup if it appears
    const popupClose = this.page.locator(
        'button[aria-label="Close Message"]'
    );

    if (await popupClose.isVisible()) {

        await popupClose.click();
    }

    // Scroll inside popup/modal
    await this.page.mouse.wheel(0, 1500);

    await this.page.waitForTimeout(2000);

    // Focus password field
    const passwordField = this.page.locator(
        this.PASSWORD
    );

    await passwordField.focus();

    // Enter password
    await passwordField.fill(
        'Midrand@1'
    );
}

    async enterPhoneNo(){
        await this.page.fill(this.PHONE_NO, '786062725');
    }

    async clickContinueButton(){
        await this.page.click(this.CONTINUEBUTT);
    }
}
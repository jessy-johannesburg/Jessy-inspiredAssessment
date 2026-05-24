import {expect, Page} from "@playwright/test";

export class ProdPage{
    constructor(public page: Page){}



public COMPUTER= "xpath=/html/body/div[4]/div[1]/div[2]/ul[1]/li[2]/a";
public DESKTOP= "xpath=(//h2[@class='title'])[1]";
public CHEAPESTDESKTOP= "xpath=//div[@data-productid='72']";
public ADDTOCART= "xpath=//*[@id='add-to-cart-button-72']";


async clickComputerMenu(){
    await this.page.click(this.COMPUTER);

}

async clickDesktopCategory(){
    await this.page.click(this.DESKTOP);
}

async clickCheapestDesktop(){
    await this.page.evaluate(() => {
    window.scrollBy(0, 500);
});

    await this.page.click(this.CHEAPESTDESKTOP);
}

async verifyDesktopPage() {
        await expect(this.page).toHaveURL(/desktops/);
    }

    async clickAddToCart() {
        await this.page.click(this.ADDTOCART);
    }

    async verifyProductAddedToCart() {

        const successMessage = this.page.locator('.content');

        await expect(successMessage)
            .toContainText('The product has been added to your shopping cart');
    }
}
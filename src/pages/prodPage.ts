import {expect, Page} from "@playwright/test";

export class ProdPage{
    constructor(public page: Page){}



public COMPUTER= "xpath=/html/body/div[4]/div[1]/div[2]/ul[1]/li[2]/a";
public DESKTOP= "xpath=(//h2[@class='title'])[1]";


async clickComputerMenu(){
    await this.page.click(this.COMPUTER);

}

async clickDesktopCategory(){
    await this.page.click("xpath=/html/body/div[4]/div[1]/div[2]/ul[1]/li[2]/ul/li[1]/a");
}
}
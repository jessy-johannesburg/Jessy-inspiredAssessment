import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

let browser: Browser;
let page: Page;

Before({ tags: "@web" },async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    this.browser = browser;
    this.page = page; 
});

After({ tags: "@web" },async function () {
    await page.close();
    await browser.close();
});
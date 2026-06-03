import { test, expect } from '@playwright/test';
import { error } from 'console';

test('Fetch iPhone 17 Pro 256GB price from Amazon', async ({ page }) => {

    const productName = 'iPhone 17 Pro 256 GB';

    await page.goto('https://www.amazon.in');

    await page.locator('#twotabsearchtextbox').fill('iPhone 17 Pro 256GB');
    await page.keyboard.press('Enter');

    // Wait for results
    await page.waitForSelector('//div[contains(@data-component-type,"s-search-result")]');

    // Locate product
    const product = page.locator('//div[contains(@data-component-type,"s-search-result")]')
        .filter({ hasText: 'iPhone 17 Pro' });

   try{
        const Product = product.nth(4);
        const price = await Product.locator('.a-price-whole').first().textContent();

        if (price) {
            console.log(`5th Product price: ${price}`);
        }else{
            console.error('Price not found for the 5th product');
        }
    }catch (error) {
        console.error('price does not match with the product name');
    }
    
});
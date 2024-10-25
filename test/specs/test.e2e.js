// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
const SearchAction = require('../pageobjects/search/searchAction')
const producctName = "Nike react phantom run flyknit 2"
describe('Demo evershop site automation', () => {
    it('successfully add to cart product', async () => {
        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
        await browser.url('https://demo.evershop.io/');
        await $('//a[@class="search-icon"]').click();   
        await $('//input[@placeholder="Search"]').setValue("Nike");
        await browser.keys("Enter");
        await $(`//a[contains(@href, "182")]/span[contains(text(), '${producctName}')]`).click();
        await $(`//a[@href='#' and contains(text(),'S')]`).click();
        await browser.pause(5000);
        await $(`//a[@href='#' and contains(text(),'Black')]`).click();
        await browser.pause(5000);
        // await $(`//input[@name="qty"]`).clear();
        await $(`//input[@name="qty"]`).setValue(4);
        await $(`//button[contains(.,"ADD TO CART")]`).click();
        await browser.pause(5000);
        await $(`//a[contains(@class,"add-cart-popup-button")]`).click();
        await browser.pause(5000);
        await browser.quit();   
    })
})


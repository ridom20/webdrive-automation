const addToCartLocator = require('./addToCartLocator');
const Utility = require('../../Utilities/utility');
class AddToCartAction {
    async addToCart(productName) {
      await  (await addToCartLocator.productFromList(productName)).click();
    }
    async addToCartSize(number) {
        await addToCartLocator.productSize(number).click();
        await browser.pause(5000);
    }
    async addToCartColor() {
        await addToCartLocator.productColor.click();
        await browser.pause(5000);
    }
    async addToCartQuantity(qty) {
        await addToCartLocator.productQuantity.setValue(qty);
    }
    async clickAddToCartButton() {
        await addToCartLocator.addToCartButton.click();
    }
    async clickAddToCartPopupButton() {
        await addToCartLocator.addToCartPopupButton.click();
    }
    async getSingleProductPrice() {
        const productPrice = await addToCartLocator.priceFromProduct.getText();
        const priceInNumber =  await Utility.convertTextToNumber(productPrice);
        return priceInNumber
    }
}

module.exports = new AddToCartAction()
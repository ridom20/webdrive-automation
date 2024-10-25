const CheckoutLocator = require('./checkoutLocator');
const Utility = require('../../Utilities/utility');
class CheckoutAction {
    async getSubtotalAmount () {
        const subTotal = await CheckoutLocator.productSubtotal.getText();
        const subTotalInNumber = await Utility.convertTextToNumber(subTotal);
        return subTotalInNumber;
    }

    async getGrandTotalAmount () {
        const grandTotal = await CheckoutLocator.productGrandtotal.getText();
        const grandTotalInNumber = await Utility.convertTextToNumber(grandTotal);
        return grandTotalInNumber;
    }

    async clickCheckoutButton () {
        await CheckoutLocator.productCheckoutButton.click();
    }
}

module.exports = new CheckoutAction();
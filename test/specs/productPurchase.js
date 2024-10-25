const SearchAction = require("../pageobjects/search/searchAction");
const AddToCartAction = require("../pageobjects/addToCart/addToCartAction");
const CheckoutAction = require("../pageobjects/checkout/checkoutAction");
const loginAction = require("../pageobjects/login/loginAction");
const Utility = require("../Utilities/utility");
var productName = "";
var productQty;

describe("Demo evershop site product purchase journey", () => {
    it("successfully search product", async () => {
        const number = await Utility.randomNumber(1, 4);
        productName = await SearchAction.selectedProduct(number);
        await SearchAction.clickSearchIcon();
        await SearchAction.enterSearchItem(productName);
        await browser.keys("Enter");
    });
    it("successfully add product in the cart", async () => {
        const number = await Utility.randomNumber(1, 2);
        await AddToCartAction.addToCart(productName);
        await AddToCartAction.addToCartSize(number);
        await AddToCartAction.addToCartColor();
        productQty= await Utility.randomNumber(1, 10);
        await AddToCartAction.addToCartQuantity(productQty);
        await AddToCartAction.clickAddToCartButton();
        await AddToCartAction.clickAddToCartPopupButton();
    });
    it("successfully verify total amount and grand total", async () => {
        const singleProductPrice = await AddToCartAction.getSingleProductPrice();
        const expectedTotalAmount = singleProductPrice * productQty;
        const actualSubTotal = await CheckoutAction.getSubtotalAmount();
        const actualGrandTotal = await CheckoutAction.getGrandTotalAmount();
        expect(expectedTotalAmount).toEqual(actualSubTotal);
        expect(expectedTotalAmount).toEqual(actualGrandTotal);
    });
    it("successfully logout", async () => {
        await loginAction.clickProfileIcon();
        await loginAction.clickLogout();
        await browser.pause(5000);
    });
});


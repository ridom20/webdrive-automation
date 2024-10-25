class CheckoutLocator {
    get productSubtotal() {
        return $('//div[contains(text(),"Sub total")]/following-sibling::div');
    }
    get productGrandtotal() {
        return $('//div[@class="grand-total-value"]');
    }
    get productCheckoutButton() {
        return $('//a[@href="/checkout"]');
    }
}

module.exports = new CheckoutLocator();

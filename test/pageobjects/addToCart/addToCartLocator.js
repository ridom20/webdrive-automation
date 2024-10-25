class AddToCartLocator {
    async productFromList() {
        return $(`//div[@class="product-thumbnail-listing"]/a[@href]`);
    }
    productSize(num) {
        return $(`(//ul[contains(@class,"variant-option-list")]/li/a)[${num}]`);
    }
    get productColor() {
        return $(`//a[@href='#' and contains(text(),'Black')]`);
    }
    get productQuantity() {
        return $(`//input[@name="qty"]`);
    }
    get addToCartButton() {
        return $(`//button[contains(.,"ADD TO CART")]`);
    }
    get addToCartPopupButton() {
        return $(`//a[contains(@class,"add-cart-popup-button")]`);
    }
    get priceFromProduct() {
        return $(`//span[@class="sale-price"]`);
    }
}

module.exports = new AddToCartLocator();

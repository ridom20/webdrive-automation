const SearchLocator = require('./searchLocator');

class SearchAction {
    async clickSearchIcon() {
        await SearchLocator.searchIcon.click();
    }
    async enterSearchItem(productName) {
        await SearchLocator.searchInput.setValue(productName);
    }
    async search(productName) {
        await this.clickSearchIcon();
        await this.enterSearchItem(productName);
    }
    async selectedProduct(num){
     return await SearchLocator.productList(num).getText();
    }
}

module.exports = new SearchAction();
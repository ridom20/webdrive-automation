class SearchLocator {
    get searchIcon() {
      return $('//a[@class="search-icon"]')
    }
    get searchInput() {
        return $('//input[@placeholder="Search"]')
    }
    productList(number) {
        return $(`(//div[contains(@class,"product-name")])[${number}]`)
    }
}

module.exports = new SearchLocator();
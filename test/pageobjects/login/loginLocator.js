class LoginLocator {
    get profileIcon () {
        return $('//a[contains(@href,"/account")]');
    }
   get inputEmail () {
    return $('//input[@name="email"]');
   }

   get inputPassword () {
    return $('//input[@name="password"]');
   }

   get btnSubmit () {
    return $('//div[contains(@class,"form-submit-button")]/button');
   }

   get logoutLink () {
    return $('//a[contains(text(),"Logout")]');
   }
}

module.exports = new LoginLocator();
const loginLocator = require('./loginLocator');

class LoginAction {
    async clickProfileIcon() {
        await loginLocator.profileIcon.click();
    }
    async enterEmail(email) {
        await loginLocator.inputEmail.setValue(email);
    }
    async enterPassword(password) {
        await loginLocator.inputPassword.setValue(password);
    }
    async clickSubmit() {
        await loginLocator.btnSubmit.click();
    }

    async clickLogout() {
        await loginLocator.logoutLink.click();
    }

}

module.exports = new LoginAction();
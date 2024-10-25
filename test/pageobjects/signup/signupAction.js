const signupLocator = require('./signupLocator');

class SignupAction {
    async clickCreateAccount() {
        await signupLocator.clickCreateAccount.click();
    }
    async fullName(name) {
        await signupLocator.inputFullName.setValue(name);
    }

}

module.exports = new SignupAction();
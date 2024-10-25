class SignupLocator {
    get clickCreateAccount () {
        return $('//a[@href="/account/register"]');
    }
    get inputFullName () {
        return $('//input[@name="full_name"]');
    }
}
module.exports = new SignupLocator();
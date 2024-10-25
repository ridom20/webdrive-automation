const signupAction = require("../pageobjects/signup/signupAction");
const loginAction = require("../pageobjects/login/loginAction");
const utility = require("../Utilities/utility");
var email = "";
var password = "";
var fullName = "";
describe("Demo evershop site auth journey", () => {
    it("successfully register", async () => {
        fullName = await utility.randomString(10);
        email = fullName + "@gmail.com";
        password = await utility.randomString(10) + "&+&+&0";
        await loginAction.clickProfileIcon();
        await signupAction.clickCreateAccount();
        await signupAction.fullName(fullName);
        await loginAction.enterEmail(email);
        await loginAction.enterPassword(password);
        await loginAction.clickSubmit();
        await browser.pause(5000);
    });
    it.skip("successfully logout", async () => {
        await loginAction.clickProfileIcon();
        await loginAction.clickLogout();
        await browser.pause(5000);
    });
    it.skip("successfully login", async () => {
        await loginAction.clickProfileIcon();
        await browser.pause(5000);
        await loginAction.enterEmail(email);
        await loginAction.enterPassword(password);
        await loginAction.clickSubmit();
    });
});

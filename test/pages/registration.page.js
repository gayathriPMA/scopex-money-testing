class RegistrationPage {
    /* Define locators */
    get nextButton() { return $('~Next'); }
    get getStartedButton() { return $('~Get started'); }
    get signUpRedirectButton() { return $('android=new UiSelector().resourceId("sign-up-redirect")'); }
    get emailInput() { return $('android=new UiSelector().resourceId("RNE__Input__text-input").text("Email")'); }
    get passwordInput() { return $('android=new UiSelector().resourceId("RNE__Input__text-input").text("Password")'); }
    get confirmPasswordInput() { return $('android=new UiSelector().resourceId("RNE__Input__text-input").text("Confirm Password")'); }
    get continueButton() { return $('~Continue'); }
    get firstNameInput() { return $('android=new UiSelector().resourceId("first-name-input")'); }
    get lastNameInput() { return $('android=new UiSelector().resourceId("last-name-input")'); }
    get registerButton() { return $('~Register'); }
    get skipButton() { return $('~Skip'); }
    get greetingNameText() { 
        return $('android=new UiSelector().resourceId("greeting-and-name")'); 
    }
    

    /* Actions */
    async clickNext() { await this.nextButton.waitForDisplayed(); await this.nextButton.click(); }
    async clickGetStarted() { await this.getStartedButton.waitForDisplayed(); await this.getStartedButton.click(); }
    async clickSignUpRedirect() { await this.signUpRedirectButton.waitForDisplayed(); await this.signUpRedirectButton.click(); }
    async enterEmail(email) { await this.emailInput.waitForDisplayed(); await this.emailInput.setValue(email); }
    async enterPassword(password) { await this.passwordInput.waitForDisplayed(); await this.passwordInput.setValue(password); }
    async enterConfirmPassword(password) { await this.confirmPasswordInput.waitForDisplayed(); await this.confirmPasswordInput.setValue(password); }
    async clickContinue() { await this.continueButton.waitForDisplayed(); await this.continueButton.click(); }
    async enterFirstName(firstName) { await this.firstNameInput.waitForDisplayed(); await this.firstNameInput.setValue(firstName); }
    async enterLastName(lastName) { await this.lastNameInput.waitForDisplayed(); await this.lastNameInput.setValue(lastName); }
    async clickRegister() { await this.registerButton.waitForDisplayed(); await this.registerButton.click(); }
    async clickSkip() { await this.skipButton.waitForDisplayed(); await this.skipButton.click(); }
    async verifyFirstNameDisplayed() {
        await this.greetingNameText.waitForDisplayed();
        const text = await this.greetingNameText.getText();
        return text.includes('Gayu');
    }
}

module.exports = new RegistrationPage();

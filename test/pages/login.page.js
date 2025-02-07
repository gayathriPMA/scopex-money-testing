class LoginPage {
    // Locators
    get emailInput() {
        return $('android=new UiSelector().resourceId("login-email-input")');
    }

    get passwordInput() {
        return $('android=new UiSelector().resourceId("login-password-input")');
    }

    get loginButton() {
        return $('android=new UiSelector().resourceId("login-button")');
    }

    // Actions
    async enterEmail(email) {
        await this.emailInput.setValue(email);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    // Reusable Login Method
    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = new LoginPage();

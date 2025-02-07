class RecipientPage {

    get recipientsTab() {
        return $('~Recipients');
    }

    get addRecipientButton() {
        return $('~Add recipient');
    }

    get recipientNicknameInput() {
        return $('(//android.widget.EditText[@resource-id="RNE__Input__text-input"])[1]');
    }

    get ifscCodeInput() {
        return $('(//android.widget.EditText[@resource-id="RNE__Input__text-input"])[2]');
    }

    get accountNumberInput() {
        return $('(//android.widget.EditText[@resource-id="RNE__Input__text-input"])[3]');
    }

    get finalAddRecipientButton() {
        return $('//android.widget.Button[@content-desc="Add recipient"]');
    }

    async scrollToElement(element) {
        while (!(await element.isDisplayed())) {
            await driver.performActions([
                {
                    type: "pointer",
                    id: "finger1",
                    parameters: { pointerType: "touch" },
                    actions: [
                        { type: "pointerMove", duration: 0, x: 500, y: 1800 },
                        { type: "pointerDown", button: 0 },
                        { type: "pause", duration: 500 },
                        { type: "pointerMove", duration: 1000, x: 500, y: 1500 },
                        { type: "pointerUp", button: 0 }
                    ]
                }
            ]);
        }
    }

    async clickRecipientsTab() {
        try {
            if (!(await this.recipientsTab.isDisplayed())) {
                await this.scrollToElement(this.recipientsTab);
            }
            await this.recipientsTab.waitForDisplayed({ timeout: 15000 });
            await this.recipientsTab.click();
        } catch (e) {
            console.error("Error clicking Recipients Tab:", e);
            throw e;
        }
    }

    async clickAddRecipientButton() {
        try {
            await this.addRecipientButton.waitForDisplayed({ timeout: 10000 });
            await this.addRecipientButton.click();
        } catch (e) {
            console.error("Error clicking Add Recipient Button:", e);
            throw e;
        }
    }

    async enterRecipientNickname(name) {
        try {
            await this.recipientNicknameInput.waitForDisplayed({ timeout: 10000 });
            await this.recipientNicknameInput.setValue(name);
        } catch (e) {
            console.error("Error entering Recipient Nickname:", e);
            throw e;
        }
    }

    async enterIFSCCode(code) {
        try {
            await this.ifscCodeInput.waitForDisplayed({ timeout: 10000 });
            await this.ifscCodeInput.setValue(code);
        } catch (e) {
            console.error("Error entering IFSC Code:", e);
            throw e;
        }
    }
    async enterAccountNumber(accountNumber) {
        try {
            await this.accountNumberInput.waitForDisplayed({ timeout: 10000 });


            if (await driver.isKeyboardShown()) {
                await driver.hideKeyboard();
            }


            await this.accountNumberInput.setValue(accountNumber);
        } catch (e) {
            console.error("Error entering Account Number:", e);
            throw e;
        }
    }

    async clickFinalAddRecipientButton() {
        try {
            await this.finalAddRecipientButton.waitForDisplayed({ timeout: 10000 });


            if (!(await this.finalAddRecipientButton.isEnabled())) {
                throw new Error("Final Add Recipient Button is not enabled!");
            }

            await this.finalAddRecipientButton.click();
        } catch (e) {
            console.error("Error clicking Final Add Recipient Button:", e);
            throw e;
        }
    }

}

module.exports = new RecipientPage();

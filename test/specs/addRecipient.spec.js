const RegistrationPage = require('../pages/registration.page');
const RecipientPage = require('../pages/recipient.page');
const userData = require('../data/userData.json');
const recipientData = require('../data/recipientData.json');


describe('Scopex Money Application', () => {

    /* User Registration Test */
    it('should register a new user successfully', async () => {
        const notNowBtn = await $('id:android:id/button2');
        if (await notNowBtn.isDisplayed()) {
            await notNowBtn.click();
        }
        await driver.dismissAlert();

        await RegistrationPage.clickNext();
        await RegistrationPage.clickGetStarted();
        await RegistrationPage.clickSignUpRedirect();
        await RegistrationPage.enterEmail(userData.validUser.email);
        await RegistrationPage.enterPassword(userData.validUser.password);
        await RegistrationPage.enterConfirmPassword(userData.validUser.password);
        await RegistrationPage.clickContinue();
        await RegistrationPage.enterFirstName(userData.validUser.firstName);
        await RegistrationPage.enterLastName(userData.validUser.lastName);
        await RegistrationPage.clickRegister();
        await RegistrationPage.clickSkip();

        expect(await RegistrationPage.verifyFirstNameDisplayed()).toBeTruthy();
    });

    /* Add Recipient Test (Directly after registration) */
    it('should add a new recipient successfully after registration', async () => {
        /* User is already logged in after registration */
        await RecipientPage.clickRecipientsTab();
        await RecipientPage.clickAddRecipientButton();
        await RecipientPage.enterRecipientNickname(recipientData.recipient1.nickname);
        await RecipientPage.enterIFSCCode(recipientData.ifsc.nickname);
        await RecipientPage.enterAccountNumber(recipientData.accountNumber.nickname);
        await RecipientPage.clickFinalAddRecipientButton();

        /* Verify recipient added successfully */
        // const recipientAddedMsg = await $('android=new UiSelector().textContains("Recipient added successfully")');
        // expect(await recipientAddedMsg.isDisplayed()).toBeTruthy();
    });

   
    /* Logout Test */
    it('should logout successfully', async () => {
        /* Open the home screen by launching the main activity */
        await driver.startActivity("com.scopex.scopexmobile", "com.scopex.scopexmobile.MainActivity");
        await RegistrationPage.clickSkip();
        /* Click on the Profile button to access logout */
        const profileButton = await $('android=new UiSelector().description("Profile")');
        await profileButton.waitForDisplayed({ timeout: 10000 });
        await profileButton.click();

        /* Click the Logout button */
        const logoutButton = await $('android=new UiSelector().description("Log out")');
        await logoutButton.waitForDisplayed({ timeout: 10000 });
        await logoutButton.click();

        // Verify redirected to Sign-Up/Login page
        // const signUpButton = await $('android=new UiSelector().text("Sign Up")');
        // expect(await signUpButton.isDisplayed()).toBeTruthy();
    });


});

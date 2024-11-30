const LoginPage = require('../pages/loginPage');
const ForgotPasswordPage = require('../pages/forgotPasswordPage');

const USERNAME = "Admin";
const PASSWORD = "admin123";
const INVALID_USERNAME = "invaliduUser";
const INVALID_PASSWORD = "invalidPassword";

describe('Login Page - OrangeHRM Demo', () => {
    const loginPage = new LoginPage();
    const forgotPasswordPage = new ForgotPasswordPage();
  
    beforeEach(() => {
      loginPage.visit();
    });
  
    it('should display the login page correctly', () => {
      loginPage.isUsernameVisible();
      loginPage.isPasswordVisible();
      loginPage.isLoginBtnVisible();
    });
  
    it('should not login with invalid credentials', () => {
      loginPage.enterUsername(INVALID_USERNAME);
      loginPage.enterPassword(INVALID_PASSWORD);
      loginPage.clickLogin();
      loginPage.getErrorMessage()
    });

    it('should not login with invalid user credential', () => {
      loginPage.enterUsername(INVALID_USERNAME);
      loginPage.enterPassword(PASSWORD);
      loginPage.clickLogin();
      loginPage.getErrorMessage()
    });

    it('should not login with invalid password credentials', () => {
      loginPage.enterUsername(USERNAME);
      loginPage.enterPassword(INVALID_PASSWORD);
      loginPage.clickLogin();
      loginPage.getErrorMessage()
    });

    it('should login successfully with valid credentials', () => {
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('getActionSummary');
      cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('getShortcuts');

      loginPage.enterUsername(USERNAME);
      loginPage.enterPassword(PASSWORD);
      loginPage.clickLogin();

      cy.wait('@getActionSummary').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });
  
      cy.wait('@getShortcuts').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });

      loginPage.isDashboard();
    });
  
    it('should show validation errors when fields are empty', () => {
      loginPage.clickLogin();
      loginPage.getErrorMessageRequired();
    });

    it('should navigate to reset password page when clicked on "Forgot your password?"', () => {
      loginPage.visit()
      loginPage.clickForgotPass();
      
      forgotPasswordPage.isForgotPassword();
    });

    it('should display social media login buttons and they should be clickable', () => {
        loginPage.visit();
        loginPage.clickFacebook();
        loginPage.clickLikedin();
        loginPage.clickLogin();
        loginPage.clickTwitter();
    });    
});
  
const ForgotPasswordPage = require('../pages/forgotPasswordPage');
const LoginPage = require('../pages/loginPage');
const USERNAME = "Admin";

describe('Forgot Password Tests', () => {
  const forgotPasswordPage = new ForgotPasswordPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    forgotPasswordPage.visit(); 
  });
  
  it('should successfully send a reset password request', () => {
    forgotPasswordPage.enterUsername(USERNAME);
    forgotPasswordPage.clickResetButton();
    forgotPasswordPage.verifySuccessMessage();
  });

  it('should back to login page' , () => {
    forgotPasswordPage.clickCancelButton();
    loginPage.isLoginPage();
  });
});

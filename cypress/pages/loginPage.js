class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    isUsernameVisible(){
        cy.get('input[name="username"]').should('be.visible');
    }

    isPasswordVisible(){
        cy.get('input[name="password"]').should('be.visible');
    }

    isLoginBtnVisible(){
        cy.get('button[type="submit"]').should('be.visible').and('contain', 'Login');
    }

    isDashboard(){
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard');
    }

    isLoginPage(){
        cy.url().should('include','login');
    }
  
    enterUsername(username) {
        cy.get('input[name="username"]').type(username);
    }
  
    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }
  
    clickLogin() {
        cy.get('button[type="submit"]').click();
    }

    clickForgotPass(){
        cy.contains('Forgot your password?').click();
    }
  
    getErrorMessage() {
        return cy.get('.oxd-alert-content').should('be.visible').and('contain', 'Invalid credentials');
    }

    getErrorMessageRequired(){
        cy.get('.oxd-input-group__message')
        .should('have.length', 2) 
        .and('contain', 'Required');
    }

    clickLikedin(){
        cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').should('be.visible').click();
    }

    clickFacebook(){
        cy.get('a[href="https://www.facebook.com/OrangeHRM/"]').should('be.visible').click();
    }

    clickTwitter(){
        cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').should('be.visible').click();
    }

    clickYoutube(){
        cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').should('be.visible').click();
    }
  }
  
  module.exports = LoginPage;
  
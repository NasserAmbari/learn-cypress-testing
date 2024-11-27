class ForgotPasswordPage {
    visit(){
        cy.visit('/auth/requestPasswordReset');
    }

    isForgotPassword(){
        cy.url().should('include', '/auth/requestPasswordReset');
    }
}

module.exports = ForgotPasswordPage;
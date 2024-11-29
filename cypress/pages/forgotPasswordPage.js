class ForgotPasswordPage {
    visit(){
        cy.visit('/auth/requestPasswordResetCode');
    }

    isForgotPassword(){
        cy.url().should('include', '/auth/requestPasswordResetCode');
    }

    enterUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    clickResetButton() {
        cy.get('button[type="submit"]').click();
    }

    clickCancelButton(){
        cy.get('.orangehrm-forgot-password-button--cancel').click();
    }

    verifySuccessMessage() {
        cy.contains('Reset Password link sent successfully').should('be.visible'); // Verifikasi pesan sukses
    }
}

module.exports = ForgotPasswordPage;
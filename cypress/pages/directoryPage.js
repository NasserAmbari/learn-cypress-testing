class DirectoryPage {
    visit() {
      cy.visit('/directory/viewDirectory');
    }

    enterEmployeeName(employee){
      cy.get('.oxd-autocomplete-text-input > input').type(employee);
      cy.wait(1000);
      cy.contains('.oxd-autocomplete-dropdown', employee).click();
    }

    selectJobTitle(jobTitle){
      cy.get('.oxd-select-text-input').contains('-- Select --').click(); 
      cy.contains('div', jobTitle).click(); 
    }

    selectLocation(location){
      cy.get('.oxd-select-text-input').contains('-- Select --').click(); 
      cy.contains('div', location).click(); 
    }

    clickSearch(){
      cy.get('button[type="submit"]').click();
    }

    clickReset(){
      cy.get('button[type="reset"]').click();
    }
  
    validateSearchFromFetch(employee, jobTitle, location) {
      if(employee){
        cy.get('.orangehrm-directory-card').contains(employee).should('exist');
      }

      if(jobTitle) {
        cy.get('.orangehrm-directory-card').contains(jobTitle).should('exist');
      }

      if(location){
        cy.get('.orangehrm-directory-card').contains(location).should('exist');
      }
    }
  }
  
  module.exports = DirectoryPage;
  
import 'cypress-xpath';

describe('Navbar Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');  
    });

    it('باید روی همبرگر منو کلیک کنه', () => {
        cy.wait(2000);
        cy.xpath('/html/body/div/nav/div/header/div/button')
        .should('be.visible') 
          .click(); 
          cy.wait(2000);


          cy.xpath('/html/body/div[2]/div[3]/ul/li[3]') 
          .should('be.visible') 
          .click();
          cy.wait(2000);


          cy.xpath('/html/body/div/div/div[2]/div[4]/div/button[2]') 
          .should('be.visible') 
          .click()
          .click();
    });
});

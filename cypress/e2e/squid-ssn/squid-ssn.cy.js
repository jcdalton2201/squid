
/* eslint-disable no-undef */
describe('squid-ssn', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-ssn/squid-ssn.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-ssn')
            .should('exist');
    });
    it('Test the typing of ssn', () =>{
        cy.get('#test')
            .shadow()
            .find('input')
            .type('123456789');
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '123456789');
        cy.get('#test').should('have.prop', 'maskedValue').and('deep.equal', '123-45-6789');
        cy.get('#test')
            .shadow()
            .find('input').should('have.value','•••-••-6789');
        cy.get('#test')
            .shadow()
            .find('button').click();
        cy.get('#test')
            .shadow()
            .find('input').should('have.value','123-45-6789');
        cy.get('#test')
            .shadow()
            .find('button').click();
        cy.get('#test')
            .shadow()
            .find('input').should('have.value','•••-••-6789');
    });
});


/* eslint-disable no-undef */
describe('squid-radio-group', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-radio-group/squid-radio-group.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-radio-group')
            .should('exist');
    });
    it('Test select the no',() => {
        cy.get('squid-radio[value="no"]')
            .shadow()
            .find('label').click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'no');
        
    });
});

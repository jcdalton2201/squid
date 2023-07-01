
/* eslint-disable no-undef */
describe('squid-number', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-number/squid-number.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-number')
            .should('exist');
    });
});

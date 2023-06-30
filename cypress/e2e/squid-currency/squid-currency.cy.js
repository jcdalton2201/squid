
/* eslint-disable no-undef */
describe('squid-currency', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-currency/squid-currency.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-currency')
            .should('exist');
    });
});

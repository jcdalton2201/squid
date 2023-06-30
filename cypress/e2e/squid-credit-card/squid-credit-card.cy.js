
/* eslint-disable no-undef */
describe('squid-credit-card', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-credit-card/squid-credit-card.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-credit-card')
            .should('exist');
    });
});

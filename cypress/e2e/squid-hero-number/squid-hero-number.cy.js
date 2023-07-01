
/* eslint-disable no-undef */
describe('squid-hero-number', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-hero-number/squid-hero-number.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-hero-number')
            .should('exist');
    });
});

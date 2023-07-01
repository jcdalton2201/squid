
/* eslint-disable no-undef */
describe('squid-nav', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-nav/squid-nav.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-nav')
            .should('exist');
    });
});

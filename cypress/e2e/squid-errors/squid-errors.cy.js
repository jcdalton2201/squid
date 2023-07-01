
/* eslint-disable no-undef */
describe('squid-errors', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-errors/squid-errors.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-errors')
            .should('exist');
    });
});

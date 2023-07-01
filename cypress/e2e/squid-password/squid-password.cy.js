
/* eslint-disable no-undef */
describe('squid-password', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-password/squid-password.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-password')
            .should('exist');
    });
});

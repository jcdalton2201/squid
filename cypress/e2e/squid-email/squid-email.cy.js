
/* eslint-disable no-undef */
describe('squid-email', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-email/squid-email.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-email')
            .should('exist');
    });
});

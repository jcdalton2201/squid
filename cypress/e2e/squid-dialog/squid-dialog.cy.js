
/* eslint-disable no-undef */
describe('squid-dialog', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-dialog/squid-dialog.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-dialog')
            .should('exist');
    });
});

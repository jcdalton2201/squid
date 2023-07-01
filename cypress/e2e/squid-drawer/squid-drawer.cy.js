
/* eslint-disable no-undef */
describe('squid-drawer', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-drawer/squid-drawer.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-drawer')
            .should('exist');
    });
});

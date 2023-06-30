
/* eslint-disable no-undef */
describe('squid-nav-group', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-nav-group/squid-nav-group.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-nav-group')
            .should('exist');
    });
});

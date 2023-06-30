
/* eslint-disable no-undef */
describe('squid-container', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-container/squid-container.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-container')
            .should('exist');
    });
});

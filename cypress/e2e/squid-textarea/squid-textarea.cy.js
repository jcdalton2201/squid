
/* eslint-disable no-undef */
describe('squid-textarea', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-textarea/squid-textarea.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-textarea')
            .should('exist');
    });
});

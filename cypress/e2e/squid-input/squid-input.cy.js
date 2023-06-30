
/* eslint-disable no-undef */
describe('squid-input', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-input/squid-input.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-input')
            .should('exist');
    });
});

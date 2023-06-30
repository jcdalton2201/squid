
/* eslint-disable no-undef */
describe('squid-input-mask', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-input-mask/squid-input-mask.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-input-mask')
            .should('exist');
    });
});


/* eslint-disable no-undef */
describe('squid-radio', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-radio/squid-radio.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-radio')
            .should('exist');
    });
});

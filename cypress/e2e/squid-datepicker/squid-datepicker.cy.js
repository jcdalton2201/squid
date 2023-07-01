
/* eslint-disable no-undef */
describe('squid-datepicker', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-datepicker/squid-datepicker.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-datepicker')
            .should('exist');
    });
});

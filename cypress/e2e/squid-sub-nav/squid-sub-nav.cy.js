
/* eslint-disable no-undef */
describe('squid-sub-nav', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-sub-nav/squid-sub-nav.html');
    });
    it('render the subnav element',() => {
        cy.get('squid-sub-nav')
            .should('exist');
        cy.get('#test')
            .shadow()
            .find('[theme="white"]')
            .should('exist');
        
    });
});

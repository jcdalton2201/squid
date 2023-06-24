/* eslint-disable no-undef */

describe('squid-accordion', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-accordion/squid-accordion.html');
    });
    it('render the accordion',() => {
        const a = cy
            .get('squid-accordion');
        a.should('exist');
    });
    it('test we can open the accordion',() => {
        const a = cy
            .get('squid-accordion')
            .shadow()
            .find('button');
        a.click();
        cy.get('squid-accordion')
            .should('have.attr', 'open');
        cy
            .get('squid-accordion')
            .shadow()
            .find('button')
            .should('have.attr', 'aria-expanded')
            .and('eq','true');
        cy
            .get('squid-accordion')
            .shadow()
            .find('button').click();
        cy
            .get('squid-accordion')
            .shadow()
            .find('button')
            .should('have.attr', 'aria-expanded')
            .and('eq','false');
    });
});
/* eslint-disable no-undef */

describe('squid-accordion-group', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-accordion-group/squid-accordion-group.html');
    });
    it('render the accordion',() => {
        const a = cy
            .get('squid-accordion-group');
        a.should('exist');
    });
    it('test we can open the second accordion',() => {
        const a = cy
            .get('squid-accordion:nth-of-type(2)')
            .shadow()
            .find('button');
        a.click();
        cy.get('squid-accordion:nth-of-type(2)')
            .should('have.attr', 'open');
        cy.get('squid-accordion:nth-of-type(2)')
            .shadow()
            .find('button')
            .should('have.attr', 'aria-expanded')
            .and('eq','true');
        cy.get('squid-accordion:nth-of-type(1)')
            .shadow()
            .find('button').click();
        cy.get('squid-accordion:nth-of-type(2)')
            .shadow()
            .find('button')
            .should('have.attr', 'aria-expanded')
            .and('eq','false');
        cy.get('squid-accordion:nth-of-type(1)')
            .shadow()
            .find('button')
            .should('have.attr', 'aria-expanded')
            .and('eq','true');
        //testing the focus
        cy.get('squid-accordion:nth-of-type(1)').shadow()
            .find('button').focus();
        cy.wait(500);
        cy.get('body').type('{downArrow}',{ force: true });
        
        // cy.focused().should('have.attr', 'two', );
        // cy.get('squid-accordion:nth-of-type(2)').trigger('ArrowUp');
        // cy.focused().should('have.attr', 'one', );
    });
});
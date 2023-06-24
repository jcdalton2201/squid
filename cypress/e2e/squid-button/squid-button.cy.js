/* eslint-disable no-undef */

describe('squid-button', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-button/squid-button.html');
    });
    it('render the button',() => {
        const a = cy
            .get('#action')
            .shadow()
            .find('button');
        a.should('exist');
        a.should('have.class', 'action');
    });
    it('test a small and progressive',() => {
        const a = cy
            .get('#progressive')
            .shadow()
            .find('button');
        a.should('exist');
        a.should('have.class', 'progressive').and('have.class', 'small');
    });
    it('test destructive and disabled',() => {
        const a = cy
            .get('#destructive')
            .shadow()
            .find('button');
        a.should('exist');
        a.should('have.class', 'destructive');
    });
    it('test action button is clicked it does something',() => {
        const a = cy
            .get('#action')
            .shadow()
            .find('button');
        a.click();
        cy.get('#results').should('have.text', 'action clicked');
        cy.get('#clear')
            .shadow()
            .find('button').click();
    });
    it('test disabled button is working',() => {
        cy.get('#destructive')
            .shadow()
            .find('button').should('be.disabled');
        cy.get('#results').should('have.text', '');
        cy.get('#destructive')
            .shadow()
            .find('button').invoke('prop', 'disabled', false);
        cy.get('#destructive')
            .shadow()
            .find('button').should('not.be.disabled');
        cy.get('#destructive')
            .shadow()
            .find('button').click();
        cy.get('#results').should('have.text', 'destructive stuff');
        cy.get('#clear')
            .shadow()
            .find('button').click();
    });
    
    
});
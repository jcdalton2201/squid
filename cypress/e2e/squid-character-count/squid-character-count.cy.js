/* eslint-disable no-undef */
describe('squid-character-count', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-character-count/squid-character-count.html');
    });
    it('render the character-count',() => {
        cy.get('#test')
            .shadow()
            .find('[data-ref="counter"]').should('exist');
    });
    it('test typing char will update count',() => {
        cy.get('input').type('T');
        cy.get('#test').should('have.prop', 'count').and('eq',1);
        cy.get('input').type('e');
        cy.get('#test').should('have.prop', 'count').and('eq',2);
        cy.get('input').type('stsp');
        cy.get('#test').should('have.prop', 'count').and('eq',5);
        cy.get('input').type('{backspace}');
        cy.get('#test').should('have.prop', 'count').and('eq',4);
    });
    
});
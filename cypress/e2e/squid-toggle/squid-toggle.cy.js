
/* eslint-disable no-undef */
describe('squid-toggle', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-toggle/squid-toggle.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-toggle')
            .should('exist');
    });
    it('Test we can click on things',()=>{
        cy.get('#test')
            .shadow()
            .find('label').click({force:true});
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'test1');
        cy.get('#test').should('have.prop', 'checked').and('eq', true);
        cy.get('#test')
            .shadow()
            .find('label').click({force:true});
        cy.get('#test').should('have.prop', 'checked').and('eq', false);
    });
});

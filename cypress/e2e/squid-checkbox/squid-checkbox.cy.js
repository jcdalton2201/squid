/* eslint-disable no-undef */
describe('squid-checkbox', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-checkbox/squid-checkbox.html');
    });
    it('render the checkbox',() => {
        cy.get('#test')
            .shadow()
            .find('[name="squid-input"]').should('exist');
    });
    it('Test we can click on things',()=>{
        cy.get('#test')
            .shadow()
            .find('label').click({force:true});
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'test');
        cy.get('#test').should('have.prop', 'checked').and('eq', true);
        cy.get('#test')
            .shadow()
            .find('label').click({force:true});
        cy.get('#test').should('have.prop', 'checked').and('eq', false);
        cy.get('#checked').should('have.prop', 'checked').and('eq', true);
    });
    
});
/* eslint-disable no-undef */
describe('squid-checkbox=group', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-checkbox-group/squid-checkbox-group.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-checkbox-group')
            .shadow()
            .find('.checkbox-group').should('exist');
    });
    it('test we can get a value from group',() => {
        cy.get('squid-checkbox:nth-of-type(5)')
            .should('exist');
        cy.get('squid-checkbox:nth-of-type(5)')
            .shadow()
            .find('label').click({force:true});
        cy.get('squid-checkbox-group').should('have.prop', 'value').and('deep.equal', ['The Empire Strikes Back']);
        cy.get('squid-checkbox:nth-of-type(5)')
            .shadow()
            .find('label').click({force:true});
        cy.get('squid-checkbox:nth-of-type(6)')
            .shadow()
            .find('label').click({force:true});
        cy.get('squid-checkbox:nth-of-type(7)')
            .shadow()
            .find('label').click({force:true});
        cy.get('squid-checkbox-group').should('have.prop', 'value').and('deep.equal', ['Return of the Jedi','The Force Awakens']);   
    });
    
});
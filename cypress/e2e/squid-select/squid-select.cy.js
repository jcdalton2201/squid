
/* eslint-disable no-undef */
describe('squid-select', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-select/squid-select.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-select')
            .should('exist');
    });
    it('Test the select of an option', ()=>{
        cy.get('#test')
            .shadow()
            .find('select').select('hamster');
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'hamster');
    });
    it('Test changing the options and selecting them', ()=>{
        cy.get('#test').invoke('html', `<span slot='label'>flights</span><option value='airplane'>Airplane</option>
        <option value='train'>Train</option>
        <option value='boat'>Boat</option>`);
        cy.get('#test')
            .shadow()
            .find('select').select('airplane');
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'airplane');
        cy.get('#test').invoke('attr','value','boat');
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'boat');
    });
});

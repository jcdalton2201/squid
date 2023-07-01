
/* eslint-disable no-undef */
describe('squid-stepper', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-stepper/squid-stepper.html');
    });
    it('render the stepper',() => {
        cy.get('squid-stepper')
            .should('exist');
    });
    it('Test the we can increase and decrease of stepper' ,() =>{
        cy.get('#test')
            .shadow()
            .find('.increase')
            .should('exist');
        cy.get('#test')
            .shadow()
            .find('.increase')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '2');
        cy.get('#test')
            .shadow()
            .find('.increase')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '3');
        cy.get('#test')
            .shadow()
            .find('.increase')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '3');
        cy.get('#test')
            .shadow()
            .find('.decrease')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '2');
        cy.get('#test')
            .shadow()
            .find('.decrease')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '1');
        cy.get('#test')
            .shadow()
            .find('.decrease')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '1');
    });
    it('Test the we can change the options view.' ,()=>{
        cy.get('#test')
            .shadow()
            .find('.increase')
            .should('exist');
        cy.get('#test').invoke('html', `<option value='airplane'>Airplane</option>
            <option value='train'>Train</option>
            <option value='boat'>Boat</option>`);
        cy.get('#test')
            .shadow()
            .find('.increase')
            .click();
        cy.get('#test').should('have.prop', 'value').and('deep.equal', 'train');
    });
    it('Test the we can set the attribute of value.', ()=>{
        cy.get('#test')
            .invoke('attr','value',2);
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '2');
    });
});

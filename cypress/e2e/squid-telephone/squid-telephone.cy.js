
/* eslint-disable no-undef */
describe('squid-telephone', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-telephone/squid-telephone.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-telephone')
            .should('exist');
    });
    it('Test we can type a phone number',() => {
        cy.get('squid-telephone').shadow().find('input')
            .type('1111111111');
        cy.get('#test').should('have.prop', 'value').and('deep.equal', '(111) 111-1111');
    });
});


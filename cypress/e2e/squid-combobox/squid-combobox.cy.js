/* eslint-disable no-undef */
describe('squid-combobox', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-combobox/squid-combobox.html');
    });
    it('render the checkbox',() => {
        cy.get('squid-combobox')
            .shadow()
            .find('.combobox-wrapper').should('exist');
        cy.get('squid-combobox').data = [{
            value:'Harry Potter',
            key:'Harry Potter'
        },
        {
            value:'Ron Weasley',
            key:'Ron Weasley'
        },
        {
            value:'Hermione Granger',
            key:'Hermione Granger'
        },
        {
            value:'Albus Dumbledore',
            key:'Albus Dumbledore'
        },
        {
            value:'Severus Snape',
            key:'Severus Snape'
        },
        {
            value:'Sirius Black',
            key:'Sirius Black'
        },
        {
            value:'Neville \'freaking\' Longbottom',
            key:'Neville freaking\' Longbottom'
        },
        {
            value:'Voldemort',
            key:'He Who Must Not Be Named'
        }];
    });
});
/* eslint-disable no-undef */

describe('squid-a', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-a/squid-a.html');
    });
    it('render the link',() => {
        const a = cy
            .get('#text')
            .shadow()
            .find('a');
        a.should('exist');
        a.should('have.class', 'text');
    });
    it('test the left link',() => {
        const a = cy
            .get('#left')
            .shadow()
            .find('a');
        a.should('exist');
        a.should('have.class', 'left');
    });
    it('test the right link',() => {
        const a = cy
            .get('#right')
            .shadow()
            .find('a');
        a.should('exist');
        a.should('have.class', 'right');
    });
    it('test click will take you to google',  () =>{
        const a = cy
            .get('#right').shadow()
            .find('a').click();
        a.should('have.attr', 'href').and('contain','google.com');
    });
});
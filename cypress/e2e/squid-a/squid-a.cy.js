describe('element-one', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-a/squid-a.html');
    });
    it('render the link',() => {
        const a = cy
            .get('squid-a')
            .shadow()
            .find('a');
        a.should('exist');
        a.should('have.class', 'text');
    });
});
/* eslint-disable no-undef */

describe('squid-alert', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-alert/squid-alert.html');
    });
    it('render the link', () => {
        const a = cy
            .get('squid-alert[type="global"');
        a.should('exist');
    });
    it('test we have different types', () => {
        const _allowedTypes = ['global', 'informational', 'success', 'error', 'warning'];
        _allowedTypes.forEach(item => {
            const a = cy
                .get(`squid-alert[type="${item}"`)
                .shadow()
                .find('div');
            a.should('exist');
            a.should('have.class', `alert-${item}`);
        });
    });
    it('test we can focus and close an alert', () => {
        const a = cy
            .get('squid-alert[type="warning"')
            .shadow()
            .find('a');
        a.click({force: true});
        const b = cy
            .get('squid-alert[type="warning"');
        b.should('not.exist');
    });
});
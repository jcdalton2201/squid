/* eslint-disable no-undef */
import { months, dayOfWeek } from '../../../src/utils/dateUtils.js';
describe('squid-calendar', () => {
    beforeEach(() => {
        cy.visit('/spec/squid-calendar/squid-calendar.html');
    });
    it('render the calendar',() => {
        const a = cy
            .get('#cal')
            .shadow()
            .find('.header');
        a.should('exist');
    });
    it('test we default to todays date',()=>{
        const millDate = Date.now();
        const today = new Date(millDate);
        const a = cy
            .get('#cal')
            .shadow()
            .find('.header');
        a.should('have.text', `
${dayOfWeek[today.getDay()]},
 ${months[today.getMonth()].abbr}
 ${today.getDate()}
 ${today.getFullYear()}
`);
    });
    it('test increase and descrese work',() => {
        const a = cy
            .get('#check');
        a.should('exist');
        cy.get('#check')
            .shadow()
            .find('.left-nav').click();
        cy.get('#check')
            .shadow()
            .find('.middle-nav').should('contain','DECEMBER').and('contain','2019');
        cy.get('#check')
            .shadow()
            .find('.right-nav').click().click();
        cy.get('#check')
            .shadow()
            .find('.middle-nav').should('contain','FEBRUARY').and('contain','2020');

    });
    it('Test selecting a date will change value',()=>{
        cy.get('#check').should('exist');
        cy.get('#check')
            .shadow()
            .find('.day').first().click();
        cy.get('#check').should('have.prop', 'value').and('deep.equal', new Date('Wed, 01 Jan 2020 06:00:00 GMT'));
    });
});
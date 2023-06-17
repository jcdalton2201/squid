
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-calendar',()=>{
    let browser = null;
    let page = null;
    beforeAll(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });
    afterEach(async () => {
        const bodyhandle = await page.$('body');
        await page.evaluate(element => {
            element.innerHTML = '';
        }, bodyhandle);

    });
    afterAll(async () => { });
    xit('Test the accessibility of calendar',async()=>{
        browser = await setTestName(
            'Test the accessibility of calendar'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                '<squid-calendar id=\'cal\' name=\'cal\' value=\'01/05/2020\'></squid-calendar>';
        }, bodyhandle);
        await page.waitForSelector('squid-calendar');
        const results = await new AxePuppeteer(page).include('squid-calendar').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the increase and descrese will work',async()=>{
        browser = await setTestName(
            'Test the increase and descrese will work'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                '<squid-calendar id=\'cal\' name=\'cal\' value=\'01/05/2020\'></squid-calendar>';
        }, bodyhandle);
        await page.waitForSelector('squid-calendar');
        const navLeft = await page.evaluateHandle(body => {
            return body.querySelector('squid-calendar').renderRoot.querySelector('.left-nav');
        },bodyhandle);
        const navRight = await page.evaluateHandle(body => {
            return body.querySelector('squid-calendar').renderRoot.querySelector('.right-nav');
        },bodyhandle);
        const navMiddle = await page.evaluateHandle(body => {
            return body.querySelector('squid-calendar').renderRoot.querySelector('.middle-nav');
        },bodyhandle);
        await navRight.click();
        let month = await page.$eval('squid-calendar', el => el.displayMonth.getMonth());
        expect(month).toEqual(1);
        await navLeft.click();
        month = await page.$eval('squid-calendar', el => el.displayMonth.getMonth());
        expect(month).toEqual(0);
        await navMiddle.click();
        await navLeft.click();
        const navYear = await page.evaluateHandle(body => {
            return body.querySelector('squid-calendar').renderRoot.querySelector('.year');
        },bodyhandle);
        await navRight.click();
        await navYear.click();
        let year = await page.$eval('squid-calendar', el => el.displayMonth.getFullYear());
        expect(year).toEqual(2017);
    });
    it('Test the default year is this year',async()=>{
        browser = await setTestName(
            'Test the default year is this year'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                '<squid-calendar id=\'cal\' name=\'cal\' ></squid-calendar>';
        }, bodyhandle);
        await page.waitForSelector('squid-calendar');
        let year = await page.$eval('squid-calendar', el => el.displayMonth.getFullYear());
        const current = new Date(Date.now()).getFullYear();
        expect(year).toEqual(current);
    });
    it('Test the selecting a date will change the value',async()=>{
        browser = await setTestName(
            'Test the selecting a date will change the value'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                '<squid-calendar id=\'cal\' name=\'cal\' value=\'01/05/2020\'></squid-calendar>';
        }, bodyhandle);
        await page.waitForSelector('squid-calendar');
        const date = await page.evaluateHandle(body => {
            return body.querySelector('squid-calendar').renderRoot.querySelector('.day');
        },bodyhandle);
        await date.click();
        let value = await page.$eval('squid-calendar', el => el.getAttribute('value'));
        expect(value).toEqual('1/1/2020');
        const ok = await page.evaluateHandle(body => {
            return body.querySelector('squid-calendar').renderRoot.querySelector('.close-buttons a');
        },bodyhandle);
        await ok.click();
    });
});

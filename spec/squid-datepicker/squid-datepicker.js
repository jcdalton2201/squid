
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-datepicker',()=>{
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
    xit('Test the accessibility of datepicker',async()=>{
        browser = await setTestName(
            'Test the accessibility of datepicker'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-datepicker >
                Test
                </squid-datepicker>`;
        }, bodyhandle);
        await page.waitForSelector('squid-datepicker');
        const results = await new AxePuppeteer(page).include('squid-datepicker').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the toggle of the calendar in datepicker',async()=>{
        browser = await setTestName(
            'Test the toggle of the calendar in datepicker'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-datepicker >
            Test
            </squid-datepicker>`;
        }, bodyhandle);
        await page.waitForSelector('squid-datepicker');
        await page.$eval('squid-datepicker', ele => ele.toggleCalendar());
    });
});

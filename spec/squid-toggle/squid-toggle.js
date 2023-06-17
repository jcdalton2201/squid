
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-toggle',()=>{
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
    xit('Test the accessibility of toggle',async()=>{
        browser = await setTestName(
            'Test the accessibility of toggle'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-toggle >
                Test
                </squid-toggle>`;
        }, bodyhandle);
        await page.waitForSelector('squid-toggle');
        const results = await new AxePuppeteer(page).include('squid-toggle').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the click of toggle',async()=>{
        browser = await setTestName(
            'Test the click of toggle'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-toggle value='test1'>
                Test
                </squid-toggle>`;
        }, bodyhandle);
        await page.waitForSelector('squid-toggle');
        const label = await page.evaluateHandle(body => {
            return body.querySelector('squid-toggle').renderRoot.querySelector('label');
        },bodyhandle);
        await label.click();
        const value = await page.$eval('squid-toggle',elem => elem.value);
        expect(value).toEqual('test1');
    });
    it('Test toggle disabled will work',async()=>{
        browser = await setTestName(
            'Test toggle disabled will work'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-toggle disabled>
                Test
                </squid-toggle>`;
        }, bodyhandle);
        await page.waitForSelector('squid-toggle');
        const label = await page.evaluateHandle(body => {
            return body.querySelector('squid-toggle').renderRoot.querySelector('label');
        },bodyhandle);
        await label.click();
        const value = await page.$eval('squid-toggle',elem => elem.value);
        expect(value).toBeFalsy();
    });
});

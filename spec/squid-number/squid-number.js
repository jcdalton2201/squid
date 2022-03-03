
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-number',()=>{
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
    it('Test the accessibility of number',async()=>{
        browser = await setTestName(
            'Test the accessibility of number'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-number >
                Test
                </squid-number>`;
        }, bodyhandle);
        await page.waitForSelector('squid-number');
        const results = await new AxePuppeteer(page).include('squid-number').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the we can only type numbers',async()=>{
        browser = await setTestName(
            'Test the accessibility of number'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-number >
                Test
                </squid-number>`;
        }, bodyhandle);
        await page.waitForSelector('squid-number');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-number').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('abcd');
        const value = await page.$eval('squid-number', el => el.value);
        expect(value ).toEqual(undefined);
        await input.type('1234');
        const value2 = await page.$eval('squid-number', el => el.value);
        expect(value2 ).toEqual('1234');
    });
});

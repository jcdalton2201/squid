
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-checkbox',()=>{
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
    xit('Test the accessibility of checkbox',async()=>{
        browser = await setTestName(
            'Test the accessibility of checkbox'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-checkbox >
                Test
                </squid-checkbox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-checkbox');
        const results = await new AxePuppeteer(page).include('squid-checkbox').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the click of checkbox',async()=>{
        browser = await setTestName(
            'Test the click of checkbox'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-checkbox value='test1'>
                Test
                </squid-checkbox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-checkbox');
        const label = await page.evaluateHandle(body => {
            return body.querySelector('squid-checkbox').renderRoot.querySelector('label');
        },bodyhandle);
        await label.click();
        const value = await page.$eval('squid-checkbox',elem => elem.value);
        expect(value).toEqual('test1');
    });
    it('Test the toggle indeterminate state of checkbox',async()=>{
        browser = await setTestName(
            'Test toggle indeterminate state of checkbox'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-checkbox >
                Test
                </squid-checkbox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-checkbox');
        await page.$eval('squid-checkbox',elem => elem.indeterminate  = true);
        const input = await page.$eval('squid-checkbox', el => el.shadowRoot.querySelector('input').indeterminate);
        const value = await page.$eval('squid-checkbox',elem => elem.indeterminate);
        expect(input).toBeTruthy();
        expect(value).toBeTruthy();
        await page.$eval('squid-checkbox',elem => elem.indeterminate  = false);
        const input2 = await page.$eval('squid-checkbox', el => el.shadowRoot.querySelector('input').indeterminate);
        expect(input2.indeterminate).toBeFalsy();
    });
    it('Test checkbox disabled will work',async()=>{
        browser = await setTestName(
            'Test checkbox disabled will work'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-checkbox disabled>
                Test
                </squid-checkbox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-checkbox');
        const label = await page.evaluateHandle(body => {
            return body.querySelector('squid-checkbox').renderRoot.querySelector('label');
        },bodyhandle);
        await label.click();
        const value = await page.$eval('squid-checkbox',elem => elem.value);
        expect(value).toBeFalsy();
    });
});

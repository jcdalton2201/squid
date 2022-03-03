
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-ssn',()=>{
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
    it('Test the accessibility of ssn',async()=>{
        browser = await setTestName(
            'Test the accessibility of ssn'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-ssn >
                Test
                </squid-ssn>`;
        }, bodyhandle);
        await page.waitForSelector('squid-ssn');
        const results = await new AxePuppeteer(page).include('squid-ssn').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the typing of ssn',async()=>{
        browser = await setTestName(
            'Test the typing of ssn'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-ssn >
                Test
                </squid-ssn>`;
        }, bodyhandle);
        await page.waitForSelector('squid-ssn');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-ssn').renderRoot.querySelector('input');
        },bodyhandle);
        
        await input.type('123456789');
        const second = await page.evaluateHandle(body => {
            return body.querySelector('squid-ssn');
        },bodyhandle);
        console.log(second.value);
        const ssn = await page.$eval('squid-ssn', el => el.value);
        console.log(ssn);
        expect(ssn).toEqual('123456789');
        const button = await page.evaluateHandle(body => {
            return body.querySelector('squid-ssn').renderRoot.querySelector('button');
        },bodyhandle);
        await button.click();
        await page.$eval('squid-ssn',el => el.value = 987654321);
        await button.click();
    });
    it('Test the validating of ssn',async()=>{
        browser = await setTestName(
            'Test the typing of ssn'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-ssn >
                Test
                </squid-ssn>`;
        }, bodyhandle);
        await page.waitForSelector('squid-ssn');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-ssn').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('123456');
        page.$eval('squid-ssn', el => el.blur());
        const errorMessage = await page.$eval('squid-ssn', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage).toEqual('Please enter in a valid ssn');
        await input.press('ArrowLeft');
        await input.press('Backspace');
    });
});

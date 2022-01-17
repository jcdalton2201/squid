
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';

describe('Unit and Functional Tests for squid-currency',()=>{
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
        
        // await page.close();
        // await browser.close();

    });
    afterAll(async () => { 
    });
    it('Test the accessibility of currency',async()=>{
        browser = await setTestName(
            'Test the accessibility of currency'
        );
        page = await createPage(browser);
        // coverageUtil.startCoverage(page);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-currency >
                Test
                </squid-currency>`;
        }, bodyhandle);
        await page.waitForSelector('squid-currency');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-currency').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('1234');
        const results = await new AxePuppeteer(page).include('squid-currency').analyze();
        expect(isValid(results)).toBeTruthy();
        // const [jsCoverage] = await coverageUtil.stopCoverage(page);
        // await coverageUtil.displayCoverage(jsCoverage,{include:['squid-core-ui.js']});
    });
    it('Test the accessibility of currency',async()=>{
        browser = await setTestName(
            'Test the visuals of currency'
        );
        page = await createPage(browser);
        // coverageUtil.startCoverage(page);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-currency >
                Test
                </squid-currency>`;
        }, bodyhandle);
        await page.waitForSelector('squid-currency');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-currency').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('1234.87');
        // const image = await page.screenshot();
        // const results = await browser.toMatchSnapshot(image);
        // expect(results).toBeTruthy();
        // const [jsCoverage] = await coverageUtil.stopCoverage(page);
        // await coverageUtil.displayCoverage(jsCoverage,{include:['squid-core-ui.js']});
    });
    it('Test the max of currency',async()=>{
        
        browser = await setTestName(
            'Test the max of currency'
        );
        page = await createPage(browser);
        // coverageUtil.startCoverage(page);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-currency max='1'>
                Test
                </squid-currency>`;
        }, bodyhandle);
        await page.waitForSelector('squid-currency');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-currency').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('1234.87');
        page.$eval('squid-currency', el => el.blur());
        // const image = await page.screenshot();
        // const results = await browser.toMatchSnapshot(image);
        const errorMessage = await page.$eval('squid-currency', el => el.shadowRoot.querySelector('squid-helpers')._message);
        // expect(results).toBeTruthy();
        expect(errorMessage).toEqual('The value does not fit in the necessary range');

    });
});

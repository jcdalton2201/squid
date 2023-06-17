
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-button',()=>{
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
    afterAll(async () => {
    });
    xit('Test the accessibility of button',async()=>{
        browser = await setTestName(
            'Test the accessibility of button'
        );
        page = await createPage(browser);
        // coverageUtil.startCoverage(page);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-button >
                Test
                </squid-button>`;
        }, bodyhandle);
        await page.waitForSelector('squid-button');
        const results = await new AxePuppeteer(page).include('squid-button').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test we can click the button', async () =>{
        browser = await setTestName(
            'Test we can click the button'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-button >
                Test
                </squid-button><div id="test"></div>`;
            element.querySelector('squid-button').addEventListener('click',() => {
                element.querySelector('#test').innerHTML = 'Success';
            });
        }, bodyhandle);
        await page.waitForSelector('squid-button');
        const button = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-button').shadowRoot.querySelector('button');
            return x;
        });
        await button.click();
        const success = await page.$eval('div', el => el.innerHTML);
        expect(success).toEqual('Success');
        
        
    });
    it('Test we can submit a form', async () =>{
        browser = await setTestName(
            'Test we can submit a form'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<form href='#'><squid-button >
                Test
                </squid-button></form><div id="test"></div>`;
            element.querySelector('squid-button').addEventListener('click',() => {
                element.querySelector('#test').innerHTML = 'Success';
            });
        }, bodyhandle);
        await page.waitForSelector('squid-button');
        const button = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-button').shadowRoot.querySelector('button');
            return x;
        });
        await button.click();
        const success = await page.$eval('div', el => el.innerHTML);
        expect(success).toEqual('Success');
    });
    
});

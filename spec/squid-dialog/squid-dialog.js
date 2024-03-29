
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-dialog',()=>{
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
    xit('Test the accessibility of dialog',async()=>{
        browser = await setTestName(
            'Test the accessibility of dialog'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-dialog >
                <h1>Test</h1>
                </squid-dialog>`;
        }, bodyhandle);
        await page.waitForSelector('squid-dialog');
        await page.$eval('squid-dialog',elem => elem.showModal());
        const results = await new AxePuppeteer(page).include('squid-dialog').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the closing of dialog',async()=>{
        browser = await setTestName(
            'Test the accessibility of dialog'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-dialog >
                <h1>Test</h1>
                </squid-dialog>`;
        }, bodyhandle);
        await page.waitForSelector('squid-dialog');
        await page.$eval('squid-dialog',elem => elem.showModal());
        const closeBtn = await page.evaluateHandle(body => {
            return body.querySelector('squid-dialog').renderRoot.querySelector('button');
        },bodyhandle);
        await closeBtn.click();
        const value = await page.$eval('squid-dialog', elem => elem.open);
        expect(value).toBeFalsy();
        await page.$eval('squid-dialog',elem => elem.showModal());
        await bodyhandle.press('Escape');
        const value1 = await page.$eval('squid-dialog', elem => elem.open);
        expect(value1).toBeFalsy();
    });
});

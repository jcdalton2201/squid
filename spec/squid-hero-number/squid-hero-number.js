
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-hero-number',()=>{
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
    xit('Test the accessibility of hero-number',async()=>{
        browser = await setTestName(
            'Test the accessibility of hero-number'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-hero-number >
                Test
                </squid-hero-number>`;
        }, bodyhandle);
        await page.waitForSelector('squid-hero-number');
        const results = await new AxePuppeteer(page).include('squid-hero-number').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the currency of hero-number',async()=>{
        browser = await setTestName(
            'Test the currency of hero-number'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-hero-number currency='USD'>
            Test
            </squid-hero-number>`;
        }, bodyhandle);
        await page.waitForSelector('squid-hero-number');
        let numberStyle = await page.$eval('squid-hero-number', el => el.numberStyle);
        expect(numberStyle.style).toEqual('currency');
        expect(numberStyle.currency).toEqual('USD');
        numberStyle = await page.$eval('squid-hero-number', el => {el.currency = undefined;return el.numberStyle;});
        expect(numberStyle.style).toBeFalsy();
        expect(numberStyle.currency).toBeFalsy();
    });
});

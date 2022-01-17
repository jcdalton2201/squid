
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-input-mask',()=>{
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
    it('Test the accessibility of input-mask',async()=>{
        browser = await setTestName(
            'Test the accessibility of input-mask'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-input-mask >
                Test
                </squid-input-mask>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input-mask');
        const results = await new AxePuppeteer(page).include('squid-input-mask').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('test we can add input', async () =>{
        browser = await setTestName(
            'test we can add input'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-input-mask mask='AAAA'>
                Test
                </squid-input-mask>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input-mask');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-input-mask').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('test');
        const box = await page.$eval('squid-input-mask', el => el.value);
        expect(box).toEqual('test');
    });
    it('Test the mask will throw error of input-mask',async()=>{
        browser = await setTestName(
            'Test the accessibility of input-mask'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-input-mask mask='AAA-111' >
                Test
                </squid-input-mask>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input-mask');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-input-mask').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('ABC-34');
        page.$eval('squid-input-mask', el => el.blur());
        const errorMessage = await page.$eval('squid-input-mask', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage).toEqual('This field does not follow the proper pattern');
        await input.type('5');
        page.$eval('squid-input-mask', el => el.blur());
        const errorMessage2 = await page.$eval('squid-input-mask', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage2).toEqual('');
        await input.click({clickCount:6});
        await page.keyboard.press('Backspace');
        page.$eval('squid-input-mask', el => el.blur());
        const errorMessage3 = await page.$eval('squid-input-mask', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage3).toEqual('');
    });
});

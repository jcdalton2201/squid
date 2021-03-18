
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
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
        browser = await difUtil.setTestName(
            'Test the accessibility of input-mask'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-input-mask >
                Test
                </squid-input-mask>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input-mask');
        const results = await new AxePuppeteer(page).include('squid-input-mask').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the mask will throw error of input-mask',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of input-mask'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
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
        await page.evaluateHandle(body => {
            body.querySelector('squid-input-mask').renderRoot.querySelector('input').value = '124-ABC';
        },bodyhandle);
        await page.$eval('squid-input-mask', el => el.dispatchEvent(new Event('input')));
    });
});

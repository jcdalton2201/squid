
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-telephone',()=>{
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
    it('Test the accessibility of telephone',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of telephone'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-telephone >
                Test
                </squid-telephone>`;
        }, bodyhandle);
        await page.waitForSelector('squid-telephone');
        const results = await new AxePuppeteer(page).include('squid-telephone').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('test we can add telephone number', async () =>{
        browser = await difUtil.setTestName(
            'test we can add input'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-telephone>
                Test
                </squid-telephone>`;
        }, bodyhandle);
        await page.waitForSelector('squid-telephone');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-telephone').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('1111111111');
        const box = await page.$eval('squid-telephone', el => el.value);
        expect(box).toEqual('(111) 111-1111');
    });
});

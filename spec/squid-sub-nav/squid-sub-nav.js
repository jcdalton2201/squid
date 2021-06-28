
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-sub-nav',()=>{
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
    it('Test the accessibility of sub-nav',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of sub-nav'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-sub-nav href='https://gogle.com' theme='white'>
                    Google
                </squid-sub-nav>`;
        }, bodyhandle);
        await page.waitForSelector('squid-sub-nav');
        await page.screenshot({path: 'buddy-screenshot.png'});
        const results = await new AxePuppeteer(page).include('squid-sub-nav').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
});


const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-nav',()=>{
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
    it('Test the accessibility of nav',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of nav'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-nav >
                <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Prepaid Cards</squid-sub-nav>
                <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Flare Cards</squid-sub-nav>
                </squid-nav>`;
        }, bodyhandle);
        await page.waitForSelector('squid-nav');
        const results = await new AxePuppeteer(page).include('squid-nav').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test we can hide the nav group on hover', async() => {
        browser = await difUtil.setTestName(
            'Test the accessibility of nav'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-nav >
                <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Prepaid Cards</squid-sub-nav>
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Flare Cards</squid-sub-nav>
                </squid-nav>`;
        }, bodyhandle);
        await page.waitForSelector('squid-nav');
        const nav = await page.$eval('squid-nav', el => el.hideList());
        // console.log(nav.hideList());
        console.log(nav);
    });
});

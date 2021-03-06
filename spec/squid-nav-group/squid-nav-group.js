
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-nav-group',()=>{
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
    it('Test the accessibility of nav-group',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of nav-group'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-nav-group >
                Test
                </squid-nav-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-nav-group');
        const results = await new AxePuppeteer(page).include('squid-nav-group').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the accessibility of nav-group with dark theme',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of nav-group'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-nav-group theme='dark'>
            <squid-nav name='Cards' >
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Prepaid Cards</squid-sub-nav>
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Flare Cards</squid-sub-nav>
                </squid-nav>
                <squid-nav name='Money Services'>
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>About ACE</squid-sub-nav>
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Tax Service</squid-sub-nav>
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Bill Pay</squid-sub-nav>
                    <squid-sub-nav  href='https://new.acecashexpress.com/check-caching'>Title Loans</squid-sub-nav>
                </squid-nav>
            </squid-nav-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-nav-group');
        const results = await new AxePuppeteer(page).include('squid-nav-group').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
});

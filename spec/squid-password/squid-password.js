
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
xdescribe('Unit and Functional Tests for squid-password',()=>{
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
    it('Test the accessibility of password',async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of password'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-password >
                Test
                </squid-password>`;
        }, bodyhandle);
        await page.waitForSelector('squid-password');
        const results = await new AxePuppeteer(page).include('squid-password').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
});

const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-a', () => {
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
    it('Test the accessibility of default anchor', async () => {
        browser = difUtil.setTestName(
            'Test accessibility of the default anchor'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a >
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        const results = await new AxePuppeteer(page).include('squid-a').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the visuals of link', async () => {
        browser = difUtil.setTestName(
            'Test the visuals of link'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a >
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        const image1 = await page.screenshot();
        const result1 = await browser.toMatchSnapshot(image1);
        expect(result1).toBeTruthy();
    });
    it('Test the visuals of link left', async () => {
        browser = difUtil.setTestName(
            'Test the visuals of link left'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a variant="left">
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        const image1 = await page.screenshot();
        const result1 = await browser.toMatchSnapshot(image1);
        expect(result1).toBeTruthy();
    });
    it('Test the visuals of link right', async () => {
        browser = difUtil.setTestName(
            'Test the visuals of link right'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a variant="right">
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        const image1 = await page.screenshot();
        const result1 = await browser.toMatchSnapshot(image1);
        expect(result1).toBeTruthy();
    });
});
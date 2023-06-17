import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
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
    xit('Test the accessibility of default anchor', async () => {
        browser = await setTestName(
            'Test accessibility of the default anchor'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a >
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        const results = await new AxePuppeteer(page).include('squid-a').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the visuals of link', async () => {
        browser = await setTestName(
            'Test the visuals of link'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a >
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        // const image1 = await page.screenshot();
        // const result1 = await browser.toMatchSnapshot(image1);
        // expect(result1).toBeTruthy();
    });
    it('Test the visuals of link left', async () => {
        browser = await setTestName(
            'Test the visuals of link left'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a variant="left">
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        // const image1 = await page.screenshot();
        // const result1 = await browser.toMatchSnapshot(image1);
        // expect(result1).toBeTruthy();
    });
    it('Test the visuals of link right', async () => {
        browser = await setTestName(
            'Test the visuals of link right'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-a variant="right">
                This is a link
                </squid-a>`;
        }, bodyhandle);
        await page.waitForSelector('squid-a');
        // const image1 = await page.screenshot();
        // const result1 = await browser.toMatchSnapshot(image1);
        // expect(result1).toBeTruthy();
    });
});
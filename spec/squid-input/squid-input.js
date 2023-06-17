import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-input',()=>{
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
    xit('Test the accessibility of input', async () => {
        browser = await setTestName(
            'Test the accessibility of input'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-input >
                Test
                </squid-input>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input');
        const results = await new AxePuppeteer(page).include('squid-input').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the visuals of input', async () => {
        browser = await setTestName(
            'Test the visuals of input'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-input >
            Test
            </squid-input>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input');
        // const image1 = await page.screenshot();
        // const result1 = await browser.toMatchSnapshot(image1);
        // expect(result1).toBeTruthy();
    });
    it('Test the placeholder of input', async () => {
        browser = await setTestName(
            'Test the placeholder of input'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-input placeholder="placeholder">
            Test
            </squid-input>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input');
        // const image1 = await page.screenshot();
        // const result1 = await browser.toMatchSnapshot(image1);
        // expect(result1).toBeTruthy();
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-input').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('test');
        const box = await page.$eval('squid-input', el => el.value);
        expect(box).toEqual('test');
        // const image2 = await page.screenshot();
        // const result2 = await browser.toMatchSnapshot(image2);
        // expect(result2).toBeTruthy();
    });
    it('Test the pattern of input', async () => {
        browser = await setTestName(
            'Test the pattern of input'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-input pattern="^\\d{5}(?:[-\\s]\\d{4})?$">
            Test
            </squid-input>`;
        }, bodyhandle);
        await page.waitForSelector('squid-input');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-input').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('tests');
        page.$eval('squid-input', el => el.blur());
        // const image = await page.screenshot();
        // const results = await browser.toMatchSnapshot(image);
        const errorMessage = await page.$eval('squid-input', el => el.shadowRoot.querySelector('squid-helpers')._message);
        // expect(results).toBeTruthy();
        expect(errorMessage).toEqual('This field does not follow the proper pattern');
    });
});

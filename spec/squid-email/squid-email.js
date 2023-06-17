
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-email',()=>{
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
    xit('Test the accessibility of email',async()=>{
        browser = await setTestName(
            'Test the accessibility of email'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-email >
                Test
                </squid-email>`;
        }, bodyhandle);
        await page.waitForSelector('squid-email');
        const results = await new AxePuppeteer(page).include('squid-email').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the invalid of email',async()=>{
        browser = await setTestName(
            'Test the invalid of email'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-email >
                Test
                </squid-email>`;
        }, bodyhandle);
        await page.waitForSelector('squid-email');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-email').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('tests');
        page.$eval('squid-email', el => el.blur());
        const errorMessage = await page.$eval('squid-email', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage).toEqual('The entered value is not the right format');
    });
});

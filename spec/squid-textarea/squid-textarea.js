
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-textarea',()=>{
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
    afterAll(async () => { })
    it('Test the accessibility of textarea',async()=>{
        browser = await setTestName(
            'Test the accessibility of textarea'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-textarea >
                Test
                </squid-textarea>`;
        }, bodyhandle);
        await page.waitForSelector('squid-textarea');
        const results = await new AxePuppeteer(page).include('squid-textarea').analyze();
        expect(isValid(results)).toBeTruthy();
  });
});

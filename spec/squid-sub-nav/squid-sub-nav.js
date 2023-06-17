
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
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
    xit('Test the accessibility of sub-nav',async()=>{
        browser = await setTestName(
            'Test the accessibility of sub-nav'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-sub-nav href='https://google.com' theme='white'>
                    Google
                </squid-sub-nav>`;
        }, bodyhandle);
        await page.waitForSelector('squid-sub-nav');
        await page.screenshot({path: 'buddy-screenshot.png'});
        const results = await new AxePuppeteer(page).include('squid-sub-nav').analyze();
        expect(isValid(results)).toBeTruthy();
    });
});

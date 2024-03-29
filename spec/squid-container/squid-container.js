
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-container',()=>{
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
    xit('Test the accessibility of container',async()=>{
        browser = await setTestName(
            'Test the accessibility of container'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-container  padding="normal" elevation="1" radius="4">
                <h1>Squid Container</h1>
              
                <p>Really just a fancy, accessible wrapper.</p>
              </squid-container>`;
        }, bodyhandle);
        await page.waitForSelector('squid-container');
        const results = await new AxePuppeteer(page).include('squid-container').analyze();
        expect(isValid(results)).toBeTruthy();
    });
});

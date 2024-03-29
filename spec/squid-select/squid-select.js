
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-select',()=>{
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
    xit('Test the accessibility of select',async()=>{
        browser = await setTestName(
            'Test the accessibility of select'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-select >
                <span slot='label'>England</span>
                    <option value='' ></option>
                    <option value='1'>King</option>
                    <option value='2'>Queen</option>
                </squid-select>`;
        }, bodyhandle);
        await page.waitForSelector('squid-select');
        const results = await new AxePuppeteer(page).include('squid-select').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the select of an option',async()=>{
        browser = await setTestName(
            'Test the select of an option'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-select >
                <span slot='label'>England</span>
                    <option value='' ></option>
                    <option value='1'>King</option>
                    <option value='2'>Queen</option>
                </squid-select>`;
        }, bodyhandle);
        await page.waitForSelector('squid-select');
        const select = await page.evaluateHandle(body => {
            return body.querySelector('squid-select').renderRoot.querySelector('select');
        },bodyhandle);
        await select.select('2');
        const value = await page.$eval('squid-select', el => el.value);
        expect(value).toEqual('2');
        await page.$eval('squid-select', el => el.value = '1');
        const value2 = await page.$eval('squid-select', el => el.value);
        expect(value2).toEqual('1');
    });
});

const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-character-count',()=>{
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
    it('Test the accessibility of character-count', async () => {

        browser = difUtil.setTestName(
            'Test the accessibility of character-count'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-character-count max='10' >
                Test
                </squid-character-count>`;
        }, bodyhandle);
        await page.waitForSelector('squid-character-count');
        const results = await new AxePuppeteer(page).include('squid-character-count').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test if input value is added then counter goes up', async () => {

        browser = difUtil.setTestName(
            'Test if input value is added then counter goes up'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-character-count  id="test">Jason</squid-character-count>
                <input aria-describedby="test" maxlength='5'>`;
        }, bodyhandle);
        await page.waitForSelector('squid-character-count');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('input');
        },bodyhandle);
        await input.type('test');
        const counter = await page.$eval('squid-character-count',el => el.count);
        const max = await page.$eval('squid-character-count',el => el.max);
        expect(counter).toEqual(4);
        expect(max).toEqual(5);
        const image = await page.screenshot();
        const results = await browser.toMatchSnapshot(image);
        expect(results).toBeTruthy();
    });
});

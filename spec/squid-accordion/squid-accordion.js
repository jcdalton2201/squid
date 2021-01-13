
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-accordion',()=>{
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
    it('Test the accessibility of accordion',async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of accordion'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-accordion >
                    <span slot="summary">This it the title</span>
                    <div slot="content">
                        <p>Hello</p>
                    </div>
                </squid-accordion>`;
        }, bodyhandle);
        await page.waitForSelector('squid-accordion');
        const results = await new AxePuppeteer(page).include('squid-accordion').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the toggle of accordion',async()=>{
        browser = difUtil.setTestName(
            'Test the toggle of accordion'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-accordion >
                    <span slot="summary">This it the title</span>
                    <div slot="content">
                        <p>Hello</p>
                    </div>
                </squid-accordion>`;
        }, bodyhandle);
        await page.waitForSelector('squid-accordion');
        const button = await page.evaluateHandle(body => {
            body.querySelector('squid-accordion').focus;
            return body.querySelector('squid-accordion').renderRoot.querySelector('button');
        },bodyhandle);
        await button.click();
        const slot = await page.$eval('squid-accordion', el => el.renderRoot.querySelector('div[data-ref="content"]').getAttribute('aria-hidden'));
        expect(slot).toEqual('false');
    });
});

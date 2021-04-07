
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
describe('Unit and Functional Tests for squid-drawer',()=>{
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
    it('Test the accessibility of drawer',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of drawer'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-drawer >
                <span slot='button'>Info</span>
                <span slot='title'>Shakespears Quotes</span>
                <div> Hello</div>
                </squid-drawer>`;
        }, bodyhandle);
        await page.waitForSelector('squid-drawer');
        const results = await new AxePuppeteer(page).include('squid-drawer').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the we can open the drawer',async()=>{
        browser = await difUtil.setTestName(
            'Test the accessibility of drawer'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-drawer >
            <span slot='button'>Info</span>
            <span slot='title'>Shakespears Quotes</span>
            <div> Hello</div>
            </squid-drawer>`;
        }, bodyhandle);
        await page.waitForSelector('squid-drawer');
        const button = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-drawer').shadowRoot.querySelector('squid-button').shadowRoot.querySelector('button');
            return x;
        });
        await button.click();
        await page.waitForTimeout(500);
        const classList = await page.$eval('squid-drawer', el => el.shadowRoot.querySelector('.drawer-containter').classList);
        expect(classList[1]).toEqual('display');
        await page.waitForSelector('squid-drawer');
        const drawerclose = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-drawer').shadowRoot.querySelector('button');
            return x;
        });
        await drawerclose.click();
        await page.waitForTimeout(100);
        const drawer = await page.$eval('squid-drawer', el => el.shadowRoot.querySelector('button'));
        expect(drawer).toBeFalsy();
    });
});

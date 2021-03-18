
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
xdescribe('Unit and Functional Tests for squid-alert',()=>{
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
    it('Test the accessibility of alert',async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of alert'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-alert type='global'>
                <p slot="message"><strong class="emphasis">Global alert</strong> message goes here stating the message. </p>
        <span slot="button-text">Acknowledge</span>
                </squid-alert>`;
        }, bodyhandle);
        await page.waitForSelector('squid-alert');
        const results = await new AxePuppeteer(page).include('squid-alert').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test we can remove the alert', async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of alert'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-alert type='global'>
                <p slot="message"><strong class="emphasis">Global alert</strong> message goes here stating the message. </p>
        <span slot="button-text">Acknowledge</span>
                </squid-alert>`;
        }, bodyhandle);
        await page.waitForSelector('squid-alert');
        const button = await page.evaluateHandle(body => {
            return body.querySelector('squid-alert').renderRoot.querySelector('button');
        },bodyhandle);
        await button.click();
        const alert = await page.$('squid-alert');
        expect(alert).toBeFalsy();
    });
    it('Test we can remove the alert with ack', async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of alert with ack'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-alert type='warning'>
                <p slot="message"><strong class="emphasis">Global alert</strong> message goes here stating the message. </p>
        <span slot="button-text">Acknowledge</span>
                </squid-alert>`;
        }, bodyhandle);
        await page.waitForSelector('squid-alert');
        const button = await page.evaluateHandle(body => {
            return body.querySelector('squid-alert').renderRoot.querySelector('a');
        },bodyhandle);
        await button.click();
        const alert = await page.$('squid-alert');
        expect(alert).toBeFalsy();
    });
});

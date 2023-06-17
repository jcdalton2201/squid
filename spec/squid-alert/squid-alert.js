
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-alert',()=>{
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
    xit('Test the accessibility of alert',async()=>{
        browser = await setTestName(
            'Test the accessibility of alert'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-alert type='global'>
                <p slot="message"><strong class="emphasis">Global alert</strong> message goes here stating the message. </p>
        <span slot="button-text">Acknowledge</span>
                </squid-alert>`;
        }, bodyhandle);
        await page.waitForSelector('squid-alert');
        const results = await new AxePuppeteer(page).include('squid-alert').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test we can remove the alert', async()=>{
        browser = await setTestName(
            'Test the accessibility of alert'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
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
        browser = await setTestName(
            'Test the accessibility of alert with ack'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
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

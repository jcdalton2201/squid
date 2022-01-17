
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-radio-group',()=>{
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
    it('Test the accessibility of radio-group',async()=>{
        browser = await setTestName(
            'Test the accessibility of radio-group'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-radio-group >
                <squid-radio name='test' value='yes'>YES</squid-radio>
                <squid-radio name='test' value='no'>No</squid-radio>
                <squid-radio name='test' value='maybe'>Maybe</squid-radio>
                </squid-radio-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-radio-group');
        const results = await new AxePuppeteer(page).include('squid-radio-group').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the click on no and value for group is no',async()=>{
        browser = await setTestName(
            'Test the click on no and value for group is no'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-radio-group >
                <squid-radio name='test' value='yes'>YES</squid-radio>
                <squid-radio name='test' value='no'>No</squid-radio>
                <squid-radio name='test' value='maybe'>Maybe</squid-radio>
                </squid-radio-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-radio-group');
        const label = await page.evaluateHandle(body => {
            return body.querySelector('squid-radio[value="no"]').renderRoot.querySelector('label');
        },bodyhandle);
        await label.click();
        const value = await page.$eval('squid-radio-group', item => item.value);
        expect(value).toEqual('no');
    });
    it('Test the keyup and keydown with space will set a group.',async()=>{
        browser = await setTestName(
            'Test the keyup and keydown with space will set a group'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-radio-group >
                <squid-radio name='test' value='yes'>YES</squid-radio>
                <squid-radio name='test' value='no'>No</squid-radio>
                <squid-radio name='test' value='maybe'>Maybe</squid-radio>
                </squid-radio-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-radio-group');
        const label = await page.evaluateHandle(body => {
            return body.querySelector('squid-radio[value="yes"]').renderRoot.querySelector('label');
        },bodyhandle);
        const group = await page.evaluateHandle(body => {
            return body.querySelector('squid-radio-group');
        },bodyhandle);
        await label.focus();
        await group.press('ArrowUp');
        await group.press('ArrowUp');
        await group.press('ArrowUp');
        await group.press('ArrowUp');
        await group.press('ArrowUp');
        await group.press('ArrowDown');
        await group.press('ArrowDown');
        await group.press('ArrowDown');
        await group.press('ArrowDown');
        await group.press('Space');
        const value = await page.$eval('squid-radio-group', item => item.value);
        expect(value).toEqual('maybe');
    });
    it('Test the hardset of a group.',async()=>{
        browser = await setTestName(
            'Test the hardset of a group.'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-radio-group >
                <squid-radio name='test' value='yes'>YES</squid-radio>
                <squid-radio name='test' value='no'>No</squid-radio>
                <squid-radio name='test' value='maybe'>Maybe</squid-radio>
                </squid-radio-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-radio-group');
        await page.$eval('squid-radio-group', item => item.value = 'maybe');
        const input = await page.$eval('squid-radio[value="maybe"]', el => el.checked);
        expect(input).toBeTruthy();
    });
});

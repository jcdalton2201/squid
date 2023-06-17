
import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';
describe('Unit and Functional Tests for squid-stepper',()=>{
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
    xit('Test the accessibility of stepper',async()=>{
        browser = await setTestName(
            'Test the accessibility of stepper'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-stepper label='Traveller Class'>
                    <option value='1'>First</option>
                    <option value='2'>Buisness</option>
                    <option value='3'>Coach</option>
                </squid-stepper>`;
        }, bodyhandle);
        await page.waitForSelector('squid-stepper');
        const results = await new AxePuppeteer(page).include('squid-stepper').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the we can increase and decrease of stepper',async()=>{
        browser = await setTestName(
            'Test the accessibility of stepper'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-stepper label='Traveller Class'>
                <option value='1'>First</option>
                <option value='2'>Buisness</option>
                <option value='3'>Coach</option>
            </squid-stepper>`;
        }, bodyhandle);
        await page.waitForSelector('squid-stepper');
        const increase = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-stepper').shadowRoot.querySelector('.increase');
            return x;
        });
        await increase.click();
        let success = await page.$eval('squid-stepper', el => el.value);
        expect(success).toEqual('2');
        const decrease = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-stepper').shadowRoot.querySelector('.decrease');
            return x;
        });
        await decrease.click();
        const success1 = await page.$eval('squid-stepper', el => el.value);
        expect(success1).toEqual('1');
        await increase.click();
        await increase.click();
        await increase.click();
        success = await page.$eval('squid-stepper', el => el.value);
        expect(success).toEqual('3');
    });
    it('Test the we can change the options view.',async()=>{
        browser = await setTestName(
            'Test the accessibility of stepper'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-stepper label='Traveller Class'>
                <option value='1'>First</option>
                <option value='2'>Buisness</option>
                <option value='3'>Coach</option>
            </squid-stepper>`;
        }, bodyhandle);
        await page.waitForSelector('squid-stepper');
        await page.evaluateHandle(() => {
            document.querySelector('squid-stepper').innerHTML = `
            <option value='airplane'>Airplane</option>
            <option value='train'>Train</option>
            <option value='boat'>Boat</option>`;
        });
        let success = await page.$eval('squid-stepper', el => el.value);
        expect(success).toEqual('airplane');
    });
    it('Test the we can set the attribute of value.',async()=>{
        browser = await setTestName(
            'Test the accessibility of stepper'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-stepper label='Traveller Class' value='2'>
                <option value='1'>First</option>
                <option value='2'>Buisness</option>
                <option value='3'>Coach</option>
            </squid-stepper>`;
        }, bodyhandle);
        await page.waitForSelector('squid-stepper');
        let success = await page.$eval('squid-stepper', el => el.value);
        expect(success).toEqual('2');
    });
});


import { setTestName, createPage, createBodyHandle } from '../diff-util.js';
import { AxePuppeteer } from '@axe-core/puppeteer';
import  { isValid } from '../axe-util.js';

describe('Unit and Functional Tests for squid-credit-card',()=>{
    let browser = null;
    let page = null;
    // let testNumber = '4585939311097061';
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
    it('Test the accessibility of credit-card',async()=>{
        browser = await setTestName(
            'Test the accessibility of credit-card'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-credit-card >
                Test
                </squid-credit-card>`;
        }, bodyhandle);
        await page.waitForSelector('squid-credit-card');
        const results = await new AxePuppeteer(page).include('squid-credit-card').analyze();
        expect(isValid(results)).toBeTruthy();
    });
    it('Test the luhn algoritum',async()=>{
        browser = await setTestName(
            'Test the accessibility of credit-card'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-credit-card >
                Test
                </squid-credit-card>`;
        }, bodyhandle);
        await page.waitForSelector('squid-credit-card');
        let creditCard = await page.$eval('squid-credit-card', el => {
            return el.luhnCheck('4585939311097061');
        });
        expect(creditCard).toBeTruthy();
        creditCard = await page.$eval('squid-credit-card', el => {
            return el.luhnCheck('1234567890123456');
        });
        expect(creditCard).toBeFalsy();
    });
    it('Test the typing of credit card number',async()=>{
        browser = await setTestName(
            'Test the typing of credit card numbe'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-credit-card >
                Test
                </squid-credit-card>`;
        }, bodyhandle);
        await page.waitForSelector('squid-credit-card');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-credit-card').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('123456789');
        // const creditCard = await page.$eval('squid-credit-card', el => el.value);
        // expect(creditCard).toEqual('123456789');
        const button = await page.evaluateHandle(body => {
            return body.querySelector('squid-credit-card').renderRoot.querySelector('button');
        },bodyhandle);
        await button.click();
        await page.$eval('squid-credit-card',el => el.value = 987654321);
        await button.click();
    });
    it('Test the validation of credit card number',async()=>{
        browser = await setTestName(
            'Test the validation of credit card numbe'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-credit-card >
                Test
                </squid-credit-card>`;
        }, bodyhandle);
        await page.waitForSelector('squid-credit-card');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-credit-card').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('123456789');
        page.$eval('squid-credit-card', el => el.blur());
        let errorMessage = await page.$eval('squid-credit-card', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage).toEqual('Please enter in a valid credit card number');
        await input.type('0123456');
        page.$eval('squid-credit-card', el => el.blur());
        errorMessage = await page.$eval('squid-credit-card', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage).toEqual('Please enter in a valid credit card number');
        await input.press('ArrowLeft');
        for(let i =0 ; i< 16;i++) {
            await input.press('Backspace');
        }
        await input.type('4585939311097061');
        page.$eval('squid-credit-card', el => el.blur());
        errorMessage = await page.$eval('squid-credit-card', el => el.shadowRoot.querySelector('squid-helpers')._message);
        expect(errorMessage).toEqual('');
    });
    it('Test the obfuscate of credit card number',async()=>{
        browser = await setTestName(
            'Test the typing of credit card numbe'
        );
        page = await createPage(browser);
        const bodyhandle = await createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-credit-card >
                Test
                </squid-credit-card>`;
        }, bodyhandle);
        await page.waitForSelector('squid-credit-card');
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-credit-card').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('4585939311097061');
        let creditCard = await page.$eval('squid-credit-card', el => el._obfuscatedValue );
        expect(creditCard).toEqual('••••••••••••7061');
        const button = await page.evaluateHandle(body => {
            return body.querySelector('squid-credit-card').renderRoot.querySelector('.toggle-button');
        },bodyhandle);
        await button.click();
        creditCard = await page.$eval('squid-credit-card', el => el.value);
        // expect(creditCard).toEqual('4585939311097061');
        
    });
        
});

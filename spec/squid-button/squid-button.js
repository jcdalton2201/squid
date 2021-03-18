
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
xdescribe('Unit and Functional Tests for squid-button',()=>{
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
    afterAll(async () => {
    });
    it('Test the accessibility of button',async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of button'
        );
        page = await difUtil.createPage(browser);
        // coverageUtil.startCoverage(page);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-button >
                Test
                </squid-button>`;
        }, bodyhandle);
        await page.waitForSelector('squid-button');
        const results = await new AxePuppeteer(page).include('squid-button').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test we can click the button', async () =>{
        browser = difUtil.setTestName(
            'Test we can click the button'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-button >
                Test
                </squid-button><div id="test"></div>`;
            element.querySelector('squid-button').addEventListener('click',() => {
                element.querySelector('#test').innerHTML = 'Success';
            });
        }, bodyhandle);
        await page.waitForSelector('squid-button');
        const button = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-button').shadowRoot.querySelector('button');
            return x;
        });
        await button.click();
        const success = await page.$eval('div', el => el.innerHTML);
        expect(success).toEqual('Success');
        
        
    });
    it('Test we can submit a form', async () =>{
        browser = difUtil.setTestName(
            'Test we can submit a form'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<form href='#'><squid-button >
                Test
                </squid-button></form><div id="test"></div>`;
            element.querySelector('squid-button').addEventListener('click',() => {
                element.querySelector('#test').innerHTML = 'Success';
            });
        }, bodyhandle);
        await page.waitForSelector('squid-button');
        const button = await page.evaluateHandle(() => {
            const x = document.querySelector('squid-button').shadowRoot.querySelector('button');
            return x;
        });
        await button.click();
        const success = await page.$eval('div', el => el.innerHTML);
        expect(success).toEqual('Success');
    });
    
});

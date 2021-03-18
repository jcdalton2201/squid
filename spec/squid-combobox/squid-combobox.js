
const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
xdescribe('Unit and Functional Tests for squid-combobox',()=>{
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
    it('Test the accessibility of combobox',async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of combobox'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
                `<squid-combobox >
                <span slot='label'>Star Wars</span>
                </squid-combobox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-combobox');
        await page.evaluateHandle(body => {
            return body.querySelector('squid-currency');
        },bodyhandle);
        const results = await new AxePuppeteer(page).include('squid-combobox').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the we will type a char and the select box will open',async()=>{
        browser = difUtil.setTestName(
            'Test the we will type a char and the select box will open'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-combobox >
            <span slot='label'>Star Wars</span>
            </squid-combobox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-combobox');
        await page.evaluateHandle(body => {
            const item = body.querySelector('squid-combobox');
            item.data = ['Harry Potter','Ron Weasley','Hermione Granger','Albus Dumbledore','Severus Snape','Sirius Black','Voldemort'];
            return body.querySelector('squid-combobox');
        },bodyhandle);
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-combobox').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('se');
        await input.press('ArrowLeft');
        await input.press('ArrowDown');
        await input.press('ArrowDown');
        await input.press('ArrowUp');
        await input.press('ArrowRight');
        await input.press('Enter');
        const grid = await page.$eval('squid-combobox', el => el.value);
        expect(grid).toEqual('Severus Snape');
    });
    it('Test the we will type a select a item',async()=>{
        browser = difUtil.setTestName(
            'Test the we will type a select a item'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-combobox >
            <span slot='label'>Star Wars</span>
            </squid-combobox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-combobox');
        await page.evaluateHandle(body => {
            const item = body.querySelector('squid-combobox');
            item.data = ['Harry Potter','Ron Weasley','Hermione Granger','Albus Dumbledore','Severus Snape','Sirius Black','Voldemort'];
            return body.querySelector('squid-combobox');
        },bodyhandle);
        const input = await page.evaluateHandle(body => {
            return body.querySelector('squid-combobox').renderRoot.querySelector('input');
        },bodyhandle);
        await input.type('s');
        const select = await page.evaluateHandle(body => {
            return body.querySelector('squid-combobox').renderRoot.querySelector('.result-row');
        },bodyhandle);
        await select.click();
        const grid = await page.$eval('squid-combobox', el => el.value);
        expect(grid).toEqual('Ron Weasley');
        await input.press('Escape');
        const grid2 = await page.$eval('squid-combobox', el => el.value);
        expect(grid2).toEqual('');
    });
    it('Test the we can set the value',async()=>{
        browser = difUtil.setTestName(
            'Test the we can set the value'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-combobox >
            <span slot='label'>Star Wars</span>
            </squid-combobox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-combobox');
        await page.evaluateHandle(body => {
            const item = body.querySelector('squid-combobox');
            item.data = ['Harry Potter','Ron Weasley','Hermione Granger','Albus Dumbledore','Severus Snape','Sirius Black','Voldemort'];
            item.value = 'Harry Potter';
            return body.querySelector('squid-combobox');
        },bodyhandle);
        const grid = await page.$eval('squid-combobox', el => el.value);
        expect(grid).toEqual('Harry Potter');
    });
    it('Test the we can set the value to an object',async()=>{
        browser = difUtil.setTestName(
            'Test the we can set the value'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML =
            `<squid-combobox datavalue='key' datalabel='value'>
            <span slot='label'>Star Wars</span>
            </squid-combobox>`;
        }, bodyhandle);
        await page.waitForSelector('squid-combobox');
        await page.evaluateHandle(body => {
            const item = body.querySelector('squid-combobox');
            item.data = [
                {
                    key:'1',
                    value:'Harry Potter'
                },
                {
                    key:'2',
                    value:'Ron Weasley'},
                {
                    key:'3',
                    value:'Hermione Granger'},
                {
                    key:'4',
                    value:'Albus Dumbledore'},
                {
                    key:'5',
                    value:'Severus Snape'},
                {
                    key:'6',
                    value:'Sirius Black'},
                {
                    key:'7',
                    value:'Voldemort'}];
            item.value = '1';
            return body.querySelector('squid-combobox');
        },bodyhandle);
        const grid = await page.$eval('squid-combobox', el => el.value);
        expect(grid).toEqual('1');
    });
});

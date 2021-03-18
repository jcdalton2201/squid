const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');
xdescribe('Unit and Functional Tests for squid-checkbox-group', () => {
    let browser = null;
    let page = null;
    beforeAll(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });
    afterEach(async () => {
        const bodyhandle = await page.$('body');
        await page.evaluate((element) => {
            element.innerHTML = '';
        }, bodyhandle);
    });
    afterAll(async () => {});
    it('Test the accessibility of checkbox-group', async () => {
        browser = difUtil.setTestName(
            'Test the accessibility of checkbox-group'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate((element) => {
            element.innerHTML = `<squid-checkbox-group legend="Favorite Star Wars Movies">
                <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
            <squid-checkbox value="Rogue One">Rogue One</squid-checkbox>
            <squid-checkbox value="Solo">Solo</squid-checkbox>
                </squid-checkbox-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-checkbox-group');
        const results = await new AxePuppeteer(page)
            .include('squid-checkbox-group')
            .analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the accessibility of checkbox-group', async () => {
        browser = difUtil.setTestName(
            'Test the accessibility of checkbox-group'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate((element) => {
            element.innerHTML = `<form action="javascript:void(0)"><squid-checkbox-group legend="Favorite Star Wars Movies">
                <squid-checkbox value="The Last Jedi">The Last Jedi</squid-checkbox>
            <squid-checkbox value="Rogue One" class='findme'>Rogue One</squid-checkbox>
            <squid-checkbox value="Solo">Solo</squid-checkbox>
                </squid-checkbox-group></form>`;
        }, bodyhandle);
        await page.waitForSelector('squid-checkbox-group');
        const checkbox = await page.evaluateHandle(body => {
            return body.querySelector('.findme').renderRoot.querySelector('label');
        },bodyhandle);
        await checkbox.click();
        const value = await page.$eval('squid-checkbox-group',elem => elem.value);
        const elements = await page.$eval('squid-checkbox-group',elem => elem.elements.map(e =>e.value));
        expect(value).toEqual(['Rogue One']);
        expect(elements).toEqual(['The Last Jedi','Rogue One','Solo']);
    });
});


const difUtil = require('../diff-util.js');
const { AxePuppeteer } = require('@axe-core/puppeteer');
const AxeUtil = require('../axe-util.js');

xdescribe('Unit and Functional Tests for squid-accordion-group',()=>{
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
    it('Test the accessibility of accordion-group',async()=>{
        browser = difUtil.setTestName(
            'Test the accessibility of accordion-group'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML = `<squid-accordion-group>
            <!-- one -->
            <squid-accordion>
              <span slot="summary">The first accordion in the group</span>
              <div slot="content">
                <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
              </div>
            </squid-accordion>
            
            <!-- two -->
            <squid-accordion>
              <span slot="summary">The middle child</span>
              <div slot="content">
                <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
              </div>
            </squid-accordion>
            
            <!-- three -->
            <squid-accordion>
              <span slot="summary">Accordion number three</span>
              <div slot="content">
                <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
              </div>
            </squid-accordion>
            </squid-accordion-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-accordion-group');
        const results = await new AxePuppeteer(page).include('squid-accordion-group').analyze();
        expect(AxeUtil.isValid(results)).toBeTruthy();
    });
    it('Test the click of a group works in accordion-group',async()=>{
        browser = difUtil.setTestName(
            'Test the click of a group works in accordion-group'
        );
        page = await difUtil.createPage(browser);
        const bodyhandle = await difUtil.createBodyHandle(page);
        await page.evaluate(element => {
            element.innerHTML = `<squid-accordion-group>
            <!-- one -->
            <squid-accordion>
              <span slot="summary">The first accordion in the group</span>
              <div slot="content">
                <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
              </div>
            </squid-accordion>
            
            <!-- two -->
            <squid-accordion id='two'>
              <span slot="summary">The middle child</span>
              <div slot="content">
                <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
              </div>
            </squid-accordion>
            
            <!-- three -->
            <squid-accordion>
              <span slot="summary">Accordion number three</span>
              <div slot="content">
                <p>Four score and seven years ago our fathers brought forth on this continent a new nation conceived in liberty and dedicated to the proposition that all men are created equal.</p>
              </div>
            </squid-accordion>
            </squid-accordion-group>`;
        }, bodyhandle);
        await page.waitForSelector('squid-accordion-group');
        const button = await page.evaluateHandle(body => {
            body.querySelector('squid-accordion').focus;
            return body.querySelector('squid-accordion').renderRoot.querySelector('button');
        },bodyhandle);
        await button.click();
        const button2 = await page.evaluateHandle(body => {
            body.querySelector('squid-accordion').focus;
            return body.querySelector('#two').renderRoot.querySelector('button');
        },bodyhandle);
        await button2.click();

        await button.press('ArrowDown');
        await button.press('ArrowUp');
        const slot = await page.$eval('squid-accordion', el => el.renderRoot.querySelector('div[data-ref="content"]').getAttribute('aria-hidden'));
        expect(slot).toEqual('true');
    });
});

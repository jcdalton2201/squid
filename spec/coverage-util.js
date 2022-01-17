import V8ToCoverage from './v8_to_coverage.js';
import pti from 'puppeteer-to-istanbul';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const v8ToCoverage = new V8ToCoverage();
v8ToCoverage._baseDir =  __dirname.replace('spec','');

/**
 * start the coverage for page.
 * @param {Page} page puppetter page
 */
export const startCoverage =  function createPage(page) {
    return Promise.all([page.coverage.startJSCoverage()]);
};

/**
 * stop the coverage for a page
 * @param {PAge} page puppetter page
 */
export const stopCoverage =  function createPage(page) {
    return Promise.all([page.coverage.stopJSCoverage()]);
};

/**
 * 
 * @param {Coverage} jsCoverage 
 * @param {Object} config 
 */
export const displayCoverage =async function displayCoverage(jsCoverage, config = { include:[]}) {
    try {
        const coverage = [...jsCoverage];
        const tracked = coverage.filter((item) => {
            return config.include.includes(item.url.substring(item.url.lastIndexOf('/') + 1));
        });
        for (let index = 0; index < tracked.length; index++) {
            if(tracked[index].text.includes('//# sourceMappingURL=')){
                await v8ToCoverage.write(tracked[index]);
            } else {
                pti.write(jsCoverage);
            }
        }
            
    } catch (error) {
        console.error(error);
    }
};
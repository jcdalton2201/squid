import { defineConfig } from 'cypress';
import setupNodeEvents from  '@cypress/code-coverage/plugins';

export default defineConfig({
    fixturesFolder: false,
    e2e: {
        setupNodeEvents,
        video: false,
    },
    
});

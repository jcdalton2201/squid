import { defineConfig } from 'cypress';

export default defineConfig({
    fixturesFolder: false,
    experimentalShadowDomSupport: true,
    e2e: {
        supportFile: false,
    },
});

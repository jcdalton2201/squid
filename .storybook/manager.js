import { addons } from '@storybook/manager-api';
import yourTheme from './squidTheme';

addons.setConfig({
  theme: yourTheme,
  sidebar: {
    showRoots: false,
  }
});
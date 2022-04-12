import { addons } from '@storybook/addons';
import StorybookTheme from '/.storybook/StorybookTheme';

// Sets the UI theme to the parameters set within StorybookTheme.ts
addons.setConfig({
  theme: StorybookTheme,
});

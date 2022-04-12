import ThemeComponent from '/src/styles/ThemeComponent';
import { viewports } from '/.storybook/viewports';
import { themes } from '@storybook/theming';
import { Canvas } from '/.storybook/Canvas';
import { Meta, Story } from '@storybook/addon-docs';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // enables the use of the full selection of viewports instead of the default 3
  viewport: {
    viewports: viewports,
  },
  docs: {
    components: {
      // Allows us to use our custom Canvas which shows mobile view in the docs
      Canvas,
      /**
       * These next two aren't strictly necessary for the technique, but
       * anything you define here doesn't need imported in your mdx file, which
       * I find convenient.
       */
      Meta,
      Story,
    },
    // remove theme property if you want to use light mode for only the docs
    theme: themes.dark,
  },
};

export const decorators = [
  (Story) => (
    <ThemeComponent>
      <Story />
    </ThemeComponent>
  ),
];

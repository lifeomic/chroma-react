import { create } from '@storybook/theming';
import logo from './logo.svg';
import { withTheme } from '../stories/decorators';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Chroma Design System',
      brandImage: logo,
    }),
    isFullscreen: false,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#484049',
      },
      {
        name: 'blue',
        value: '#006eb7',
      },
    ],
  },
};

export const decorators = [withTheme];

import * as React from 'react';
import { create } from '@storybook/theming';
import logo from './logo.svg';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '../src/styles';

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

export const decorators = [
  (story) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme()}>
        <React.Fragment>
          <CssBaseline />
          {story()}
        </React.Fragment>
      </ThemeProvider>
    </StyledEngineProvider>
  ),
];

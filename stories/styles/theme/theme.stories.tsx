import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import JSONTree from 'react-json-tree';
import black from '../../../src/colors/black';
import blue from '../../../src/colors/blue';
import charcoal from '../../../src/colors/charcoal';
import darkGraphite from '../../../src/colors/darkGraphite';
import graphite from '../../../src/colors/graphite';
import green from '../../../src/colors/green';
import grey from '../../../src/colors/grey';
import navy from '../../../src/colors/navy';
import orange from '../../../src/colors/orange';
import purple from '../../../src/colors/purple';
import red from '../../../src/colors/red';
import yellow from '../../../src/colors/yellow';
import { Button } from '../../../src/components/Button';
import {
  createPalette,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '../../../src/styles';

export default {
  title: 'Styles/Theme',
  parameters: {
    docs: {
      description: {
        component: `# createTheme

## Usage

Chroma requires that a theme be created for each application. To accomplish this a \`createTheme\` utility is exported. 
By default, if no arguments are passed, the theme for PHC will be used. Any part of the theme can be overridden by 
passing different options to createTheme. Anything passed in is deeply merged with the base theme.

\`\`\`tsx
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@lifeomic/chroma-react/styles';
import { black } from '@lifeomic/chroma-react/colors/black';
import connectGreen from './colors/customGreen';

const connectTheme = createTheme({
  palette: {
    primary: black,
    secondary: connectGreen,
    green: connectGreen,
  },
});

const App: React.FC = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={connectTheme}>{...app}</ThemeProvider>
  </StyledEngineProvider>
);
\`\`\`

## Links

- [Utility Source](https://github.com/lifeomic/chroma-react/blob/master/src/styles/createTheme.ts)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/styles/theme/theme.stories.tsx)`,
      },
    },
  },
};

const paletteOptions = {
  black,
  blue,
  charcoal,
  darkGraphite,
  graphite,
  green,
  grey,
  navy,
  orange,
  purple,
  red,
  yellow,
};

const palette = createPalette();

export const ThemeStory: React.FC = () => {
  const primaryPaletteKey: keyof typeof paletteOptions = select(
    'Primary Palette',
    Object.keys(paletteOptions),
    'blue'
  ) as any;

  const secondaryPaletteKey: keyof typeof paletteOptions = select(
    'Secondary Palette',
    Object.keys(paletteOptions),
    'green'
  ) as any;

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: paletteOptions[primaryPaletteKey],
          secondary: paletteOptions[secondaryPaletteKey],
        },
      }),
    [primaryPaletteKey, secondaryPaletteKey]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: palette.common.white,
          }}
        >
          <Button>Text Button</Button>
          <Button>Text Button</Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: palette.common.white,
          }}
        >
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="outlined">Outlined Button</Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: palette.common.white,
          }}
        >
          <Button variant="contained">Contained Button</Button>
          <Button variant="contained">Contained Button</Button>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const ThemeExplorer = () => <JSONTree data={createTheme()} />;

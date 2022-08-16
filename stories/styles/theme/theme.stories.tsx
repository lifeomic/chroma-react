import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '../../../src/styles';
import { Container } from '../../storyComponents/Container';
import md from './default.md';

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

const ThemeStory: React.FC = () => {
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
        <Container theme="light">
          <Button>Text Button</Button>
          <Button>Text Button</Button>
        </Container>
        <Container theme="light">
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="outlined">Outlined Button</Button>
        </Container>
        <Container theme="light">
          <Button variant="contained">Contained Button</Button>
          <Button variant="contained">Contained Button</Button>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

storiesOf('Styles/Theme', module)
  .add('createTheme', () => <ThemeStory />, {
    readme: { content: md },
  })
  .add('Theme Explorer', () => <JSONTree data={createTheme()} />);

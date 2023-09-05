import { StoryObj, StoryFn, Meta } from '@storybook/react';
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
import { makeStyles } from '@mui/styles';

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

const meta: Meta<any> = {
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
  argTypes: {
    'Primary Palette': {
      control: { type: 'radio', options: Object.keys(paletteOptions) },
    },
    'Secondary Palette': {
      control: { type: 'radio', options: Object.keys(paletteOptions) },
    },
  },
};
export default meta;
type Story = StoryObj<any>;

const palette = createPalette();

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: palette.common.white,
  },
}));

const TemplateTheme: StoryFn<any> = (args) => {
  console.log('ARGS', args);
  const classes = useStyles({});

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary:
            paletteOptions[
              args['Primary Palette'] as keyof typeof paletteOptions
            ],
          secondary:
            paletteOptions[
              args['Secondary Palette'] as keyof typeof paletteOptions
            ],
        },
      }),
    [args]
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <Button>Text Button</Button>
          <Button>Text Button</Button>
        </div>
        <div className={classes.container}>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="outlined">Outlined Button</Button>
        </div>
        <div className={classes.container}>
          <Button variant="contained">Contained Button</Button>
          <Button variant="contained">Contained Button</Button>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const ThemeStory: Story = {
  render: TemplateTheme,
  args: {
    'Primary Palette': 'blue',
    'Secondary Palette': 'green',
  },
};

export const ThemeExplorer = () => <JSONTree data={createTheme()} />;

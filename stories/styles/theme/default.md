# createTheme

<!-- STORY -->

## Usage

Chroma requires that a theme be created for each application. To accomplish this a `createTheme` utility is exported. By default, if no arguments are passed, the theme for PHC will be used. Any part of the theme can be overridden by passing different options to createTheme. Anything passed in is deeply merged with the base theme.

```tsx
import { ThemeProvider, createTheme } from '@lifeomic/chroma-react/styles';
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
  <ThemeProvider theme={connectTheme}>{...app}</ThemeProvider>
);
```

## Links

- [Utility Source](https://github.com/lifeomic/chroma-react/blob/master/src/styles/createTheme.ts)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/styles/theme/theme.stories.tsx)

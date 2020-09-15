# Getting Started

## Theming

After installation is completed, you'll want to setup your React application to
utilize the default theme. The theme is used throughout all of the Chroma
components for colors, typography options, etc.

Are the default theme options not what your product is looking for? No problem!
The theme can be customized to your product's needs via overrides. More
information on creating overrides for a theme can be found under
[the createTheme story](https://chroma.dev.lifeomic.com/?path=/story/styles-theme--createtheme).

### Creating a Theme for your Application

**NOTE: If you are using the default theme, skip this step.**

To create a theme for your application, leverage the `createTheme` utility from
Chroma. Create a new file (typically under `src/styles/theme/index.<js|ts>`)
with the following:

```js
// Example Path: src/styles/theme/index.js
import { createTheme } from '@lifeomic/chroma-react-react/styles';

export const theme = createTheme({});
```

### Consuming the Theme

React application's typically have an entry point. This may be named `Root`,
`App`, or something else entirely. No matter what you name this file or entry
point, you'll need to leverage the `ThemeProvider` from Material-UI to consume
the theme created above.

```js
// Example Path: src/App.js
import { ThemeProvider } from '@lifeomic/chroma-react-react/styles';
import { theme } from './styles/theme'; // Path to your theme

const App = () => (
  <ThemeProvider theme={theme}>
    {*/ Remaining app content */}
  </ThemeProvider>
);
```

## Start Using Chroma

Now with the ThemeProvider all setup, you should be all set to start using
Chroma components in your application. Happy developing!

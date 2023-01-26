# Chroma React

<p align="center">
  <a href="https://github.com/lifeomic/chroma-react">
    <img src="https://github.com/lifeomic/chroma-react/blob/master/.github/chroma@2x.png?raw=true" alt="Chroma logo" width="300" />
  </a>
</p>

<br>

Chroma is an open source design system from the team at LifeOmic. It is built with React and TypeScript. The goal of Chroma is to provide design-approved components to developers to speed up their development process and build visual consistency throughout web applications.

<a href="https://lifeomic.github.io/chroma-react" target="_blank" rel="noopener noreferrer">
  View our Storybook
</a>

## Usage

To get started with Chroma, follow these steps:

1. Install dependencies

   ```bash
   yarn add @lifeomic/chroma-react @material-ui/styles react-router-dom
   ```

   Chroma leverages `@material-ui/styles` for CSS-in-JS and `react-router-dom` for link-related components.

2. Wrap your application with the `StyledEngineProvider` and `ThemeProvider` provided by Chroma.

   ```jsx
   import {
     StyledEngineProvider,
     ThemeProvider,
   } from '@lifeomic/chroma-react/styles';

   function App({ children }) {
     return (
       <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
       </StyledEngineProvider>
     );
   }
   ```

3. Start using components!

   ```jsx
   import { Button } from '@lifeomic/chroma-react/components/Button';

   <Button variant="contained">Button</Button>;
   ```

4. Add jest config (optional)

   To include the jest configuration setup, add the following:

   ```js
   setupFilesAfterEnv: ['@lifeomic/chroma-react/jest'];
   ```

   **Note**: Some components may require support for CSS imports (e.g. `import 'some-module/styles.css`). All major bundlers can support this behavior (example: webpack's [css-loader](https://webpack.js.org/loaders/css-loader/)).

## Theming

Want to override the default theme of Chroma? No problem!

1. Create your component-level overrides and palette overrides. Chroma leverages Material-UI's global theme variation [to override specific component styles](https://material-ui.com/customization/components/#5-global-theme-variation).

   ```js
   // theme.ts
   import {
     createPalette,
     createTheme,
     Theme,
   } from '@lifeomic/chroma-react/styles';
   import { Overrides } from '@lifeomic/chroma-react/styles/overrides';

   // The overrides specified here will be *global* component overrides!
   export const overrides = (theme: Theme): Overrides => ({
     ChromButton: {
       root: {
         background: 'red',
       },
       outlined: {
         border: '1px solid red',
       },
     },
   });

   export const palette = createPalette({
     primary: {
       main: '#02bff1',
     },
   });

   export const theme = createTheme({
     overrides,
     palette,
   });
   ```

2. Update your theme provider.

   ```jsx
   import { ThemeProvider } from '@lifeomic/chroma-react/styles';
   import { theme } from './theme';

   function App({ children }) {
     return (
       <StyledEngineProvider injectFirst>
         <ThemeProvider theme={theme}>{children}</ThemeProvider>
       </StyledEngineProvider>
     );
   }
   ```

## Importing Component Styles Only?

Need to build a custom component, but want to use the styles hook of an existing Chroma component?

```jsx
import { useStyles } from '@lifeomic/chroma-react/components/Button/Button';

const CustomButton = ({}) => {
  const { classes } = useStyles();
  return <button className={classes.root}>Custom Button</button>;
};
```

## Development

### Getting Started

First you'll need to install the dependencies for the repository.

```bash
yarn
```

### Running Storybook

To run the Storybook for Chroma, run the following command.

```bash
yarn start
```

After some time, the Storybook will open. Any local changes made will be reflected in Storybook.

### Build

To run the build for the repository, run the following command.

```bash
yarn build
```

This will generate an output in the `dist/` directory.

### Linking

#### **Yarn**

Sometimes linking your local changes is helpful when developing new features or bug fixes. To do so, run the following commands.

```bash
yarn build # Run a build so your changes are included
cd dist # You must link from the `dist` directory; otherwise, this will not work
yarn link
```

Now you can navigate to your application and run the following command.

```bash
yarn link @lifeomic/chroma-react
```

After running the above command, your local version of Chroma is now linked and all changes locally should reflect in your application.

#### **Yalc**

`yarn link` not working? You may want to try `yalc`.

First you need to global install `yalc` with: `yarn global add yalc`.

In your local version of Chroma:

```bash
yarn build # Run a build so your changes are included
cd dist # You must link from the `dist` directory; otherwise, this will not work
yalc publish
```

In your application, run the following:

```bash
yalc add @lifeomic/chroma-react@0.0.0
yarn install
yarn start
```

At the time of this writing, `yalc update` was not working properly so anytime you make changes in Chroma (after already linking) you'll need to repeat the steps above.

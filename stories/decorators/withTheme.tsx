import CssBaseline from '@material-ui/core/CssBaseline';
// Once https://github.com/storybookjs/storybook/issues/8160 gets resolved,
// we should be able to re-add these typings
// import { StoryDecorator } from '@storybook/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '../../src/styles';

const phcTheme = createTheme();

// See comment above, the typings for latest storybook are out of whack
// So we are defaulting to `any` here.
const withTheme: any = (story: any) => (
  <ThemeProvider theme={phcTheme}>
    <React.Fragment>
      <CssBaseline />
      {story()}
    </React.Fragment>
  </ThemeProvider>
);

export default withTheme;

import { CssBaseline } from '@mui/material';
// Once https://github.com/storybookjs/storybook/issues/8160 gets resolved,
// we should be able to re-add these typings
// import { StoryDecorator } from '@storybook/react';
import * as React from 'react';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '../../src/styles';

const phcTheme = createTheme();

// See comment above, the typings for latest storybook are out of whack
// So we are defaulting to `any` here.
const withTheme: any = (story: any) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={phcTheme}>
      <React.Fragment>
        <CssBaseline />
        {story()}
      </React.Fragment>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default withTheme;

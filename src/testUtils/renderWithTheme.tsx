import { Queries, render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { createTheme, StyledEngineProvider, ThemeProvider } from '../styles';

export const theme = createTheme();

export function renderWithTheme<Q extends Queries>(
  ui: React.ReactElement<any>,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>
) {
  const { rerender, ...result } = render(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </StyledEngineProvider>,
    options
  );

  const wrappedRerender = (ui: React.ReactElement<any>) =>
    rerender(
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </StyledEngineProvider>
    );

  return {
    ...result,
    rerender: wrappedRerender,
  };
}

import { Queries, render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '../styles';

export const theme = createTheme();

export function renderWithTheme<Q extends Queries>(
  ui: React.ReactElement<any>,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>
) {
  const { rerender, ...result } = render(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>,
    options
  );

  const wrappedRerender = (ui: React.ReactElement<any>) =>
    rerender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

  return {
    ...result,
    rerender: wrappedRerender,
  };
}

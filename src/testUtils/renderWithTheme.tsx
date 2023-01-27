import { CacheProvider } from '@emotion/react';
import { Queries, render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '../styles';
import createCache from '@emotion/cache';

export const theme = createTheme();
const cache = createCache({
  key: 'mui',
  prepend: true,
});

export function renderWithTheme<Q extends Queries>(
  ui: React.ReactElement<any>,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>
) {
  const { rerender, ...result } = render(
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </CacheProvider>,
    options
  );

  const wrappedRerender = (ui: React.ReactElement<any>) =>
    rerender(
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </CacheProvider>
    );

  return {
    ...result,
    rerender: wrappedRerender,
  };
}

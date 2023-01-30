import { LinearProgress } from './index';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';

const testId = 'LinearProgress';

test('it renders a LinearProgress', async () => {
  const { findByRole } = renderWithTheme(
    <LinearProgress data-testid={testId} />
  );

  const progress = await findByRole('progressbar');
  expect(progress).toBeInTheDocument();
  expect(progress.getAttribute('aria-valuemin')).toEqual('0');
  expect(progress.getAttribute('aria-valuemax')).toEqual('100');
});

test('it sets the `aria-valuenow` attribute to the value provided', async () => {
  const { findByTestId } = renderWithTheme(
    <LinearProgress data-testid={testId} value={50} />
  );

  const progress = await findByTestId(testId);
  expect(progress.getAttribute('aria-valuenow')).toEqual('50');
});

test('it sets a style transform with the given value', async () => {
  const { findByTestId } = renderWithTheme(
    <LinearProgress data-testid={testId} value={15} />
  );

  const progress = await findByTestId(testId);
  expect(progress.firstElementChild?.getAttribute('style')).toEqual(
    'transform: translateX(-85%);'
  );
});

test('it applies the indeterminate class when `variant="indeterminate"`', async () => {
  const { findByTestId } = renderWithTheme(
    <LinearProgress data-testid={testId} variant="indeterminate" />
  );

  const progress = await findByTestId(testId);
  expect(
    hasClass(progress.firstElementChild, 'ChromaLinearProgress-indeterminate')
  ).toBe(true);
});

test('it does NOT set a style transform when `variant="indeterminate"`', async () => {
  const { findByTestId } = renderWithTheme(
    <LinearProgress data-testid={testId} value={15} variant="indeterminate" />
  );

  const progress = await findByTestId(testId);
  expect(progress.firstElementChild?.getAttribute('style')).toBeFalsy();
});

test('it does NOT set the `aria-value*` attributes when `variant="indeterminate"`', async () => {
  const { findByTestId } = renderWithTheme(
    <LinearProgress data-testid={testId} variant="indeterminate" />
  );

  const progress = await findByTestId(testId);
  expect(progress.getAttribute('aria-valuenow')).toEqual(null);
  expect(progress.getAttribute('aria-valuemin')).toEqual(null);
  expect(progress.getAttribute('aria-valuemax')).toEqual(null);
});

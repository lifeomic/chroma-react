import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { DotLoader } from './';

const testId = 'DotLoader';

test('it renders a DotLoader', async () => {
  const { findByTestId, findByRole } = renderWithTheme(
    <DotLoader data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();

  const ariaRole = await findByRole('progressbar');
  expect(ariaRole).toBeTruthy();
});

test('it renders a DotLoader with "size={0}"', async () => {
  const { findByTestId } = renderWithTheme(
    <DotLoader data-testid={testId} size={0} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDotLoader-size0')).toBe(true);
});

test('it renders a DotLoader with "size={1}"', async () => {
  const { findByTestId } = renderWithTheme(
    <DotLoader data-testid={testId} size={1} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDotLoader-size1')).toBe(true);
});

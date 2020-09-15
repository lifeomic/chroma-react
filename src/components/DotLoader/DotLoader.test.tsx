import * as React from 'react';
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
  expect(root).toHaveClass('ChromaDotLoader-size0');
});

test('it renders a DotLoader with "size={1}"', async () => {
  const { findByTestId } = renderWithTheme(
    <DotLoader data-testid={testId} size={1} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDotLoader-size1');
});

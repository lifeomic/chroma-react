import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SecondaryNavigation } from '../SecondaryNavigation';

const testId = 'SecondaryNavigation';

test('it renders a SecondaryNavigation', async () => {
  const { findByTestId } = renderWithTheme(
    <SecondaryNavigation data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('role')).toEqual('navigation');
  expect(root.getAttribute('aria-label')).toEqual('Secondary');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <SecondaryNavigation data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it applies the the "horizontal" variant', async () => {
  const { findByTestId } = renderWithTheme(
    <SecondaryNavigation data-testid={testId} variant="horizontal" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSecondaryNavigation-horizontalNav')).toBe(true);
});

test('it renders children', async () => {
  const { findByTestId } = renderWithTheme(
    <SecondaryNavigation>
      <li data-testid={testId}></li>
    </SecondaryNavigation>
  );
  const child = await findByTestId(testId);
  expect(child).toBeInTheDocument();
});

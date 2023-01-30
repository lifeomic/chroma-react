import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SmallTileContent } from './index';

const testId = 'SmallTileContent';

test('it renders a SmallTileContent', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileContent data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileContent className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it spreads props', async () => {
  const role = 'link';

  const { findByTestId } = renderWithTheme(
    <SmallTileContent data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it renders the provided "text"', async () => {
  const { findByText } = renderWithTheme(
    <SmallTileContent data-testid={testId} text="text" />
  );
  const root = await findByText(/text/);
  expect(root).toBeInTheDocument();
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <SmallTileContent>
      <div data-testid={testId} />
    </SmallTileContent>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

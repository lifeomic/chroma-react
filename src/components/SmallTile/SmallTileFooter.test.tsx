import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SmallTileFooter } from './index';

const testId = 'SmallTileFooter';

test('it renders a SmallTileFooter', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it spreads props', async () => {
  const role = 'link';

  const { findByTestId } = renderWithTheme(
    <SmallTileFooter data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it renders the provided "text"', async () => {
  const { findByText } = renderWithTheme(
    <SmallTileFooter data-testid={testId} text="text" />
  );
  const root = await findByText(/text/);
  expect(root).toBeInTheDocument();
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter>
      <div data-testid={testId} />
    </SmallTileFooter>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

test('it renders with `justify="space-between"`', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter data-testid={testId} justify="space-between" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSmallTileFooter-justifyBetween')).toBe(true);
});

test('it renders with `justify="center"`', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter data-testid={testId} justify="center" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSmallTileFooter-justifyCenter')).toBe(true);
});

test('it renders with `justify="flex-end"`', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter data-testid={testId} justify="flex-end" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSmallTileFooter-justifyEnd')).toBe(true);
});

test('it renders with `justify="flex-start"`', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTileFooter data-testid={testId} justify="flex-start" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaSmallTileFooter-justifyStart')).toBe(true);
});

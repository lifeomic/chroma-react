import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconTileHero } from './index';

const testId = 'IconTileHero';

test('it renders an IconTileHero', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTileHero data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTileHero className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it spreads props', async () => {
  const role = 'link';

  const { findByTestId } = renderWithTheme(
    <IconTileHero data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <IconTileHero>
      <div data-testid={testId} />
    </IconTileHero>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

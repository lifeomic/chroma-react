import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconTileContent } from './index';

const testId = 'IconTileContent';

test('it renders an IconTileContent', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTileContent data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTileContent className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it spreads props', async () => {
  const role = 'link';

  const { findByTestId } = renderWithTheme(
    <IconTileContent data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it renders the provided "text"', async () => {
  const { findByText } = renderWithTheme(
    <IconTileContent data-testid={testId} text="text" />
  );
  const root = await findByText(/text/);
  expect(root).toBeInTheDocument();
});

test('it renders the provided "caption"', async () => {
  const { findByText } = renderWithTheme(
    <IconTileContent data-testid={testId} caption="caption" />
  );
  const root = await findByText(/caption/);
  expect(root).toBeInTheDocument();
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <IconTileContent>
      <div data-testid={testId} />
    </IconTileContent>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

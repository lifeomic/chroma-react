import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconTile } from './index';

const testId = 'IconTile';

test('it renders an IconTile', async () => {
  const { findByTestId } = renderWithTheme(<IconTile data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTile className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it spreads props', async () => {
  const role = 'link';
  const { findByTestId } = renderWithTheme(
    <IconTile data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it applies the proper attributes when onClick is provided', async () => {
  const { findByTestId } = renderWithTheme(
    <IconTile onClick={() => ({})} data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaIconTile-cursorPointer')).toBe(true);
  expect(root.getAttribute('role')).toEqual('button');
  expect(root.getAttribute('tabIndex')).toEqual('0');
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <IconTile>
      <div data-testid={testId} />
    </IconTile>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

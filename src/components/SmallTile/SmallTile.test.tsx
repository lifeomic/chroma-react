import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SmallTile } from './index';

const testId = 'SmallTile';

test('it renders an SmallTile', async () => {
  const { findByTestId } = renderWithTheme(<SmallTile data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTile className="custom-class-name" data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

test('it spreads props', async () => {
  const role = 'link';
  const { findByTestId } = renderWithTheme(
    <SmallTile data-testid={testId} role={role} />
  );
  const root = await findByTestId(testId);
  expect(root.getAttribute('role')).toBe(role);
});

test('it applies the proper attributes when onClick is provided', async () => {
  const { findByTestId } = renderWithTheme(
    <SmallTile onClick={() => ({})} data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaSmallTile-cursorPointer');
  expect(root.getAttribute('role')).toEqual('button');
  expect(root.getAttribute('tabIndex')).toEqual('0');
});

test('it renders children', async () => {
  const testId = 'children';
  const { findByTestId } = renderWithTheme(
    <SmallTile>
      <div data-testid={testId} />
    </SmallTile>
  );

  const children = await findByTestId(testId);
  expect(children).toBeInTheDocument();
});

import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Paper } from './';

const testId = 'Paper';

test('it renders a Paper', async () => {
  const { findByTestId } = renderWithTheme(<Paper data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPaper-root');
});

test('it renders a Paper with "padding=0"', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} padding={0} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPaper-padding0');
});

test('it renders a Paper with "padding=1"', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} padding={1} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPaper-padding1');
});

test('it renders a Paper with "padding=2"', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} padding={2} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPaper-padding2');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class-name');
});

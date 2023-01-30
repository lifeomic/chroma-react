import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Paper } from './';

const testId = 'Paper';

test('it renders a Paper', async () => {
  const { findByTestId } = renderWithTheme(<Paper data-testid={testId} />);
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPaper-root')).toBe(true);
});

test('it renders a Paper with "padding=0"', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} padding={0} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPaper-padding0')).toBe(true);
});

test('it renders a Paper with "padding=1"', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} padding={1} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPaper-padding1')).toBe(true);
});

test('it renders a Paper with "padding=2"', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} padding={2} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPaper-padding2')).toBe(true);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Paper data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PopoverActions } from '../Popover';

const testId = 'PopoverActions';

test('it renders a PopoverActions', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders children', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverActions>
      <div data-testid="children" />
    </PopoverActions>
  );

  const children = await findByTestId('children');
  expect(children).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} className="custom-class-name" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class-name')).toBe(true);
});

test('it applies "justify: flex-end" by default', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverActions-justifyEnd')).toBe(true);
});

test('it applies "justify: center"', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} justify="center" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverActions-justifyCenter')).toBe(true);
});

test('it applies "justify: flex-start"', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} justify="flex-start" />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaPopoverActions-justifyStart')).toBe(true);
});

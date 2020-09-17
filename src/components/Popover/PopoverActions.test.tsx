import * as React from 'react';
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
  expect(root).toHaveClass('custom-class-name');
});

test('it applies "justify: flex-end" by default', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverActions-justifyEnd');
});

test('it applies "justify: center"', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} justify="center" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverActions-justifyCenter');
});

test('it applies "justify: flex-start"', async () => {
  const testId = 'popover-actions';
  const { findByTestId } = renderWithTheme(
    <PopoverActions data-testid={testId} justify="flex-start" />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaPopoverActions-justifyStart');
});

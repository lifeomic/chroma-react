import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SelectOption, SelectOptionProps } from './index';
import { waitFor } from '@testing-library/dom';

const testId = 'SelectOption';

const getBaseProps = (): SelectOptionProps => ({
  value: 'value',
});

test('it renders a SelectOption', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectOption {...props} data-testid={testId} />
  );

  const option = await findByTestId(testId);
  expect(option).toBeInTheDocument();
});

test('it renders a checked SelectOption', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectOption {...props} data-testid={testId} isChecked />
  );

  // Required for a11y
  const visuallyHiddenCheck = await findByText('✓');
  expect(visuallyHiddenCheck).toBeInTheDocument();
});

test('it renders the provided title', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectOption {...props} data-testid={testId} title="foo" />
  );

  const title = await findByText('foo');
  expect(title).toBeInTheDocument();
});

test('it renders the provided subtitle', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectOption {...props} data-testid={testId} title="foo" subtitle="bar" />
  );

  const subtitle = await findByText('bar');
  expect(subtitle).toBeInTheDocument();
});

test('it does not render subtitle if title is falsy', async () => {
  const props = getBaseProps();
  const { queryByText } = renderWithTheme(
    <SelectOption {...props} data-testid={testId} subtitle="bar" />
  );

  await waitFor(() => {
    expect(queryByText('bar')).not.toBeInTheDocument();
  });
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectOption
      {...props}
      data-testid={testId}
      className="custom-class-name"
    />
  );

  const option = await findByTestId(testId);
  expect(option).toHaveClass('custom-class-name');
});

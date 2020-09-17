import { fireEvent, within } from '@testing-library/dom';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Select, SelectOption, SelectProps, SelectTestIds } from './index';
import { waitFor } from '@testing-library/dom';
import { press } from 'reakit-test-utils';

const testId = 'Select';
const optionId = 'SelectOption';

const getBaseProps = (): SelectProps => ({
  label: 'label',
});

test('it renders a Select', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select {...props} data-testid={testId} />
  );

  const select = await findByTestId(testId);
  expect(select).toBeInTheDocument();
});

test('it renders the provided label', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Select {...props} data-testid={testId} label="Select one" />
  );

  const label = await findByText('Select one');
  expect(label).toBeInTheDocument();
});

test('it renders the provided helpMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Select {...props} data-testid={testId} helpMessage="help!" />
  );

  const helpMessage = await findByText('help!');
  expect(helpMessage).toBeInTheDocument();
});

it('it renders the provided placeholder content based on value prop', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const placeholderText = 'some-placeholder-text';
  const title = 'option1';
  props.placeholder = placeholderText;
  const { queryByTestId, queryByText, rerender } = renderWithTheme(
    <Select {...props} data-testid={testId} onChange={mockFn}>
      <SelectOption title={title} value={title} data-testid={optionId} />
    </Select>
  );

  expect(queryByText(title)).toBe(null);
  expect(queryByTestId(SelectTestIds.placeholderText)?.textContent).toBe(
    placeholderText
  );

  rerender(
    <Select {...props} value={title} data-testid={testId} onChange={mockFn}>
      <SelectOption title={title} value={title} data-testid={optionId} />
    </Select>
  );
  expect(queryByText(title)).not.toBe(null);
  expect(queryByTestId(SelectTestIds.placeholderText)).toBeNull();

  rerender(
    <Select
      {...props}
      value="invalid_option"
      data-testid={testId}
      onChange={mockFn}
    >
      <SelectOption title={title} value={title} data-testid={optionId} />
    </Select>
  );

  expect(queryByText(title)).toBe(null);
  expect(queryByTestId(SelectTestIds.placeholderText)?.textContent).toBe(
    placeholderText
  );
});

test('it renders the provided errorMessage (when also hasError)', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Select {...props} data-testid={testId} hasError errorMessage="error!" />
  );

  const errorMessage = await findByText('error!');
  expect(errorMessage).toBeInTheDocument();
});

test('it *does not* render errorMessage when not hasError', async () => {
  const props = getBaseProps();
  const { queryByText } = renderWithTheme(
    <Select {...props} data-testid={testId} errorMessage="should not show up" />
  );

  await act(async () => {
    await waitFor(() => {
      expect(queryByText('should not show up')).not.toBeInTheDocument();
    });
  });
});

test('it renders the provided select options', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <Select {...props} data-testid={testId}>
      <SelectOption title="option1" value="option1" data-testid={optionId} />
    </Select>
  );

  const select = await findByTestId(testId);

  fireEvent.click(select);

  const listOptions = await findByRole('listbox');
  expect(listOptions).toBeInTheDocument();

  const option = await findByTestId(optionId);
  expect(option).toBeInTheDocument();
});

test('it *does not* render the select options if select not clicked', async () => {
  const props = getBaseProps();
  const { queryByTestId } = renderWithTheme(
    <Select {...props} data-testid={testId}>
      <SelectOption title="option1" value="option1" data-testid={optionId} />
    </Select>
  );

  const option = queryByTestId(optionId);
  expect(option).not.toBeInTheDocument();
});

test('it calls the provided onChange (with args) when an option is clicked', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select {...props} data-testid={testId} onChange={mockFn}>
      <SelectOption
        title="option1"
        value="option1"
        data-testid={optionId}
        // Adding "meta" for this test as well...
        meta={{ foo: 'bar' }}
      />
    </Select>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  await act(async () => {
    const option = await findByTestId(optionId);
    fireEvent.click(option);
  });

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toBeCalledWith('option1', { foo: 'bar' });
});

test('it sets the default checked state on options', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select {...props} value="option2" data-testid={testId}>
      <SelectOption title="option1" value="option1" />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
      <SelectOption title="option3" value="option3" />
    </Select>
  );

  const select = await findByTestId(testId);

  fireEvent.click(select);
  const checkedOption = await findByTestId(optionId);
  const visuallyHiddenCheck = await within(checkedOption).findByText('✓');
  expect(visuallyHiddenCheck).toBeInTheDocument();
});

test('it applies the provided "popoverAriaLabel" when no "label"', async () => {
  const props = getBaseProps();
  const { findByLabelText } = renderWithTheme(
    <Select {...props} label="" popoverAriaLabel="ARIA" data-testid={testId} />
  );

  const select = await findByLabelText(/ARIA/);
  expect(select).toBeInTheDocument();
});

test('it can be operated using only the keyboard', async () => {
  const props = getBaseProps();
  const mockFn = jest.fn();

  const { findByTestId, findAllByRole } = renderWithTheme(
    <Select {...props} onChange={mockFn} data-testid={testId}>
      <SelectOption title="option1" value="option1" />
      <SelectOption title="option2" value="option2" />
    </Select>
  );

  const select = await findByTestId(testId);

  fireEvent.click(select);

  const [option1, option2] = await findAllByRole('option');

  // First option should always have focus
  expect(option1).toHaveFocus();
  // Arrow down should focus next item
  press.ArrowDown();
  expect(option2).toHaveFocus();
  // Arrow up should focus previous item
  press.ArrowUp();
  expect(option1).toHaveFocus();
  // Change back to option 2
  press.ArrowDown();
  // Enter should "submit" the select
  press.Enter();
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith('option2', undefined);
});

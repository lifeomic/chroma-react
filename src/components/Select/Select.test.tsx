import { fireEvent, within } from '@testing-library/dom';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import {
  GroupHeading,
  Select,
  SelectOption,
  SelectProps,
  SelectTestIds,
} from './index';
import { waitFor } from '@testing-library/dom';
import { press } from 'reakit-test-utils';
import { IconComponent } from '../../testUtils/IconComponent';

const headingId = 'GroupHeading';
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

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByTestId('iconComponent');
  expect(icon).toHaveClass('ChromaSelect-labelIcon');
});

test('it renders an inverse color icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select
      {...props}
      color="inverse"
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByTestId('iconComponent');
  expect(icon).toHaveClass('ChromaSelect-labelIconInverse');
});

test('it renders the provided secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Select {...props} data-testid={testId} secondaryLabel="Optional" />
  );

  const label = await findByText('Optional');
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

test('it renders the provided group headings', async () => {
  const props = getBaseProps();
  const { findByTestId, findByRole } = renderWithTheme(
    <Select {...props} data-testid={testId}>
      <GroupHeading data-select-role="heading" data-testid={headingId}>
        Group 1
      </GroupHeading>
      <SelectOption title="option1" value="option1" />
    </Select>
  );

  const select = await findByTestId(testId);

  fireEvent.click(select);

  const listOptions = await findByRole('listbox');
  expect(listOptions).toBeInTheDocument();

  const heading = await findByTestId(headingId);
  expect(heading).toBeInTheDocument();
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

test('it *does not* render the group headings if select not clicked', async () => {
  const props = getBaseProps();
  const { queryByTestId } = renderWithTheme(
    <Select {...props}>
      <GroupHeading data-select-role="heading" data-testid={headingId}>
        Group 1
      </GroupHeading>
      <SelectOption title="option1" value="option1" />
    </Select>
  );

  const heading = queryByTestId(headingId);
  expect(heading).not.toBeInTheDocument();
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

test('it can be operated using only the keyboard with headings', async () => {
  const props = getBaseProps();
  const mockFn = jest.fn();

  const { findByTestId, findAllByRole } = renderWithTheme(
    <Select {...props} onChange={mockFn} data-testid={testId}>
      <GroupHeading data-select-role="heading">Group 1</GroupHeading>
      <SelectOption title="option1" value="option1" />
      <GroupHeading data-select-role="heading">Group 2</GroupHeading>
      <SelectOption title="option2" value="option2" />
    </Select>
  );

  const select = await findByTestId(testId);

  fireEvent.click(select);

  // heading1, option1, heading2, option2
  const [, option1, , option2] = await findAllByRole('option');

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

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select {...props} data-testid={testId} id="unique-id" />
  );

  const select = await findByTestId(testId);
  expect(select.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select
      {...props}
      data-testid={testId}
      errorMessage="Error!"
      hasError
      id="unique-id"
    />
  );

  const select = await findByTestId(testId);
  expect(select.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select
      {...props}
      data-testid={testId}
      helpMessage="Help Message"
      id="unique-id"
    />
  );

  const select = await findByTestId(testId);
  expect(select.getAttribute('aria-describedby')).toEqual('help-for-unique-id');
});

test('it applies aria-describedby for helpMessage and errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Select
      {...props}
      data-testid={testId}
      hasError
      helpMessage="Help Message"
      id="unique-id"
      errorMessage="Error!"
    />
  );

  const select = await findByTestId(testId);
  expect(select.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id help-for-unique-id'
  );
});

test('it can render a disabled option', async () => {
  const props = getBaseProps();
  const mockFn = jest.fn();

  const { findByTestId } = renderWithTheme(
    <Select {...props} onChange={mockFn} data-testid={testId}>
      <SelectOption title="option1" value="option1" />
      <SelectOption
        data-testid="disabled-option"
        disabled
        title="option2"
        value="option2"
      />
    </Select>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  const option = await findByTestId('disabled-option');
  expect(option.parentElement).toHaveAttribute('aria-disabled', 'true');
});

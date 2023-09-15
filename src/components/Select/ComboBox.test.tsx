import { act } from 'react-dom/test-utils';
import { ComboBox, ComboBoxProps, SelectOption } from './index';
import { fireEvent, waitFor, within } from '@testing-library/dom';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import * as React from 'react';
import { press } from 'reakit-test-utils';
import { IconComponent } from '../../testUtils/IconComponent';

const testId = 'ComboBox';
const optionId = 'SelectOption';

const getBaseProps = (): ComboBoxProps => ({
  label: 'label',
});

test('it renders a ComboBox', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} />
  );

  const select = await findByTestId(testId);
  expect(select).toBeInTheDocument();
});

test('it renders the provided label', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} label="Select one or many" />
  );

  const label = await findByText('Select one or many');
  expect(label).toBeInTheDocument();
});

test('it renders the provided secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} secondaryLabel="Optional" />
  );

  const label = await findByText('Optional');
  expect(label).toBeInTheDocument();
});

test('it renders the provided helpMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} helpMessage="help!" />
  );

  const helpMessage = await findByText('help!');
  expect(helpMessage).toBeInTheDocument();
});

test('it renders the provided errorMessage (when also hasError)', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} hasError errorMessage="error!" />
  );

  const errorMessage = await findByText('error!');
  expect(errorMessage).toBeInTheDocument();
});

test('it *does not* render errorMessage when not hasError', async () => {
  const props = getBaseProps();
  const { queryByText } = renderWithTheme(
    <ComboBox
      {...props}
      data-testid={testId}
      errorMessage="should not show up"
    />
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
    <ComboBox {...props} data-testid={testId}>
      <SelectOption title="option1" value="option1" data-testid={optionId} />
    </ComboBox>
  );

  const select = await findByTestId(testId);

  fireEvent.click(select);

  const listOptions = await findByRole('listbox');
  expect(listOptions).toBeInTheDocument();

  const option = await within(listOptions).findByTestId(optionId);
  expect(option).toBeInTheDocument();
});

test('it applies the provided "popoverAriaLabel" when no "label"', async () => {
  const props = getBaseProps();
  const { findByLabelText } = renderWithTheme(
    <ComboBox
      {...props}
      label=""
      popoverAriaLabel="ARIA"
      data-testid={testId}
    />
  );

  const combobox = await findByLabelText(/ARIA/);
  expect(combobox).toBeInTheDocument();
});

test('it calls the provided onChange (with args) when a single option is clicked', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} onChange={mockFn}>
      <SelectOption
        title="option1"
        value="option1"
        data-testid={optionId}
        meta={{ foo: 'bar' }}
      />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  await act(async () => {
    const option = await findByTestId(optionId);
    fireEvent.click(option);
  });

  expect(mockFn).toBeCalledTimes(1);
  // Expect the `value` to be returned in the first arg array
  // Expect the `meta` to be returned in the second arg array
  expect(mockFn).toBeCalledWith(['option1'], [{ foo: 'bar' }]);
});

test('it calls the provided onChange (with args) when multiple options are clicked', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId, findAllByTestId } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} onChange={mockFn}>
      <SelectOption
        title="option1"
        value="option1"
        data-testid={optionId}
        meta={{ foo: 'bar' }}
      />
      <SelectOption
        title="option2"
        value="option2"
        data-testid={optionId}
        meta={{ foo: 'bar2' }}
      />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  await act(async () => {
    const [option1, option2] = await findAllByTestId(optionId);
    fireEvent.click(option1);
    fireEvent.click(option2);
  });

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).nthCalledWith(1, ['option1'], [{ foo: 'bar' }]);
  expect(mockFn).nthCalledWith(2, ['option2'], [{ foo: 'bar2' }]);
});

test('it sets the default checked state on options', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ComboBox {...props} value={['option2']} data-testid={testId}>
      <SelectOption title="option1" value="option1" />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
      <SelectOption title="option3" value="option3" />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  const checkedOption = await findByTestId(optionId);
  const visuallyHiddenCheck = await within(checkedOption).findByText('✓');
  expect(visuallyHiddenCheck).toBeInTheDocument();
});

test('it sets the default, multiple checked state', async () => {
  const props = getBaseProps();
  const { findByTestId, findAllByTestId } = renderWithTheme(
    <ComboBox {...props} value={['option2', 'option3']} data-testid={testId}>
      <SelectOption title="option1" value="option1" />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
      <SelectOption title="option3" value="option3" data-testid={optionId} />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  const [checkedOption2, checkedOption3] = await findAllByTestId(optionId);

  const visuallyHiddenCheck2 = await within(checkedOption2).findByText('✓');
  expect(visuallyHiddenCheck2).toBeInTheDocument();

  const visuallyHiddenCheck3 = await within(checkedOption3).findByText('✓');
  expect(visuallyHiddenCheck3).toBeInTheDocument();
});

/**
 * This tests the case where we have multiple options selected (which is driven by the options
 * provided by "value"), and then a selected option is clicked again, thus removing it. Chroma
 * does not remove the selection for you, it just provides the latest selected options back
 * to you via `onChange`.  Consumers will then tie into the `onChange`, and adjust the prop
 * sent as `value` to `<ComboBox />`
 */
test('it calls "onChange" with the modified results, when an option is currently selected and then clicked, removing it from the list', async () => {
  const mockFn = jest.fn();

  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ComboBox
      {...props}
      // Setup default selections of option2 + option3
      value={['option2', 'option3']}
      onChange={mockFn}
      data-testid={testId}
    >
      <SelectOption title="option1" value="option1" />
      {/* We will click option2, and expect `onChange` to give us back only option3 */}
      <SelectOption title="option2" value="option2" data-testid={optionId} />
      <SelectOption title="option3" value="option3" meta={{ foo: 'bar' }} />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  const checkedOption = await findByTestId(optionId);
  fireEvent.click(checkedOption);

  expect(mockFn).toBeCalledWith(['option3'], [{ foo: 'bar' }]);
});

test('it applies the "aria-multiselectable" attribute to the listbox role element (a11y verification)', async () => {
  const props = getBaseProps();
  const { findByRole, findByTestId } = renderWithTheme(
    <ComboBox {...props} data-testid={testId}>
      <SelectOption title="test" value="test" />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  const ul = await findByRole('listbox');
  expect(ul).toBeInTheDocument();
  expect(ul).toHaveAttribute('aria-multiselectable');
});

test('it can be operated using only the keyboard', async () => {
  const props = getBaseProps();
  const mockFn = jest.fn();

  const { findByTestId, findAllByRole } = renderWithTheme(
    <ComboBox {...props} onChange={mockFn} data-testid={testId}>
      <SelectOption title="option1" value="option1" data-testid={optionId} />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
    </ComboBox>
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
  expect(mockFn).toHaveBeenCalledWith(['option2'], [undefined]);
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ComboBox {...props} data-testid={testId} id="unique-id" />
  );
  const select = await findByTestId(testId);
  expect(select.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ComboBox
      {...props}
      data-testid={testId}
      hasError
      id="unique-id"
      errorMessage="error!"
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
    <ComboBox
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
    <ComboBox
      {...props}
      data-testid={testId}
      errorMessage="error!"
      hasError
      helpMessage="Help Message"
      id="unique-id"
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
    <ComboBox {...props} onChange={mockFn} data-testid={testId}>
      <SelectOption
        disabled
        title="option1"
        value="option1"
        data-testid="disabled-option"
      />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
    </ComboBox>
  );

  const select = await findByTestId(testId);
  fireEvent.click(select);

  const option = await findByTestId('disabled-option');
  expect(option.parentElement).toHaveAttribute('aria-disabled', 'true');
});

test('it renders an * when the field is required', async () => {
  const props = getBaseProps();
  const mockFn = jest.fn();

  const { findByText } = renderWithTheme(
    <ComboBox {...props} onChange={mockFn} showRequiredLabel>
      <SelectOption title="option1" value="option1" />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
    </ComboBox>
  );

  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(asterisk).toHaveClass('ChromaSelect-required');
});

test('it renders an inverse color * when the field is required', async () => {
  const props = getBaseProps();
  const mockFn = jest.fn();

  const { findByText } = renderWithTheme(
    <ComboBox {...props} onChange={mockFn} showRequiredLabel color="inverse">
      <SelectOption title="option1" value="option1" />
      <SelectOption title="option2" value="option2" data-testid={optionId} />
    </ComboBox>
  );

  const asterisk = await findByText('*');
  expect(asterisk).toHaveClass(
    'ChromaSelect-required ChromaSelect-requiredInverse'
  );
});

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <ComboBox
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaSelect-labelIcon');
});

import { fireEvent, within } from '@testing-library/dom';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SelectAutoComplete, SelectAutoCompleteProps } from './index';
import { waitFor } from '@testing-library/dom';
import { IconComponent } from '../../testUtils/IconComponent';

const testId = 'SelectAutoComplete';
const optionId = 'SelectOption';

const items = [
  { ['data-testid']: optionId, title: 'Option 1', value: 'option 1' },
  {
    subtitle:
      'This is a subtitle. For options that need a little extra description.',
    title: 'Option 2',
    value: 'option 2',
  },
  { title: 'Option 3', value: 'option 3' },
  { title: 'Option 4', value: 'option 4' },
];

const getBaseProps = (): SelectAutoCompleteProps => ({
  items,
  label: 'label',
});

test('it renders a SelectAutoComplete', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} />
  );

  const autoComplete = await findByTestId(testId);
  expect(autoComplete).toBeInTheDocument();
});

test('it renders the provided label', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} label="Select one" />
  );

  const label = await findByText('Select one');
  expect(label).toBeInTheDocument();
});

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectAutoComplete
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByTestId('iconComponent');
  expect(icon).toHaveClass('ChromaTextField-labelIcon');
});

test('it renders an inverse color icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectAutoComplete
      {...props}
      color="inverse"
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByTestId('iconComponent');
  expect(icon).toHaveClass('ChromaTextField-labelIconInverse');
});

test('it renders the provided secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectAutoComplete
      {...props}
      data-testid={testId}
      secondaryLabel="Optional"
    />
  );

  const label = await findByText('Optional');
  expect(label).toBeInTheDocument();
});

test('it renders the provided helpMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} helpMessage="help!" />
  );

  const helpMessage = await findByText('help!');
  expect(helpMessage).toBeInTheDocument();
});

test('it renders the provided errorMessage (when also hasError)', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <SelectAutoComplete
      {...props}
      data-testid={testId}
      hasError
      errorMessage="error!"
    />
  );

  const errorMessage = await findByText('error!');
  expect(errorMessage).toBeInTheDocument();
});

test('it *does not* render errorMessage when not hasError', async () => {
  const props = getBaseProps();
  const { queryByText } = renderWithTheme(
    <SelectAutoComplete
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
  const { findByTestId, findByLabelText, findByRole } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} />
  );

  const toggleButton = await findByLabelText('toggle select options');
  fireEvent.click(toggleButton);

  const listOptions = await findByRole('listbox');
  expect(listOptions).toBeInTheDocument();

  const option = await findByTestId(optionId);
  expect(option).toBeInTheDocument();
});

test('it *does not* render the select options if select not clicked', async () => {
  const props = getBaseProps();
  const { queryByTestId } = renderWithTheme(<SelectAutoComplete {...props} />);

  const option = queryByTestId(optionId);
  expect(option).not.toBeInTheDocument();
});

test('it calls the provided onSelect when an option is clicked', async () => {
  const mockFn = jest.fn();
  const props = getBaseProps();
  const { findByTestId, findByLabelText } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} onSelect={mockFn} />
  );

  const toggleButton = await findByLabelText('toggle select options');
  fireEvent.click(toggleButton);

  await act(async () => {
    const option = await findByTestId(optionId);
    fireEvent.click(option);
  });

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toBeCalledWith('option 1');
});

test('it sets the default checked state on options', async () => {
  const props = getBaseProps();
  const { findByLabelText, findByTestId } = renderWithTheme(
    <SelectAutoComplete
      {...props}
      selectedItem={items[0]}
      data-testid={testId}
    />
  );

  const toggleButton = await findByLabelText('toggle select options');
  fireEvent.click(toggleButton);

  const checkedOption = await findByTestId(optionId);
  const visuallyHiddenCheck = await within(checkedOption).findByText('✓');
  expect(visuallyHiddenCheck).toBeInTheDocument();
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} id="unique-id" />
  );

  const select = await findByTestId(testId);
  expect(select.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <SelectAutoComplete
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
    <SelectAutoComplete
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
    <SelectAutoComplete
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
  const items = [
    {
      ['data-testid']: optionId,
      disabled: true,
      title: 'Option 1',
      value: 'option 1',
    },
  ];
  const props = getBaseProps();

  const { findByLabelText, findByTestId } = renderWithTheme(
    <SelectAutoComplete {...props} data-testid={testId} items={items} />
  );

  const toggleButton = await findByLabelText('toggle select options');
  fireEvent.click(toggleButton);

  const option = await findByTestId(optionId);
  expect(option.parentElement).toHaveAttribute('disabled', '');
});

test('it renders an * when the field is required', async () => {
  const props = getBaseProps();

  const { findByText } = renderWithTheme(
    <SelectAutoComplete {...props} showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(asterisk).toHaveClass('ChromaTextField-required');
});

test('it renders an inverse color * when the field is required', async () => {
  const props = getBaseProps();

  const { findByText } = renderWithTheme(
    <SelectAutoComplete {...props} showRequiredLabel color="inverse" />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toHaveClass(
    'ChromaTextField-required ChromaTextField-requiredInverse'
  );
});

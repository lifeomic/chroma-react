import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Checkbox, CheckboxProps } from './index';

const testId = 'Checkbox';

const getBaseProps = (): CheckboxProps => ({
  id: 'id',
  label: 'Check Label',
});

test('it renders a Checkbox', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox {...props} data-testid={testId} />
  );

  const checkbox = await findByTestId(testId);
  expect(hasClass(checkbox, 'ChromaCheckbox-input')).toBe(true);
  expect(checkbox.getAttribute('aria-checked')).toEqual('false');
  expect(checkbox.getAttribute('type')).toEqual('checkbox');
  expect(checkbox.getAttribute('tabIndex')).toEqual('0');
});

test('it renders an inverse color Checkbox with help and error messages', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <Checkbox
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      hasError
      errorMessage="Checkbox error message"
      data-testid={testId}
    />
  );

  const checkbox = await findByTestId(testId);
  expect(hasClass(checkbox, 'ChromaCheckbox-inputInverse')).toBe(true);

  const help = await findByText(/Helpful text/);
  expect(hasClass(help, 'ChromaFormHelpMessage-inverse')).toBe(true);

  const error = await findByText(/Checkbox error message/);
  expect(hasClass(error, 'ChromaFormErrorMessage-inverse')).toBe(true);
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox {...props} data-testid={testId} className="custom-class-name" />
  );
  const checkbox = await findByTestId(testId);
  expect(hasClass(checkbox?.parentElement, 'custom-class-name')).toBe(true);
});

test('it renders a checked-by-default Checkbox', async () => {
  const props = getBaseProps();
  const handleChange = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Checkbox {...props} onChange={handleChange} checked data-testid={testId} />
  );

  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('aria-checked')).toEqual('true');
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Checkbox {...props} helpMessage="Helpful text" data-testid={testId} />
  );
  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state Checkbox with the provided errorMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Checkbox
      {...props}
      hasError
      errorMessage="Checkbox error message"
      data-testid={testId}
    />
  );
  const errorMessage = await findByText(/Checkbox error message/);
  expect(errorMessage).toBeInTheDocument();
});

test('it uses the name to generate a unique id', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox label={props.label} name="unique-name" data-testid={testId} />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('name')).toEqual('unique-name');
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox data-testid={testId} label={props.label} id="unique-id" />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox
      data-testid={testId}
      errorMessage="Error!"
      hasError
      id="unique-id"
      label={props.label}
    />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox
      data-testid={testId}
      helpMessage="Helper text"
      id="unique-id"
      label={props.label}
    />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('aria-describedby')).toEqual(
    'help-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage and errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox
      data-testid={testId}
      errorMessage="Error!"
      hasError
      helpMessage="Helper text"
      id="unique-id"
      label={props.label}
    />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id help-for-unique-id'
  );
});

test('it calls the provided onChange event on-click', async () => {
  const props = getBaseProps();
  const handleChange = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Checkbox {...props} onChange={handleChange} data-testid={testId} />
  );

  const input = await findByTestId(testId);
  fireEvent.click(input);
  expect(handleChange).toBeCalledTimes(1);
});

test('it renders an indeterminate-state Checkbox', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox {...props} indeterminate data-testid={testId} />
  );

  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('aria-checked')).toEqual('mixed');
});

test('it allows for label to be a ReactNode', async () => {
  const props = {
    id: 'id',
    label: <a href="https://lifeomic.com">A link</a>,
  };
  const { findByTestId, findByText } = renderWithTheme(
    <Checkbox {...props} data-testid={testId} />
  );

  const checkbox = await findByTestId(testId);
  expect(hasClass(checkbox, 'ChromaCheckbox-input')).toBe(true);
  const label = await findByText('A link');
  expect(label).toBeInTheDocument();
  expect(label?.tagName).toEqual('A');
});

test('it renders an aria-label when not provided with label', async () => {
  const { findByLabelText } = renderWithTheme(
    <Checkbox label="" aria-label="aria-label-text" data-testid={testId} />
  );

  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

test('it renders an * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <Checkbox label="Required" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(hasClass(asterisk, 'ChromaCheckbox-required')).toBe(true);
});

test('it renders an inverse color * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <Checkbox label="Required" color="inverse" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(hasClass(asterisk, 'ChromaCheckbox-required')).toBe(true);
  expect(hasClass(asterisk, 'ChromaCheckbox-requiredInverse')).toBe(true);
});

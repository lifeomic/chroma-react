import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
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
  expect(checkbox).toHaveClass('ChromaCheckbox-input');
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
  expect(checkbox).toHaveClass('ChromaCheckbox-inputInverse');

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaFormHelpMessage-inverse');

  const error = await findByText(/Checkbox error message/);
  expect(error).toHaveClass('ChromaFormErrorMessage-inverse');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Checkbox {...props} data-testid={testId} className="custom-class-name" />
  );
  const checkbox = await findByTestId(testId);
  expect(checkbox?.parentElement).toHaveClass('custom-class-name');
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

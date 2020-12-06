import { fireEvent } from '@testing-library/dom';
import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Toggle, ToggleProps } from './index';

const testId = 'Toggle';

const getBaseProps = (): ToggleProps => ({
  id: 'id',
  label: 'Toggle Label',
});

test('it renders a Toggle', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} data-testid={testId} />
  );

  const toggle = await findByTestId(testId);
  expect(toggle).toHaveClass('ChromaToggle-input');
  expect(toggle.getAttribute('type')).toEqual('checkbox');
  expect(toggle.getAttribute('tabIndex')).toEqual('0');
});

test('it renders an inverse color Toggle with help and error messages', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <Toggle
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      hasError
      errorMessage="Toggle error message"
      data-testid={testId}
    />
  );

  const toggle = await findByTestId(testId);
  expect(toggle).toHaveClass('ChromaToggle-inputInverse');

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaFormHelpMessage-inverse');

  const error = await findByText(/Toggle error message/);
  expect(error).toHaveClass('ChromaFormErrorMessage-inverse');

  const label = await findByText(props.label);
  expect(label).toHaveClass('ChromaToggle-labelInverse');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} data-testid={testId} className="custom-class-name" />
  );

  const toggle = await findByTestId(testId);
  expect(toggle?.parentElement).toHaveClass('custom-class-name');
});

test('it renders a checked-by-default Toggle', async () => {
  const props = getBaseProps();
  const handleChange = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} onChange={handleChange} checked data-testid={testId} />
  );

  const toggle = await findByTestId(testId);
  expect(toggle).toBeChecked();
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Toggle {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state Toggle', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} hasError data-testid={testId} />
  );

  const toggle = await findByTestId(testId);
  expect(toggle).toHaveClass('ChromaToggle-error');
});

test('it renders an error-state Toggle with the provided errorMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <Toggle
      {...props}
      hasError
      errorMessage="Toggle error message"
      data-testid={testId}
    />
  );

  const errorMessage = await findByText(/Toggle error message/);
  expect(errorMessage).toBeInTheDocument();
});

test('it uses the name to generate a unique id', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Toggle label={props.label} name="unique-name" data-testid={testId} />
  );

  const checkbox = await findByTestId(testId);
  expect(checkbox.getAttribute('id')).toEqual('unique-name');
});

test('it calls the provided onChange event on-click', async () => {
  const props = getBaseProps();
  const handleChange = jest.fn();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} onChange={handleChange} data-testid={testId} />
  );

  const input = await findByTestId(testId);
  fireEvent.click(input);
  expect(handleChange).toBeCalledTimes(1);
});

test('it renders a fullWidth Toggle', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <Toggle {...props} fullWidth data-testid={testId} />
  );

  const toggle = await findByTestId(testId);
  expect(toggle?.nextElementSibling).toHaveClass(
    'ChromaToggle-labelContainerFullWidth'
  );

  const label = await findByText(props.label);
  expect(label?.parentElement).toHaveClass('ChromaToggle-labelFullWidth');
});

test('it renders a Toggle with right placement', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} placement="right" data-testid={testId} />
  );

  const toggle = await findByTestId(testId);
  expect(toggle?.nextElementSibling).toHaveClass(
    'ChromaToggle-labelContainerRight'
  );
});

test('it renders a Toggle with right placement and full width', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <Toggle {...props} placement="right" fullWidth data-testid={testId} />
  );

  const toggle = await findByTestId(testId);
  expect(toggle?.nextElementSibling).toHaveClass(
    'ChromaToggle-labelContainerRight'
  );
  expect(toggle?.nextElementSibling).toHaveClass(
    'ChromaToggle-labelContainerFullWidth'
  );
});

test('it renders an aria-label when not provided with label', async () => {
  const { findByLabelText } = renderWithTheme(
    <Toggle label="" aria-label="aria-label-text" data-testid={testId} />
  );

  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

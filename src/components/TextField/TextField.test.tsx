import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TextField, TextFieldProps } from './index';
import * as React from 'react';
import { Text } from '../Text/Text';
import { hasClass } from '../../testUtils/hasClass';

const testId = 'TextField';

const getBaseProps = (): TextFieldProps => ({
  id: 'id',
  label: 'Check Label',
});

test('it renders a TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} data-testid={testId} />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toBeInTheDocument();
  expect(hasClass(textfield, 'ChromaTextField-input')).toBe(true);
  expect(textfield.getAttribute('aria-describedby')).toBeFalsy();
  expect(textfield.getAttribute('type')).toEqual('text');
  expect(textfield.getAttribute('id')).toBeTruthy();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} data-testid={testId} className="custom-class-name" />
  );

  const textfield = await findByTestId(testId);
  expect(
    hasClass(textfield?.parentElement?.parentElement, 'custom-class-name')
  ).toBe(true);
});

test('it renders a TextField with a secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextField {...props} secondaryLabel="(Optional)" data-testid={testId} />
  );

  const secondaryLabel = await findByText('(Optional)');
  expect(secondaryLabel).toBeInTheDocument();
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextField {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} hasError data-testid={testId} />
  );

  const textfield = await findByTestId(testId);
  expect(hasClass(textfield, 'ChromaTextField-inputError')).toBe(true);
});

test('it renders an error-state TextField with the provided errorMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextField
      {...props}
      hasError
      errorMessage="TextField error message"
      data-testid={testId}
    />
  );

  const error = await findByText(/TextField error message/);
  expect(error).toBeInTheDocument();
});

test('it uses the name to generate a unique id', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField
      {...props}
      id={undefined}
      name="unique-name"
      data-testid={testId}
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('id')).toEqual('unique-name');
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} data-testid={testId} id="unique-id" />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField
      {...props}
      data-testid={testId}
      errorMessage="Error!"
      hasError
      id="unique-id"
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField
      {...props}
      data-testid={testId}
      helpMessage="Help Message"
      id="unique-id"
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('aria-describedby')).toEqual(
    'help-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage and errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField
      {...props}
      data-testid={testId}
      errorMessage="Error!"
      hasError
      helpMessage="Help Message"
      id="unique-id"
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id help-for-unique-id'
  );
});

test('it renders an inverse color TextField', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <TextField
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      hasError
      errorMessage="TextArea error message"
      data-testid={testId}
    />
  );

  const textfield = await findByTestId(testId);
  expect(hasClass(textfield, 'ChromaTextField-inputInverse')).toBe(true);

  const help = await findByText(/Helpful text/);
  expect(hasClass(help, 'ChromaFormHelpMessage-inverse')).toBe(true);

  const error = await findByText(/TextArea error message/);
  expect(hasClass(error, 'ChromaFormErrorMessage-inverse')).toBe(true);

  expect(
    hasClass(
      textfield?.parentElement?.previousElementSibling,
      'ChromaTextField-labelInverse'
    )
  ).toBe(true);
});

test('it renders a fullWidth TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextField {...props} fullWidth data-testid={testId} />
  );

  const textField = await findByTestId(testId);
  expect(hasClass(textField, 'ChromaTextField-inputFullWidth')).toBe(true);
});

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <TextField
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaTextField-labelIcon')).toBe(true);
});

test('it renders an inverse color icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <TextField
      {...props}
      color="inverse"
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaTextField-labelIconInverse')).toBe(true);
});

test('it renders label when provided', async () => {
  const { findByLabelText } = renderWithTheme(
    <TextField label="label-text" data-testid={testId} />
  );

  const label = await findByLabelText(/label-text/);
  expect(label).toBeInTheDocument();
});

test('it does not render label when not provided', async () => {
  renderWithTheme(<TextField label="" data-testid={testId} />);
  expect(document.querySelectorAll('label').length).toEqual(0);
});

test('it renders an aria-label when not provided with label', async () => {
  const { findByLabelText } = renderWithTheme(
    <TextField label="" aria-label="aria-label-text" data-testid={testId} />
  );
  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

test('it renders startAdornment', async () => {
  const { findByTestId } = renderWithTheme(
    <TextField
      label=""
      aria-label="aria-label-text"
      startAdornment={<Text data-testid="start-adornment">~</Text>}
    />
  );

  const startAdornment = await findByTestId('start-adornment');
  expect(startAdornment).toBeInTheDocument();
});

test('it renders endAdornment', async () => {
  const { findByTestId } = renderWithTheme(
    <TextField
      label=""
      aria-label="aria-label-text"
      endAdornment={<Text data-testid="end-adornment">lb</Text>}
    />
  );

  const endAdornment = await findByTestId('end-adornment');
  expect(endAdornment).toBeInTheDocument();
});

test('it renders startAdornment and endAdornment', async () => {
  const { findByTestId } = renderWithTheme(
    <TextField
      label=""
      aria-label="aria-label-text"
      startAdornment={<Text data-testid="start-adornment">~</Text>}
      endAdornment={<Text data-testid="end-adornment">lb</Text>}
    />
  );

  const startAdornment = await findByTestId('start-adornment');
  expect(startAdornment).toBeInTheDocument();
  const endAdornment = await findByTestId('end-adornment');
  expect(endAdornment).toBeInTheDocument();
});

test('it renders an * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <TextField label="Required" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(hasClass(asterisk, 'ChromaTextField-required')).toBe(true);
});

test('it renders an inverse color * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <TextField label="Required" color="inverse" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(hasClass(asterisk, 'ChromaTextField-required')).toBe(true);
  expect(hasClass(asterisk, 'ChromaTextField-requiredInverse')).toBe(true);
});

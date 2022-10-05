import * as React from 'react';
import { ColorPicker, ColorPickerProps } from './index';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { fireEvent } from '@testing-library/dom';

const testId = 'ColorPicker';

const getBaseProps = (): ColorPickerProps => ({
  id: 'id',
  label: 'Check Label',
});

test('it renders a ColorPicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ColorPicker {...props} data-testid={testId} />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toBeInTheDocument();
  expect(textfield).toHaveClass('ChromaColorPicker-input');
  expect(textfield.getAttribute('aria-describedby')).toBeFalsy();
  expect(textfield.getAttribute('type')).toEqual('text');
  expect(textfield.getAttribute('id')).toBeTruthy();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ColorPicker
      {...props}
      data-testid={testId}
      className="custom-class-name"
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield?.parentElement?.parentElement).toHaveClass(
    'custom-class-name'
  );
});

test('it renders a TextField with a secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ColorPicker {...props} secondaryLabel="(Optional)" data-testid={testId} />
  );

  const secondaryLabel = await findByText('(Optional)');
  expect(secondaryLabel).toBeInTheDocument();
});

test('it adds secondaryLabel inverse className when color is inverse', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ColorPicker
      {...props}
      color="inverse"
      secondaryLabel="(Optional)"
      data-testid={testId}
    />
  );

  const secondaryLabel = await findByText('(Optional)');
  expect(secondaryLabel).toHaveClass('ChromaColorPicker-labelInverse');
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ColorPicker {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ColorPicker {...props} hasError data-testid={testId} />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toHaveClass('ChromaColorPicker-inputError');
});

test('it renders an error-state TextField with the provided errorMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <ColorPicker
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
    <ColorPicker
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
    <ColorPicker {...props} data-testid={testId} id="unique-id" />
  );

  const textfield = await findByTestId(testId);
  expect(textfield.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ColorPicker
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
    <ColorPicker
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
    <ColorPicker
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
    <ColorPicker
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      hasError
      errorMessage="TextArea error message"
      data-testid={testId}
    />
  );

  const textfield = await findByTestId(testId);
  expect(textfield).toHaveClass('ChromaColorPicker-inputInverse');

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaFormHelpMessage-inverse');

  const error = await findByText(/TextArea error message/);
  expect(error).toHaveClass('ChromaFormErrorMessage-inverse');

  expect(textfield?.parentElement?.previousSibling).toHaveClass(
    'ChromaColorPicker-labelInverse'
  );
});

test('it renders a fullWidth TextField', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ColorPicker {...props} fullWidth data-testid={testId} />
  );

  const textField = await findByTestId(testId);
  expect(textField).toHaveClass('ChromaColorPicker-inputFullWidth');
});

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <ColorPicker
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaColorPicker-labelIcon');
});

test('it renders an inverse color icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <ColorPicker
      {...props}
      color="inverse"
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toHaveClass('ChromaColorPicker-labelIconInverse');
});

test('it renders label when provided', async () => {
  const { findByLabelText } = renderWithTheme(
    <ColorPicker label="label-text" data-testid={testId} />
  );

  const label = await findByLabelText(/label-text/);
  expect(label).toBeInTheDocument();
});

test('it does not render label when not provided', async () => {
  renderWithTheme(<ColorPicker label="" data-testid={testId} />);
  expect(document.querySelectorAll('label').length).toEqual(0);
});

test('it renders an aria-label when not provided with label', async () => {
  const { findByLabelText } = renderWithTheme(
    <ColorPicker label="" aria-label="aria-label-text" data-testid={testId} />
  );

  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

test('it renders default color suggestions if none provided', async () => {
  const { findAllByLabelText } = renderWithTheme(
    <ColorPicker data-testid={testId} />
  );

  const colors = await findAllByLabelText(/Pick #/);
  expect(colors).toHaveLength(15);
});

test('it renders color suggestions', async () => {
  const colorSuggestions = ['#fff', '#000'];
  const { findAllByLabelText } = renderWithTheme(
    <ColorPicker data-testid={testId} colorSuggestions={colorSuggestions} />
  );

  const colors = await findAllByLabelText(/Pick #/);
  expect(colors).toHaveLength(2);
});

test('it adds className for circle variant', async () => {
  const { findByLabelText } = renderWithTheme(
    <ColorPicker data-testid={testId} variant="circle" />
  );

  const colorPicker = await findByLabelText(/Pick color/);
  expect(colorPicker.firstChild).toHaveClass('ChromaColorPicker-colorCircle');
});

test('it adds className for square variant', async () => {
  const { findByLabelText } = renderWithTheme(
    <ColorPicker data-testid={testId} variant="square" />
  );

  const colorPicker = await findByLabelText(/Pick color/);
  expect(colorPicker.firstChild).toHaveClass('ChromaColorPicker-colorSquare');
});

test('it renders default invalidColorText if none provided', async () => {
  const color = '#f7';
  const { findByText } = renderWithTheme(
    <ColorPicker data-testid={testId} value={color} />
  );

  const invalidText = await findByText('Invalid Color');
  expect(invalidText).toBeInTheDocument();
});

test('it renders invalidColorText when color is invalid', async () => {
  const color = '#f7';
  const invalidColorText = 'Invalid Color Selected';
  const { findByText } = renderWithTheme(
    <ColorPicker
      data-testid={testId}
      invalidColorText={invalidColorText}
      value={color}
    />
  );

  const invalidText = await findByText(invalidColorText);
  expect(invalidText).toBeInTheDocument();
});

test('it sets default styles when color is invalid', async () => {
  const color = '#f7';
  const invalidColorText = 'Invalid Color Selected';
  const { findByText } = renderWithTheme(
    <ColorPicker
      data-testid={testId}
      invalidColorText={invalidColorText}
      value={color}
    />
  );

  const invalidText = await findByText(invalidColorText);
  expect(invalidText).toHaveStyle('color: rgb(255, 255, 255)');
  expect(invalidText).toHaveStyle('background-color: rgb(38, 44, 50)');
});

test('it renders valid colors text', async () => {
  const color = '#f7bf4d';
  const { findByText } = renderWithTheme(
    <ColorPicker data-testid={testId} value={color} />
  );

  const validColorText = await findByText(color);
  expect(validColorText).toBeInTheDocument();
});

test('it sets styles when color is valid', async () => {
  const color = '#f7bf4d';
  const { findByText } = renderWithTheme(
    <ColorPicker data-testid={testId} value={color} />
  );

  const validColorText = await findByText(color);
  expect(validColorText).toHaveStyle('color: rgba(0, 0, 0, 0.87)');
  expect(validColorText).toHaveStyle('background-color: rgb(247, 191, 77)');
});

test('it calls onChange when typing into input', async () => {
  const onChangeMock = jest.fn();
  const { findByTestId } = renderWithTheme(
    <ColorPicker data-testid={testId} onChange={onChangeMock} />
  );

  const textfield = await findByTestId(testId);
  fireEvent.change(textfield, { target: { value: '#f7bf4f' } });
  expect(onChangeMock).toHaveBeenCalledWith('#f7bf4f');
});

test('it calls onChange when clicking a suggested color', async () => {
  const onChangeMock = jest.fn();
  const { findByLabelText } = renderWithTheme(
    <ColorPicker data-testid={testId} onChange={onChangeMock} />
  );

  const colorPicker = await findByLabelText(/Pick color/);
  fireEvent.click(colorPicker);

  const color = await findByLabelText(/Pick #f7bf4d/);
  fireEvent.click(color);

  expect(onChangeMock).toHaveBeenCalledWith('#f7bf4d');
});

test('it renders an * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <ColorPicker label="Required" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(asterisk).toHaveClass('ChromaColorPicker-required');
});

test('it renders an inverse color * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <ColorPicker label="Required" color="inverse" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toHaveClass(
    'ChromaColorPicker-required ChromaColorPicker-requiredInverse'
  );
});

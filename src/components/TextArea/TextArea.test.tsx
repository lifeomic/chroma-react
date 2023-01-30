import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TextArea, TextAreaProps } from './index';
import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';

const testId = 'TextArea';

const getBaseProps = (): TextAreaProps => ({
  id: 'id',
  label: 'Check Label',
});

test('it renders a TextArea', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea {...props} data-testid={testId} />
  );

  const textarea = await findByTestId(testId);
  expect(textarea).toBeInTheDocument();
  expect(hasClass(textarea, 'ChromaTextArea-textarea')).toBe(true);
  expect(textarea.getAttribute('aria-describedby')).toBeFalsy();
  expect(textarea.getAttribute('cols')).toEqual('1');
});

test('it renders a TextArea with a secondaryLabel', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextArea {...props} secondaryLabel="(Optional)" data-testid={testId} />
  );

  const secondaryLabel = await findByText('(Optional)');
  expect(secondaryLabel).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea {...props} data-testid={testId} className="custom-class-name" />
  );
  const textarea = await findByTestId(testId);
  expect(hasClass(textarea?.parentElement, 'custom-class-name')).toBe(true);
});

test('it applies the provided textarea className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea
      {...props}
      data-testid={testId}
      textAreaClassName="custom-textarea-class-name"
    />
  );
  const textarea = await findByTestId(testId);
  expect(hasClass(textarea, 'custom-textarea-class-name')).toBe(true);
});

test('it renders the provided help message', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextArea {...props} helpMessage="Helpful text" data-testid={testId} />
  );

  const help = await findByText(/Helpful text/);
  expect(help).toBeInTheDocument();
});

test('it renders an error-state TextArea', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea {...props} hasError data-testid={testId} />
  );
  const textarea = await findByTestId(testId);
  expect(hasClass(textarea, 'ChromaTextArea-textareaError')).toBe(true);
});

test('it renders an error-state TextArea with the provided errorMessage', async () => {
  const props = getBaseProps();
  const { findByText } = renderWithTheme(
    <TextArea
      {...props}
      hasError
      errorMessage="TextArea error message"
      data-testid={testId}
    />
  );

  const error = await findByText(/TextArea error message/);
  expect(error).toBeInTheDocument();
});

test('it uses the name to generate a unique id', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea
      {...props}
      id={undefined}
      name="unique-name"
      data-testid={testId}
    />
  );

  const textarea = await findByTestId(testId);
  expect(textarea.getAttribute('id')).toEqual('unique-name');
});

// For accessibility audit
test('it does not apply aria-describedby', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea {...props} data-testid={testId} id="unique-id" />
  );

  const textarea = await findByTestId(testId);
  expect(textarea.getAttribute('aria-describedby')).toEqual(null);
});

test('it applies aria-describedby for errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea
      {...props}
      data-testid={testId}
      hasError
      errorMessage="Error!"
      id="unique-id"
    />
  );

  const textarea = await findByTestId(testId);
  expect(textarea.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea
      {...props}
      data-testid={testId}
      helpMessage="Help Message"
      id="unique-id"
    />
  );

  const textarea = await findByTestId(testId);
  expect(textarea.getAttribute('aria-describedby')).toEqual(
    'help-for-unique-id'
  );
});

test('it applies aria-describedby for helpMessage and errorMessage', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea
      {...props}
      data-testid={testId}
      errorMessage="Error!"
      hasError
      helpMessage="Help Message"
      id="unique-id"
    />
  );

  const textarea = await findByTestId(testId);
  expect(textarea.getAttribute('aria-describedby')).toEqual(
    'error-for-unique-id help-for-unique-id'
  );
});

test('it renders an inverse color TextArea', async () => {
  const props = getBaseProps();
  const { findByTestId, findByText } = renderWithTheme(
    <TextArea
      {...props}
      color="inverse"
      helpMessage="Helpful text"
      hasError
      errorMessage="TextArea error message"
      data-testid={testId}
    />
  );

  const textarea = await findByTestId(testId);
  expect(hasClass(textarea, 'ChromaTextArea-textareaInverse')).toBe(true);

  const help = await findByText(/Helpful text/);
  expect(hasClass(help, 'ChromaFormHelpMessage-inverse')).toBe(true);

  const error = await findByText(/TextArea error message/);
  expect(hasClass(error, 'ChromaFormErrorMessage-inverse')).toBe(true);

  expect(
    hasClass(textarea?.previousElementSibling, 'ChromaTextArea-labelInverse')
  ).toBe(true);
});

test('it renders a fullWidth TextArea', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea {...props} fullWidth data-testid={testId} />
  );

  const textarea = await findByTestId(testId);
  expect(hasClass(textarea, 'ChromaTextArea-fullWidth')).toBe(true);
});

test('it renders an icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <TextArea
      {...props}
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaTextArea-labelIcon')).toBe(true);
});

test('it renders an inverse color icon when icon and tooltipMessage are provided', async () => {
  const props = getBaseProps();
  const { findByRole } = renderWithTheme(
    <TextArea
      {...props}
      color="inverse"
      icon={IconComponent}
      tooltipMessage="tooltipMessage"
      data-testid={testId}
    />
  );

  const icon = await findByRole('img', { hidden: true });
  expect(hasClass(icon, 'ChromaTextArea-labelIconInverse')).toBe(true);
});

test('it renders an aria-label when not provided with label', async () => {
  const { findByLabelText } = renderWithTheme(
    <TextArea label="" aria-label="aria-label-text" data-testid={testId} />
  );

  const ariaLabel = await findByLabelText(/aria-label-text/);
  expect(ariaLabel).toBeInTheDocument();
});

test('it renders an * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <TextArea label="" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(asterisk).toBeInTheDocument();
  expect(hasClass(asterisk, 'ChromaTextArea-required')).toBe(true);
});

test('it renders an inverse color * when the field is required', async () => {
  const { findByText } = renderWithTheme(
    <TextArea label="" color="inverse" showRequiredLabel />
  );
  const asterisk = await findByText('*');
  expect(hasClass(asterisk, 'ChromaTextArea-required')).toBe(true);
  expect(hasClass(asterisk, 'ChromaTextArea-requiredInverse')).toBe(true);
});

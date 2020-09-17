import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TextArea, TextAreaProps } from './index';
import * as React from 'react';

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
  expect(textarea).toHaveClass('ChromaTextArea-textarea');
  expect(textarea.getAttribute('aria-describedby')).toBeTruthy();
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
  expect(textarea?.parentElement).toHaveClass('custom-class-name');
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
  expect(textarea).toHaveClass('custom-textarea-class-name');
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
  expect(textarea).toHaveClass('ChromaTextArea-textareaError');
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
  expect(textarea).toHaveClass('ChromaTextArea-textareaInverse');

  const help = await findByText(/Helpful text/);
  expect(help).toHaveClass('ChromaFormHelpMessage-inverse');

  const error = await findByText(/TextArea error message/);
  expect(error).toHaveClass('ChromaFormErrorMessage-inverse');

  expect(textarea?.previousSibling).toHaveClass('ChromaTextArea-labelInverse');
});

test('it renders a fullWidth TextArea', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <TextArea {...props} fullWidth data-testid={testId} />
  );

  const textarea = await findByTestId(testId);
  expect(textarea).toHaveClass('ChromaTextArea-fullWidth');
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
  expect(icon).toHaveClass('ChromaTextArea-labelIcon');
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
  expect(icon).toHaveClass('ChromaTextArea-labelIconInverse');
});

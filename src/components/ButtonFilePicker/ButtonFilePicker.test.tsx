import * as React from 'react';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { ButtonFilePicker, ButtonFilePickerProps } from './index';

const testId = 'ButtonFilePicker';

const getBaseProps = (): ButtonFilePickerProps => ({
  id: testId,
});

test('it renders a ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId}>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders with the provided "accept"', () => {
  const props = getBaseProps();
  const { container } = renderWithTheme(
    <ButtonFilePicker {...props} accept=".jpg,.jpeg" id={testId}>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = container.querySelector(`#${testId}`);
  expect(root?.getAttribute('accept')).toEqual('.jpg,.jpeg');
});

test('it renders when provided with "allowMultipleSelection"', () => {
  const props = getBaseProps();
  const { container } = renderWithTheme(
    <ButtonFilePicker {...props} allowMultipleSelection id={testId}>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = container.querySelector(`#${testId}`);
  expect(root?.getAttribute('multiple')).toEqual('');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} className="custom-class">
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class');
});

test('it renders an icon with the "icon" class name', () => {
  const { getByRole } = renderWithTheme(
    <ButtonFilePicker icon={IconComponent}>ButtonFilePicker</ButtonFilePicker>
  );
  const icon = getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveClass('ChromaButtonFilePicker-icon');
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} fullWidth>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-fullWidth');
});

test('it renders with `variant="outlined"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} variant="outlined">
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-outlined');
});

test('it renders with `variant="text"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} variant="text">
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-text');
});

// #region disabled tests
test('it renders a disabled ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { container, findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} disabled>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-rootDisabled');

  const input = container.querySelector(`#${testId}`);
  expect(input).toHaveClass('ChromaButtonFilePicker-disabled');
});

test('it renders a disabled contained inverse ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} color="inverse" disabled>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-containedInverseDisabled');
});

test('it renders a disabled outlined ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker
      {...props}
      data-testid={testId}
      variant="outlined"
      disabled
    >
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-outlinedDisabled');
});

test('it renders a disabled outlined inverse ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker
      {...props}
      data-testid={testId}
      variant="outlined"
      color="inverse"
      disabled
    >
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-outlinedInverseDisabled');
});

test('it renders a disabled text ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} variant="text" disabled>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-textDisabled');
});

test('it renders a disabled text inverse ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker
      {...props}
      data-testid={testId}
      variant="text"
      color="inverse"
      disabled
    >
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-textInverseDisabled');
});

// #endregion

// #region inverse tests
test('it renders with `variant="contained" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker
      {...props}
      data-testid={testId}
      variant="contained"
      color="inverse"
    >
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-inverse');
  expect(root).toHaveClass('ChromaButtonFilePicker-containedInverse');
});

test('it renders with `variant="outlined" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker
      {...props}
      data-testid={testId}
      variant="outlined"
      color="inverse"
    >
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-inverse');
  expect(root).toHaveClass('ChromaButtonFilePicker-outlinedInverse');
});

test('it renders with `variant="text" color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker
      {...props}
      data-testid={testId}
      variant="text"
      color="inverse"
    >
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaButtonFilePicker-inverse');
  expect(root).toHaveClass('ChromaButtonFilePicker-textInverse');
});
// #endregion

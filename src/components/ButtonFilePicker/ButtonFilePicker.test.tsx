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
  expect(root.classList.contains('custom-class')).true;
});

test('it renders an icon with the "icon" class name', () => {
  const { getByRole } = renderWithTheme(
    <ButtonFilePicker icon={IconComponent}>ButtonFilePicker</ButtonFilePicker>
  );
  const icon = getByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
  expect(icon.classList.contains('ChromaButtonFilePicker-icon')).true;
});

test('it renders with the "fullWidth" prop', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} fullWidth>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonFilePicker-fullWidth')).true;
});

test('it renders with `variant="outlined"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} variant="outlined">
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonFilePicker-outlined')).true;
});

test('it renders with `variant="text"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} variant="text">
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonFilePicker-text')).true;
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
  expect(root.classList.contains('ChromaButtonFilePicker-rootDisabled')).true;

  const input = container.querySelector(`#${testId}`);
  expect(input?.classList.contains('ChromaButtonFilePicker-disabled')).true;
});

test('it renders a disabled contained inverse ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} color="inverse" disabled>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(
    root.classList.contains('ChromaButtonFilePicker-containedInverseDisabled')
  ).true;
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
  expect(root.classList.contains('ChromaButtonFilePicker-outlinedDisabled'))
    .true;
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
  expect(
    root.classList.contains('ChromaButtonFilePicker-outlinedInverseDisabled')
  ).true;
});

test('it renders a disabled text ButtonFilePicker', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <ButtonFilePicker {...props} data-testid={testId} variant="text" disabled>
      ButtonFilePicker
    </ButtonFilePicker>
  );
  const root = await findByTestId(testId);
  expect(root.classList.contains('ChromaButtonFilePicker-textDisabled')).true;
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
  expect(root.classList.contains('ChromaButtonFilePicker-textInverseDisabled'))
    .true;
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
  expect(root.classList.contains('ChromaButtonFilePicker-inverse')).true;
  expect(root.classList.contains('ChromaButtonFilePicker-containedInverse'))
    .true;
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
  expect(root.classList.contains('ChromaButtonFilePicker-inverse')).true;
  expect(root.classList.contains('ChromaButtonFilePicker-outlinedInverse'))
    .true;
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
  expect(root.classList.contains('ChromaButtonFilePicker-inverse')).true;
  expect(root.classList.contains('ChromaButtonFilePicker-textInverse')).true;
});
// #endregion

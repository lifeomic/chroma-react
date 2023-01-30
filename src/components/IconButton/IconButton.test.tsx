import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { IconButton, IconButtonProps } from './index';

const testId = 'IconButton';

const getBaseProps = (): IconButtonProps => ({
  'aria-label': 'dummy',
  icon: IconComponent,
});

test('it renders an IconButton', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} />
  );

  const button = await findByTestId(testId);
  expect(button).toBeInTheDocument();
  expect(button.getAttribute('type')).toEqual('button');
  expect(button.getAttribute('tabIndex')).toEqual('0');
});

test('it applies the provided className', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} className="custom-class-name" />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'custom-class-name')).toBe(true);
});

test('it renders with `size={0}`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} size={0} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-size0')).toBe(true);
});

test('it renders with `color="inverse"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} color="inverse" />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-inverse')).toBe(true);
});

test('it renders with `color="negative"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} color="negative" />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-negative')).toBe(true);
});

test('it renders with `color="positive"`', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} color="positive" />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-positive')).toBe(true);
});

test('it renders a disabled IconButton', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} color="inverse" disabled />
  );
  const button = await findByTestId(testId);
  expect(button).toBeDisabled();
  expect(button.getAttribute('tabIndex')).toEqual('-1');
});

test('it allows combining the "padding" props', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton
      {...props}
      data-testid={testId}
      paddingTop={0}
      paddingBottom={1}
      paddingLeft={2}
      paddingRight={1}
    />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingTop0')).toBe(true);
  expect(hasClass(button, 'ChromaIconButton-paddingBottom1')).toBe(true);
  expect(hasClass(button, 'ChromaIconButton-paddingLeft2')).toBe(true);
  expect(hasClass(button, 'ChromaIconButton-paddingRight1')).toBe(true);
});

// #region paddingTop

test('it renders "paddingTop={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingTop={0} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingTop0')).toBe(true);
});

test('it renders "paddingTop={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingTop={1} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingTop1')).toBe(true);
});

test('it renders "paddingTop={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingTop={2} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingTop2')).toBe(true);
});

test('it renders "paddingTop={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingTop={3} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingTop3')).toBe(true);
});

// #endregion

// #region paddingBottom

test('it renders "paddingBottom={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingBottom={0} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingBottom0')).toBe(true);
});

test('it renders "paddingBottom={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingBottom={1} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingBottom1')).toBe(true);
});

test('it renders "paddingBottom={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingBottom={2} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingBottom2')).toBe(true);
});

test('it renders "paddingBottom={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingBottom={3} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingBottom3')).toBe(true);
});

// #endregion

// #region paddingLeft

test('it renders "paddingLeft={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingLeft={0} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingLeft0')).toBe(true);
});

test('it renders "paddingLeft={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingLeft={1} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingLeft1')).toBe(true);
});

test('it renders "paddingLeft={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingLeft={2} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingLeft2')).toBe(true);
});

test('it renders "paddingLeft={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingLeft={3} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingLeft3')).toBe(true);
});

// #endregion

// #region paddingRight

test('it renders "paddingRight={0}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingRight={0} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingRight0')).toBe(true);
});

test('it renders "paddingRight={1}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingRight={1} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingRight1')).toBe(true);
});

test('it renders "paddingRight={2}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingRight={2} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingRight2')).toBe(true);
});

test('it renders "paddingRight={3}"', async () => {
  const props = getBaseProps();
  const { findByTestId } = renderWithTheme(
    <IconButton {...props} data-testid={testId} paddingRight={3} />
  );
  const button = await findByTestId(testId);
  expect(hasClass(button, 'ChromaIconButton-paddingRight3')).toBe(true);
});

// #endregion

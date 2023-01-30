import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { FormBox } from './index';

const testId = 'FormBox';

test('it renders a FormBox', async () => {
  const { findByTestId } = renderWithTheme(<FormBox data-testid={testId} />);
  const root = await findByTestId(testId);

  expect(root).toBeInTheDocument();
});

test('it renders a FormBox with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox className="custom-class" data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

test('it renders a FormBox with spacing=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing0')).toBe(true);
});

test('it renders a FormBox with spacing=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing05')).toBe(true);
});

test('it renders a FormBox with spacing=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing10')).toBe(true);
});

test('it renders a FormBox with spacing=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing15')).toBe(true);
});

test('it renders a FormBox with spacing=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing20')).toBe(true);
});

test('it renders a FormBox with spacing=2.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={2.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing25')).toBe(true);
});

test('it renders a FormBox with spacing=3', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={3} data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-vSpacing30')).toBe(true);
});

test('it renders a FormBox with padding=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-padding0')).toBe(true);
});

test('it renders a FormBox with padding=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-padding05')).toBe(true);
});

test('it renders a FormBox with padding=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-padding10')).toBe(true);
});

test('it renders a FormBox with padding=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-padding15')).toBe(true);
});

test('it renders a FormBox with padding=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-padding20')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing0')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing05')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing10')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing15')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing20')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=2.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={2.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing25')).toBe(true);
});

test('it renders a horizontal FormBox with spacing=3', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={3} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-hSpacing30')).toBe(true);
});

test('it renders a FormBox with paddingX=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-xPadding0')).toBe(true);
});

test('it renders a FormBox with paddingX=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-xPadding05')).toBe(true);
});

test('it renders a FormBox with paddingX=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-xPadding10')).toBe(true);
});

test('it renders a FormBox with paddingX=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-xPadding15')).toBe(true);
});

test('it renders a FormBox with paddingX=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-xPadding20')).toBe(true);
});

test('it renders a FormBox with paddingY=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-yPadding0')).toBe(true);
});

test('it renders a FormBox with paddingY=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-yPadding05')).toBe(true);
});

test('it renders a FormBox with paddingY=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-yPadding10')).toBe(true);
});

test('it renders a FormBox with paddingY=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-yPadding15')).toBe(true);
});

test('it renders a FormBox with paddingY=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-yPadding20')).toBe(true);
});

test('it allows combining padding values', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={2} paddingX={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaFormBox-yPadding20')).toBe(true);
  expect(hasClass(root, 'ChromaFormBox-xPadding10')).toBe(true);
});

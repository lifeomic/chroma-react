import * as React from 'react';
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
  expect(root).toHaveClass('custom-class');
});

test('it renders a FormBox with spacing=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing0');
});

test('it renders a FormBox with spacing=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing05');
});

test('it renders a FormBox with spacing=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing10');
});

test('it renders a FormBox with spacing=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing15');
});

test('it renders a FormBox with spacing=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing20');
});

test('it renders a FormBox with spacing=2.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={2.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing25');
});

test('it renders a FormBox with spacing=3', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox spacing={3} data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-vSpacing30');
});

test('it renders a FormBox with padding=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-padding0');
});

test('it renders a FormBox with padding=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-padding05');
});

test('it renders a FormBox with padding=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-padding10');
});

test('it renders a FormBox with padding=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-padding15');
});

test('it renders a FormBox with padding=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox padding={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-padding20');
});

test('it renders a horizontal FormBox with spacing=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing0');
});

test('it renders a horizontal FormBox with spacing=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing05');
});

test('it renders a horizontal FormBox with spacing=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing10');
});

test('it renders a horizontal FormBox with spacing=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing15');
});

test('it renders a horizontal FormBox with spacing=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing20');
});

test('it renders a horizontal FormBox with spacing=2.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={2.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing25');
});

test('it renders a horizontal FormBox with spacing=3', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox direction="row" spacing={3} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-hSpacing30');
});

test('it renders a FormBox with paddingX=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-xPadding0');
});

test('it renders a FormBox with paddingX=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-xPadding05');
});

test('it renders a FormBox with paddingX=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-xPadding10');
});

test('it renders a FormBox with paddingX=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-xPadding15');
});

test('it renders a FormBox with paddingX=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingX={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-xPadding20');
});

test('it renders a FormBox with paddingY=0', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={0} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-yPadding0');
});

test('it renders a FormBox with paddingY=0.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={0.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-yPadding05');
});

test('it renders a FormBox with paddingY=1', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-yPadding10');
});

test('it renders a FormBox with paddingY=1.5', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={1.5} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-yPadding15');
});

test('it renders a FormBox with paddingY=2', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={2} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-yPadding20');
});

test('it allows combining padding values', async () => {
  const { findByTestId } = renderWithTheme(
    <FormBox paddingY={2} paddingX={1} data-testid={testId} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaFormBox-yPadding20');
  expect(root).toHaveClass('ChromaFormBox-xPadding10');
});

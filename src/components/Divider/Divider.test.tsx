import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Divider } from '.';

const testId = 'Divider';

test('it renders a Divider', async () => {
  const { findByTestId } = renderWithTheme(<Divider data-testid={testId} />);

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders a Divider with the provided "color"', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} color="inverse" />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-inverseColor');
});

test('it renders a Divider with direction="row"', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-row');
});

test('it renders a Divider with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} className="custom-class" />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('custom-class');
});

test('it renders a Divider with `spacing={0}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={0} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing0');
});

test('it renders a Divider with `spacing={0.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={0.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing05');
});

test('it renders a Divider with `spacing={1}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={1} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing10');
});

test('it renders a Divider with `spacing={1.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={1.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing15');
});

test('it renders a Divider with `spacing={2}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={2} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing20');
});

test('it renders a Divider with `spacing={2.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={2.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing25');
});

test('it renders a Divider with `spacing={3}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={3} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing30');
});

test('it renders a Divider with `spacing={3.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={3.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing35');
});

test('it renders a Divider with `spacing={4}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={4} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-vSpacing40');
});

test('it renders a Divider with `spacing={0}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={0} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing0');
});

test('it renders a Divider with `spacing={0.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={0.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing05');
});

test('it renders a Divider with `spacing={1}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={1} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing10');
});

test('it renders a Divider with `spacing={1.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={1.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing15');
});

test('it renders a Divider with `spacing={2}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={2} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing20');
});

test('it renders a Divider with `spacing={2.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={2.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing25');
});

test('it renders a Divider with `spacing={3}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={3} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing30');
});

test('it renders a Divider with `spacing={3.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={3.5} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing35');
});

test('it renders a Divider with `spacing={4}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={4} />
  );

  const root = await findByTestId(testId);
  expect(root).toHaveClass('ChromaDivider-hSpacing40');
});

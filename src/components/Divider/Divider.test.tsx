import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Divider } from '.';
import { hasClass } from '../../testUtils/hasClass';

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
  expect(hasClass(root, 'ChromaDivider-inverseColor')).toBe(true);
});

test('it renders a Divider with direction="row"', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-row')).toBe(true);
});

test('it renders a Divider with the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} className="custom-class" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

test('it renders a Divider with `spacing={0}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={0} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing0')).toBe(true);
});

test('it renders a Divider with `spacing={0.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={0.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing05')).toBe(true);
});

test('it renders a Divider with `spacing={1}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={1} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing10')).toBe(true);
});

test('it renders a Divider with `spacing={1.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={1.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing15')).toBe(true);
});

test('it renders a Divider with `spacing={2}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={2} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing20')).toBe(true);
});

test('it renders a Divider with `spacing={2.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={2.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing25')).toBe(true);
});

test('it renders a Divider with `spacing={3}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={3} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing30')).toBe(true);
});

test('it renders a Divider with `spacing={3.5}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={3.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing35')).toBe(true);
});

test('it renders a Divider with `spacing={4}`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} spacing={4} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-vSpacing40')).toBe(true);
});

test('it renders a Divider with `spacing={0}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={0} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing0')).toBe(true);
});

test('it renders a Divider with `spacing={0.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={0.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing05')).toBe(true);
});

test('it renders a Divider with `spacing={1}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={1} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing10')).toBe(true);
});

test('it renders a Divider with `spacing={1.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={1.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing15')).toBe(true);
});

test('it renders a Divider with `spacing={2}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={2} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing20')).toBe(true);
});

test('it renders a Divider with `spacing={2.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={2.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing25')).toBe(true);
});

test('it renders a Divider with `spacing={3}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={3} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing30')).toBe(true);
});

test('it renders a Divider with `spacing={3.5}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={3.5} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing35')).toBe(true);
});

test('it renders a Divider with `spacing={4}` and `direction="row`', async () => {
  const { findByTestId } = renderWithTheme(
    <Divider data-testid={testId} direction="row" spacing={4} />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'ChromaDivider-hSpacing40')).toBe(true);
});

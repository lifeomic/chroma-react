import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Alert } from './index';

const testId = 'Alert';

test('it renders an Alert', async () => {
  const { findByTestId } = renderWithTheme(<Alert data-testid={testId} />);

  const alert = await findByTestId(testId);
  expect(alert).toBeInTheDocument();
  expect(alert.getAttribute('role')).toBe('alert');
  expect(hasClass(alert, 'ChromaAlert-info')).toBe(true);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert className="custom-class-name" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(hasClass(alert, 'custom-class-name')).toBe(true);
});

test('it applies the fullWidth prop', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert data-testid={testId} fullWidth />
  );

  const alert = await findByTestId(testId);
  expect(hasClass(alert, 'ChromaAlert-fullWidth')).toBe(true);
});

test('it applies the error statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="error" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(hasClass(alert, 'ChromaAlert-error')).toBe(true);
});

test('it applies the info statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="info" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(hasClass(alert, 'ChromaAlert-info')).toBe(true);
});

test('it applies the success statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="success" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(hasClass(alert, 'ChromaAlert-success')).toBe(true);
});

test('it applies the warning statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="warning" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(hasClass(alert, 'ChromaAlert-warning')).toBe(true);
});

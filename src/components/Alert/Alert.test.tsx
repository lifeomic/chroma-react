import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Alert } from './index';

const testId = 'Alert';

test('it renders an Alert', async () => {
  const { findByTestId } = renderWithTheme(<Alert data-testid={testId} />);

  const alert = await findByTestId(testId);
  expect(alert).toBeInTheDocument();
  expect(alert.getAttribute('role')).toBe('alert');
  expect(alert).toHaveClass('ChromaAlert-info');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert className="custom-class-name" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(alert).toHaveClass('custom-class-name');
});

test('it applies the fullWidth prop', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert data-testid={testId} fullWidth />
  );

  const alert = await findByTestId(testId);
  expect(alert).toHaveClass('ChromaAlert-fullWidth');
});

test('it applies the error statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="error" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(alert).toHaveClass('ChromaAlert-error');
});

test('it applies the info statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="info" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(alert).toHaveClass('ChromaAlert-info');
});

test('it applies the success statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="success" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(alert).toHaveClass('ChromaAlert-success');
});

test('it applies the warning statusType', async () => {
  const { findByTestId } = renderWithTheme(
    <Alert statusType="warning" data-testid={testId} />
  );

  const alert = await findByTestId(testId);
  expect(alert).toHaveClass('ChromaAlert-warning');
});

import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { AlertBody } from './index';

const testId = 'AlertBody';

test('it renders an AlertBody', async () => {
  const { findByTestId } = renderWithTheme(<AlertBody data-testid={testId} />);

  const body = await findByTestId(testId);
  expect(body).toBeInTheDocument();
  expect(body).toHaveClass('ChromaAlertBody-root');
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertBody className="custom-class-name" data-testid={testId} />
  );

  const body = await findByTestId(testId);
  expect(body).toHaveClass('custom-class-name');
});

test('it applies the space-between class', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertBody data-testid={testId} spaceBetween />
  );

  const body = await findByTestId(testId);
  expect(body).toHaveClass('ChromaAlertBody-spaceBetween');
});

import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { AlertBody } from './index';

const testId = 'AlertBody';

test('it renders an AlertBody', async () => {
  const { findByTestId } = renderWithTheme(<AlertBody data-testid={testId} />);

  const body = await findByTestId(testId);
  expect(body).toBeInTheDocument();
  expect(hasClass(body, 'ChromaAlertBody-root')).toBe(true);
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertBody className="custom-class-name" data-testid={testId} />
  );

  const body = await findByTestId(testId);
  expect(hasClass(body, 'custom-class-name')).toBe(true);
});

test('it applies the space-between class', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertBody data-testid={testId} spaceBetween />
  );

  const body = await findByTestId(testId);
  expect(hasClass(body, 'ChromaAlertBody-spaceBetween')).toBe(true);
});

import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { IconComponent } from '../../testUtils/IconComponent';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { AlertIcon } from './index';

const testId = 'AlertIcon';

test('it renders an AlertIcon', async () => {
  const { findByTestId, findByRole } = renderWithTheme(
    <AlertIcon icon={IconComponent} data-testid={testId} />
  );

  const iconWrapper = await findByTestId(testId);
  expect(iconWrapper).toBeInTheDocument();
  expect(hasClass(iconWrapper, 'ChromaAlertIcon-root')).toBe(true);

  const icon = await findByRole('img', { hidden: true });
  expect(icon).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertIcon className="custom-class-name" data-testid={testId} />
  );

  const body = await findByTestId(testId);
  expect(hasClass(body, 'custom-class-name')).toBe(true);
});

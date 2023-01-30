import * as React from 'react';
import { hasClass } from '../../testUtils/hasClass';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { Actions } from './index';

const testId = 'Actions';

test('it renders a Actions', async () => {
  const { findByTestId } = renderWithTheme(<Actions data-testid={testId} />);

  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <Actions data-testid={testId} className="custom-class" />
  );

  const root = await findByTestId(testId);
  expect(hasClass(root, 'custom-class')).toBe(true);
});

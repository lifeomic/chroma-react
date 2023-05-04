import * as React from 'react';

import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { SpinButton } from './index';

const testId = 'Button';

test('it renders two buttons', async () => {
  const noop = () => {};

  const { findByTestId } = renderWithTheme(
    <SpinButton onDecrement={noop} onIncrement={noop} data-testid={testId} />
  );

  const spinButton = await findByTestId(testId);

  const arrowButtons = spinButton.querySelectorAll('[type="button"]');
  expect(arrowButtons.length).toEqual(2);
});

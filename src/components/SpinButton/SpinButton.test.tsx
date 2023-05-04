import * as React from 'react';
import userEvent from '@testing-library/user-event';

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

test('support keyboard ArrowUp and ArrowDown', async () => {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();

  const { findByTestId } = renderWithTheme(
    <SpinButton
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      data-testid={testId}
    />
  );

  const spinButton = await findByTestId(testId);

  spinButton.focus();
  await userEvent.keyboard('{ArrowUp}');
  expect(onIncrement).toHaveBeenCalledTimes(1);

  spinButton.focus();
  await userEvent.keyboard('{ArrowDown}');
  expect(onDecrement).toHaveBeenCalledTimes(1);

  spinButton.focus();
  await userEvent.keyboard('{ArrowLeft}');
  // nothing should change
  expect(onIncrement).toHaveBeenCalledTimes(1);
  expect(onDecrement).toHaveBeenCalledTimes(1);
});

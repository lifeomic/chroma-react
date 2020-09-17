import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PopoverList } from '../Popover';

const testId = 'PopoverList';

test('it renders a PopoverList', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverList data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('tabIndex')).toEqual('0');
  expect(root.nodeName).toEqual('UL');
});

test('it renders children', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverList>
      <div data-testid="children" />
    </PopoverList>
  );

  const children = await findByTestId('children');
  expect(children).toBeInTheDocument();
});

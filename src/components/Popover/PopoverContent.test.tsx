import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { PopoverContent } from '../Popover';

const testId = 'PopoverContent';

test('it renders PopoverContent', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverContent data-testid={testId} />
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
});

test('it renders children', async () => {
  const { findByTestId } = renderWithTheme(
    <PopoverContent>
      <div data-testid="children" />
    </PopoverContent>
  );

  const children = await findByTestId('children');
  expect(children).toBeInTheDocument();
});

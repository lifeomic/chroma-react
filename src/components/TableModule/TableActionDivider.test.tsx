import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TableActionDivider } from './TableActionDivider';

test('it renders', async () => {
  const { findByTestId } = renderWithTheme(
    <TableActionDivider data-testid="table-action-divider" />
  );

  const root = await findByTestId('table-action-divider');
  expect(root).toBeInTheDocument();
});

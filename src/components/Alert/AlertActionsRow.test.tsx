import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { AlertActionsRow } from './index';

const testId = 'AlertActionsRow';

test('it renders an AlertActionsRow', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertActionsRow data-testid={testId} />
  );

  const actionRow = await findByTestId(testId);
  expect(actionRow).toBeInTheDocument();
  expect(actionRow.classList.contains('ChromaAlertActionsRow-root')).true;
});

test('it applies the provided className', async () => {
  const { findByTestId } = renderWithTheme(
    <AlertActionsRow className="custom-class-name" data-testid={testId} />
  );

  const actionRow = await findByTestId(testId);
  expect(actionRow.classList.contains('custom-class-name')).true;
});

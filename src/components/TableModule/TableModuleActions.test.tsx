import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TableModuleActions } from './index';

const testId = 'TableModuleActions';

test('it renders a TableModuleActions', async () => {
  const { findByTestId } = renderWithTheme(
    <TableModuleActions data-testid={testId}>
      <p>content</p>
    </TableModuleActions>
  );
  const root = await findByTestId(testId);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('aria-label')).toEqual('Table Actions');
});

test('it renders a combination of anchor and button actions', async () => {
  const { findByTestId, findAllByTestId } = renderWithTheme(
    <TableModuleActions data-testid={testId}>
      <button data-testid="button">First Element</button>
      <a data-testid="anchor">Second Element</a>
      <a data-testid="anchor">Last Element</a>
    </TableModuleActions>,
    {}
  );

  const button = await findByTestId('button');
  expect(button).toBeInTheDocument;

  const anchors = await findAllByTestId('anchor');
  expect(anchors?.length).toEqual(2);
  expect(anchors[0]).toBeInTheDocument();
  expect(anchors[1]).toBeInTheDocument();
});

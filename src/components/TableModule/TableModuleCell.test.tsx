import * as React from 'react';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TableModuleCell } from './TableModuleCell';
import { testIds } from './TableModule';

const testId = 'TableModuleCell';

const RenderInTable: React.FC = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>header</th>
      </tr>
    </thead>
    <tbody>
      <tr>{children}</tr>
    </tbody>
  </table>
);

test('it renders a TableModuleCell', async () => {
  const { findByTestId } = renderWithTheme(
    <RenderInTable>
      <TableModuleCell
        isLastCellInRow={false}
        cell={{ align: 'left' }}
        data-testid={testId}
      >
        test
      </TableModuleCell>
    </RenderInTable>
  );
  const root = await findByTestId(testIds.bodyCell);
  expect(root).toBeInTheDocument();
  expect(root.getAttribute('role')).toEqual('cell');
  expect(root?.nodeName).toEqual('TD');
  expect(root).not.toHaveClass('ChromaTableModule-tableRowCellAlignRight');
});

test('it renders with "maxCellWidth={1}"', async () => {
  const { findByTestId } = renderWithTheme(
    <RenderInTable>
      <TableModuleCell
        maxCellWidth={1}
        isLastCellInRow={false}
        cell={{ align: 'left' }}
        data-testid={testId}
      >
        test
      </TableModuleCell>
    </RenderInTable>
  );
  const root = await findByTestId(testIds.bodyCell);
  expect(root).toHaveClass('ChromaTableModule-tableRowCellTruncate');
  expect(root).toHaveClass('ChromaTableModule-tableRowCellMaxWidth1');
});

test('it renders with "maxCellWidth={2}"', async () => {
  const { findByTestId } = renderWithTheme(
    <RenderInTable>
      <TableModuleCell
        maxCellWidth={2}
        isLastCellInRow={false}
        cell={{ align: 'left' }}
        data-testid={testId}
      >
        test
      </TableModuleCell>
    </RenderInTable>
  );
  const root = await findByTestId(testIds.bodyCell);
  expect(root).toHaveClass('ChromaTableModule-tableRowCellTruncate');
  expect(root).toHaveClass('ChromaTableModule-tableRowCellMaxWidth2');
});

test('it renders with "isLastCellInRow"', async () => {
  const { findByTestId } = renderWithTheme(
    <RenderInTable>
      <TableModuleCell
        isLastCellInRow
        cell={{ align: 'left' }}
        data-testid={testId}
      >
        test
      </TableModuleCell>
    </RenderInTable>
  );
  const root = await findByTestId(testIds.bodyCell);
  expect(root).toHaveClass('ChromaTableModule-tableRowCell');
});

test('it renders with cell "align: right"', async () => {
  const { findByTestId } = renderWithTheme(
    <RenderInTable>
      <TableModuleCell
        isLastCellInRow
        cell={{ align: 'right' }}
        data-testid={testId}
      >
        test
      </TableModuleCell>
    </RenderInTable>
  );
  const root = await findByTestId(testIds.bodyCell);
  expect(root).toHaveClass('ChromaTableModule-tableRowCellAlignRight');
});

import { fireEvent } from '@testing-library/dom';
import { renderWithTheme } from '../../testUtils/renderWithTheme';
import { TableModuleRow } from './TableModuleRow';
import * as React from 'react';
import { testIds } from './TableModule';

test('it renders a TableModuleRow', async () => {
  const { findByTestId } = renderWithTheme(
    <table>
      <tbody>
        <TableModuleRow data={{}} row={{}} cells={[]} headingsLength={0} />
      </tbody>
    </table>
  );
  const root = await findByTestId(testIds.bodyRow);
  expect(root).toBeInTheDocument();
  expect(root?.nodeName).toEqual('TR');
  expect(root?.getAttribute('role')).toEqual('row');
  expect(root?.getAttribute('tabIndex')).toEqual('0');
});

test('it renders an Icon Button when provided with `onRowClick`', async () => {
  const { findByLabelText } = renderWithTheme(
    <table>
      <tbody>
        <TableModuleRow
          data={{}}
          row={{}}
          cells={[]}
          headingsLength={0}
          onRowClick={jest.fn()}
        />
      </tbody>
    </table>
  );

  const button = await findByLabelText('View Details');
  expect(button).toBeInTheDocument();
});

test('it renders an Icon Button with the provided `rowClickLabel` + `onRowClick`', async () => {
  const { findByLabelText } = renderWithTheme(
    <table>
      <tbody>
        <TableModuleRow
          data={{}}
          row={{}}
          cells={[]}
          headingsLength={0}
          onRowClick={jest.fn()}
          rowClickLabel="icon button label"
        />
      </tbody>
    </table>
  );

  const button = await findByLabelText('icon button label');
  expect(button).toBeInTheDocument();
});

test('it calls the provided `onRowClick` with the row prop when the Icon Button is clicked', async () => {
  const mockFn = jest.fn();

  const { findByLabelText } = renderWithTheme(
    <table>
      <tbody>
        <TableModuleRow
          data={{}}
          row={{
            id: 'row',
          }}
          cells={[]}
          headingsLength={0}
          onRowClick={mockFn}
        />
      </tbody>
    </table>
  );

  const button = await findByLabelText('View Details');

  fireEvent.click(button);

  expect(mockFn).toBeCalledTimes(1);
  expect(mockFn).toBeCalledWith({ id: 'row' });
});

test('it renders the provided `rowActions`', async () => {
  const { findByTestId } = renderWithTheme(
    <table>
      <tbody>
        <TableModuleRow
          data={{}}
          row={{}}
          cells={[]}
          headingsLength={0}
          rowActions={() => {
            return <button data-testid="row-action">button</button>;
          }}
        />
      </tbody>
    </table>
  );

  const actions = await findByTestId('row-action');
  expect(actions).toBeInTheDocument();
});

test('it does not render row actions when the `rowActions` function returns null', async () => {
  const { findByRole } = renderWithTheme(
    <table>
      <tbody>
        <TableModuleRow
          data={{}}
          row={{}}
          cells={[]}
          headingsLength={0}
          rowActions={() => {
            return null;
          }}
        />
      </tbody>
    </table>
  );

  const td = await findByRole('cell');
  expect(td.innerHTML).toBe('');
});

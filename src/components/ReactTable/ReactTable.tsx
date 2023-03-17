import * as React from 'react';
import clsx from 'clsx';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  OnChangeFn,
  TableState,
} from '@tanstack/react-table';

import { TableModuleProps, useStyles } from '../TableModule/TableModule';

export interface ReactTableProps<T> extends TableModuleProps {
  data: Array<T>;
  columns: ColumnDef<T, any>[];
  enableRowSelection?: boolean;
  onRowSelectionChange?: OnChangeFn<T>;
  state?: Partial<TableState>;
}

export const ReactTable = React.memo(
  React.forwardRef<HTMLTableElement, ReactTableProps<any>>(
    (
      {
        columns,
        className,
        data,
        enableRowSelection,
        isLoading = false,
        onRowSelectionChange,
        rowRole,
        sortState = { sortKey: null, sortDirection: null },
        onStalledCapture,
        maxCellWidth,
        rowClickLabel,
        state,
        ...rootProps
      },
      forwardedRef
    ) => {
      const classes = useStyles({});

      const table = useReactTable({
        data,
        columns,
        enableRowSelection,
        getCoreRowModel: getCoreRowModel(),
        onRowSelectionChange,
        state,
      });

      return (
        <table
          className={clsx(classes.root, className)}
          ref={forwardedRef}
          role="table"
          {...rootProps}
        >
          <thead className={classes.tableHeader}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={classes.tableRow} role="row">
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody role="rowgroup">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={clsx(classes.tableRow, classes.tableDataRow)}
                role={rowRole || 'row'}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={clsx(
                      classes.tableRowCell,
                      classes.tableRowActionCell,
                      classes.stickyMenuButton
                    )}
                    role="cell"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  )
);

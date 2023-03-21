import * as React from 'react';
import clsx from 'clsx';

import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  OnChangeFn,
  TableState,
  Updater,
  SortingState,
} from '@tanstack/react-table';

import {
  TableModuleProps,
  useStyles,
  testIds,
} from '../TableModule/TableModule';
import { TableModuleRow } from '../TableModule/TableModuleRow';
import { TableHeaderCell } from '../TableModule/TableHeaderCell';
import { DotLoader } from '../DotLoader/index';
import { getTestProps } from '../../testUtils/getTestProps';
import { mapTableConfigToColumnDef } from './utils';

export interface ReactTableProps<T> extends TableModuleProps {
  data: Array<T>;
  columns?: ColumnDef<T, any>[];
  enableRowSelection?: boolean;
  enableSorting?: boolean;
  onRowSelectionChange?: OnChangeFn<T>;
  manualSorting?: boolean;
  onSortingChange?: OnChangeFn<T>;
  state?: Partial<TableState>;
}

export const ReactTableModule = React.memo(
  React.forwardRef<HTMLTableElement, ReactTableProps<any>>(
    (
      {
        columns,
        config,
        className,
        data,
        enableRowSelection,
        enableSorting,
        isLoading = false,
        onRowSelectionChange,
        onSortingChange,
        rowRole,
        sortState = { sortKey: null, sortDirection: null },
        maxCellWidth,
        rowClickLabel,
        state,
        ...rootProps
      },
      forwardedRef
    ) => {
      const classes = useStyles({});

      // use legacy when using config of TableModule
      if (config) {
        columns = config.map(mapTableConfigToColumnDef);
      }
      // it does manual sorting in legacy mode
      const manualSorting = !!config;

      const table = useReactTable({
        data,
        columns,
        enableRowSelection,
        enableSorting,
        onRowSelectionChange,
        onSortingChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state,
        manualSorting,
      });

      const headers = table.getHeaderGroups()[0].headers;

      return (
        <table
          role="table"
          className={clsx(classes.root, className)}
          ref={forwardedRef}
          {...rootProps}
        >
          <thead className={classes.tableHeader}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className={classes.tableRow}
                role="row"
                {...getTestProps(testIds.headerRow)}
              >
                {headerGroup.headers.map((header, i) => (
                  <TableHeaderCell
                    index={i}
                    key={header.id}
                    header={{ label: header.id }}
                    coreHeader={header}
                    onClick={header.column.getToggleSortingHandler()}
                    sortDirection={null}
                    headingsCount={headerGroup.headers.length}
                  ></TableHeaderCell>
                ))}
              </tr>
            ))}
          </thead>
          <tbody role="rowgroup">
            {!isLoading &&
              data &&
              table
                .getRowModel()
                .rows.map((row, rowIndex) => (
                  <TableModuleRow
                    key={`tableRow-${rowIndex}`}
                    data={row}
                    rowRole={rowRole}
                    maxCellWidth={maxCellWidth}
                    row={row}
                    headingsLength={headers?.length}
                    cells={row.getVisibleCells()}
                    rowClickLabel={rowClickLabel}
                  />
                ))}
            {isLoading && (
              <tr
                className={classes.tableRow}
                {...getTestProps(testIds.isLoadingRow)}
              >
                <td
                  className={classes.tableLoadingCell}
                  colSpan={headers?.length}
                >
                  <DotLoader size={0} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      );
    }
  )
);

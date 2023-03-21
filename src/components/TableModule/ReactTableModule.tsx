import * as React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  OnChangeFn,
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
        onRowClick,
        enableRowSelection,
        enableSorting,
        isLoading = false,
        onRowSelectionChange,
        onSortingChange,
        rowRole,
        sortState = { sortKey: null, sortDirection: null },
        maxCellWidth,
        rowActions,
        rowClickLabel,
        state,
        noResultsMessage,
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

      // support one level of headers only
      const headers = table.getHeaderGroups()[0].headers;

      return (
        <table
          role="table"
          className={clsx(classes.root, className)}
          ref={forwardedRef}
          {...rootProps}
        >
          <thead className={classes.tableHeader}>
            <tr
              className={classes.tableRow}
              role="row"
              {...getTestProps(testIds.headerRow)}
            >
              {headers.map((header, i) => (
                <TableHeaderCell
                  index={i}
                  key={header.id}
                  header={{ label: header.id }}
                  coreHeader={header}
                  onClick={header.column.getToggleSortingHandler()}
                  sortDirection={null}
                  headingsCount={headers.length}
                ></TableHeaderCell>
              ))}
              {(rowActions || onRowClick) && (
                <TableHeaderCell
                  header={{
                    label: '',
                  }}
                  index={headers.length + 1}
                  headingsCount={headers.length}
                  isSorting={false}
                  sortDirection={null}
                />
              )}
            </tr>
          </thead>
          <tbody role="rowgroup">
            {!isLoading && data && data.length === 0 && (
              <tr
                className={clsx(classes.tableRow, classes.tableDataRow)}
                role="row"
                {...getTestProps(testIds.noResultsRow)}
              >
                <motion.td
                  className={classes.tableRowCell}
                  colSpan={headers.length}
                  role="cell"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5 } }}
                >
                  {noResultsMessage || 'No results'}
                </motion.td>
              </tr>
            )}
            {!isLoading &&
              data &&
              table
                .getRowModel()
                .rows.map((row, rowIndex) => (
                  <TableModuleRow
                    key={`tableRow-${rowIndex}`}
                    data={row}
                    onRowClick={onRowClick}
                    rowRole={rowRole}
                    maxCellWidth={maxCellWidth}
                    row={row}
                    headingsLength={headers?.length}
                    cells={row.getVisibleCells()}
                    rowActions={rowActions}
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

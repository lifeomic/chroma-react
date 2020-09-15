import { getTestProps } from '../../testUtils/getTestProps';
import { TableCell } from './types';
import { useStyles, testIds } from './TableModule';
import * as React from 'react';
import clsx from 'clsx';

export interface TableModuleCell
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  children: any;
  maxCellWidth?: 1 | 2;
  isLastCellInRow: boolean;
  cell: TableCell;
}

export const TableModuleCell: React.FC<TableModuleCell> = React.memo(
  ({ maxCellWidth, isLastCellInRow, cell, children }) => {
    const classes = useStyles({});

    return (
      <td
        // Rules of alignment:
        // - `cell.align` wins over default behavior
        // - If this is the first cell and there is only one column for the table
        //   then it is left-aligned
        // - If this is the last cell and there is more than one column, then
        //   it is right-aligned
        // - Fallback behavior is left aligned (specified by tableRowCell class)
        className={clsx(
          classes.tableRowCell,
          ((cell.align && cell.align === 'right') || isLastCellInRow) &&
            classes.tableRowCellAlignRight,
          maxCellWidth && classes.tableRowCellTruncate,
          {
            [classes.tableRowCellMaxWidth1]: maxCellWidth === 1,
            [classes.tableRowCellMaxWidth2]: maxCellWidth === 2,
          },
          cell.className
        )}
        role="cell"
        {...getTestProps(testIds.bodyCell)}
      >
        {children}
      </td>
    );
  }
);

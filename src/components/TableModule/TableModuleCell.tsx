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
  maxCellWidth?: 1 | 2 | 3;
  wrapCellContent?: boolean;
  isLastCellInRow: boolean;
  cell: TableCell;
  isSticky?: boolean;
  left?: number;
}

export const TableModuleCell: React.FC<TableModuleCell> = React.memo(
  ({
    maxCellWidth,
    wrapCellContent,
    isLastCellInRow,
    cell,
    children,
    isSticky = false,
    left,
  }) => {
    const classes = useStyles({});

    return (
      <td
        // Rules of alignment:
        // - `cell.align` wins over default behavior
        // - If this is the first cell and there is only one column for the table
        //   then it is left-aligned
        // - If this is the last cell and there is more than one column, then
        //   it is right-aligned
        // - Allow for left alignment override on last cell
        // - Fallback behavior is left aligned (specified by tableRowCell class)
        className={clsx(
          classes.tableRowCell,
          ((isLastCellInRow && cell?.align !== 'left') ||
            cell?.align === 'right') &&
            classes.tableRowCellAlignRight,
          maxCellWidth && classes.tableRowCellTruncate,
          {
            [classes.tableRowCellMaxWidth1]: maxCellWidth === 1,
            [classes.tableRowCellMaxWidth2]: maxCellWidth === 2,
            [classes.tableRowCellMaxWidth3]: maxCellWidth === 3,
          },
          wrapCellContent && classes.wrapContent,
          cell.className,
          isSticky && classes.isSticky,
          isSticky && 'sticky-cell-hook'
        )}
        style={{ left: left }}
        role="cell"
        {...getTestProps(testIds.bodyCell)}
      >
        {children}
      </td>
    );
  }
);

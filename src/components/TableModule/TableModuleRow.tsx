import clsx from 'clsx';
import * as React from 'react';
import { useStyles } from './TableModule';
import { getTestProps } from '../../testUtils/getTestProps';
import { TableCell } from './types';
import { TableModuleProps, testIds } from './TableModule';
import { TableModuleCell } from './TableModuleCell';
import { TableModuleActions } from './TableModuleActions';
import { IconButton } from '../IconButton';
import { ChevronRight } from '@lifeomic/chromicons';
import { Tooltip } from '../Tooltip';
import { ButtonUnstyled } from '../ButtonUnstyled';
import { Checkbox } from '../Checkbox';

export interface TableModuleRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  data?: any;
  onRowClick?: (row: any) => void;
  rowRole?: 'link';
  maxCellWidth?: 1 | 2;
  row: any;
  headingsLength: number;
  cells: Array<TableCell>;
  rowActions?: TableModuleProps['rowActions'];
  rowClickLabel?: TableModuleProps['rowClickLabel'];
  stickyCols?: Array<number>;
  stickyCellsLeft?: Array<number>;
  enableRowSelection: boolean;
  disableSelecting: boolean;
  selectChangeHandler?: TableModuleProps['selectChangeHandler'];
  rowSelected?: TableModuleProps['rowSelected'];
}

const TableModuleRow: React.FC<TableModuleRowProps> = React.memo(
  ({
    onRowClick,
    rowRole,
    row,
    maxCellWidth,
    headingsLength,
    cells,
    rowActions,
    rowClickLabel,
    stickyCols = [],
    stickyCellsLeft = [],
    enableRowSelection,
    disableSelecting,
    selectChangeHandler,
    rowSelected,
  }) => {
    const classes = useStyles({});

    const handleRowClick = React.useCallback(
      (e) => {
        /*
          :'(

          It appears we have to add this ugly check due to the way our Checkbox works.
          It's likely a thing with framer-motion, as the native <input type="checkbox" does not
          run into this problem.

          Anyway, without this check, the order of events is:
          1) Row click handler
          2) Checkbox handler

          Whereas what we *need* is the checkbox handler to run *first*, and then we would
          stopPropagation() from within the checkbox onClick event.  Since we can't do that,
          for whatever reason with our Checkbox component, we are doing this check.
        */
        if (
          e.target?.tagName === 'path' &&
          e.target?.parentElement?.tagName === 'svg' &&
          e.target?.parentElement?.parentElement?.tagName === 'LABEL'
        ) {
          return;
        }

        e?.currentTarget?.blur();

        onRowClick?.(row);
      },
      [onRowClick, row]
    );

    const selectClickHandler = (
      e:
        | React.MouseEvent<HTMLInputElement, MouseEvent>
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();
      e.currentTarget.blur();
      e.preventDefault();
    };

    const rowContents = React.useMemo(
      () =>
        cells?.map((cell, colIndex) => {
          const cellContent = cell.content
            ? cell.content(row)
            : cell.valuePath && row[cell.valuePath];
          return (
            <TableModuleCell
              key={`column-${colIndex}`}
              maxCellWidth={maxCellWidth}
              isLastCellInRow={
                headingsLength > 1 && colIndex === headingsLength - 1
              }
              cell={cell}
              isSticky={stickyCols.indexOf(colIndex) >= 0}
              left={
                stickyCols.indexOf(colIndex) >= 0
                  ? stickyCellsLeft[stickyCols.indexOf(colIndex)]
                  : undefined
              }
            >
              {cellContent}
            </TableModuleCell>
          );
        }),
      [cells, headingsLength, maxCellWidth, row, stickyCols, stickyCellsLeft]
    );

    const maybeRowActions = React.useMemo(() => rowActions?.(row), [
      row,
      rowActions,
    ]);

    const maybeRowSelected = React.useMemo(() => rowSelected?.(row), [
      row,
      rowSelected,
    ]);

    return (
      <tr
        className={clsx(
          classes.tableRow,
          classes.tableDataRow,
          onRowClick && classes.clickable
        )}
        onClick={handleRowClick}
        role={rowRole || 'row'}
        tabIndex={0}
        {...getTestProps(testIds.bodyRow)}
      >
        {enableRowSelection && (
          <td
            className={clsx(
              classes.tableRowCell,
              classes.tableRowActionCell,
              classes.stickyMenuButton
            )}
            role="cell"
          >
            <ButtonUnstyled
              className={classes.tableRowCheckbox}
              onClick={(e) => {
                selectClickHandler(e);
                if (enableRowSelection && selectChangeHandler)
                  selectChangeHandler(row);
              }}
              disabled={disableSelecting}
            >
              <Checkbox
                label=""
                aria-label={rowClickLabel || 'Select Row'}
                checked={maybeRowSelected}
                disabled={disableSelecting}
                onChange={(row) => {
                  if (enableRowSelection && selectChangeHandler)
                    selectChangeHandler(row);
                }}
                onClick={selectClickHandler}
              />
            </ButtonUnstyled>
          </td>
        )}
        {rowContents}
        {(onRowClick || rowActions) && (
          <td
            className={clsx(
              classes.tableRowCell,
              classes.tableRowActionCell,
              classes.stickyMenuButton
            )}
            role="cell"
          >
            {(Boolean(maybeRowActions) || onRowClick) && (
              <TableModuleActions
                className={classes.tableModuleActions}
                tabIndex={0}
              >
                {maybeRowActions}
                {onRowClick && (
                  <Tooltip title={rowClickLabel || 'View Details'}>
                    <IconButton
                      aria-label={rowClickLabel || 'View Details'}
                      icon={ChevronRight}
                      color="inverse"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.currentTarget.blur();
                        onRowClick?.(row);
                      }}
                    />
                  </Tooltip>
                )}
              </TableModuleActions>
            )}
          </td>
        )}
      </tr>
    );
  }
);

TableModuleRow.displayName = 'TableModuleRow';

export { TableModuleRow };

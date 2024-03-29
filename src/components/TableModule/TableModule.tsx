import 'focus-visible';
import { DotLoader } from '../DotLoader/index';
import { GetClasses } from '../../typeUtils';
import { getTestProps } from '../../testUtils/getTestProps';
import { makeStyles } from '../../styles/index';
import { motion } from 'framer-motion';
import { TableHeaderCell } from './TableHeaderCell';
import { TableModuleRow } from './TableModuleRow';
import { warning } from '../../utils';
import {
  RowSelectionState,
  RowSelectionRow,
  TableSortState,
  TableHeader,
  TableCell,
  TableConfiguration,
  TableSortClickProps,
  TableState,
} from './types';
import * as React from 'react';
import clsx from 'clsx';
import { lighten } from '@mui/material/styles';

export const testIds = {
  bodyCell: 'tableModule-bodyCell',
  bodyRow: 'tableModule-bodyRow',
  headerCell: 'tableModule-headerCell',
  headerRow: 'tableModule-headerRow',
  isLoadingRow: 'tableModule-isLoadingRow',
  noResultsRow: 'tableModule-noResultsRow',
};

export const TableModuleStylesKey = 'ChromaTableModule';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      background: theme.palette.common.white,
      borderSpacing: 0,
      boxShadow: theme.boxShadows.table,
      display: 'table',
      overflowX: 'auto',
      width: '100%',
    },
    rounded: {
      borderRadius: theme.pxToRem(4),
    },
    tableHeader: {
      display: 'table-header-group',
    },
    tableRow: {
      background: theme.palette.common.white,
      color: 'inherit',
      display: 'table-row',
      outline: 'none',
      verticalAlign: 'middle',
      '&:hover': {
        '& $tableRowActionCell': {
          visibility: 'visible',
        },
      },
      '&:focus.focus-visible, &:focus-within': {
        '& $tableRowActionCell': {
          visibility: 'visible',
        },
      },
    },
    tableDataRow: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&:last-child': {
        borderBottom: 'none',
        // Hide table action cell bottom border
        // on the last table row to avoid 1px
        // vertical scroll
        '& $tableRowActionCell::after': {
          display: 'none',
        },
      },
      '&:hover': {
        background: lighten(theme.palette.primary[50], 0.5),
        '& $tableModuleActions': {
          left: theme.pxToRem(8),
          opacity: 1,
          transition: '0.15s ease-out',
          transitionDelay: '0.15s',
        },
        '& $isSticky': {
          background: lighten(theme.palette.primary[100], 0.5),
        },
      },
      '&:focus.focus-visible, &:focus-within': {
        background: lighten(theme.palette.primary[50], 0.5),
        '& $tableModuleActions': {
          left: theme.pxToRem(8),
          opacity: 1,
          transition: '0.15s ease-out',
          transitionDelay: '0.15s',
        },
      },
    },
    tableRowCell: {
      borderBottom: 'inherit',
      display: 'table-cell',
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      paddingBottom: theme.spacing(1.75),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1.75),
      textAlign: 'left',
      whiteSpace: 'nowrap',
      // First and last cells have default spacing
      // This matches the `TableHeaderCell`
      '&:first-of-type': {
        paddingLeft: theme.spacing(4),
      },
      '&:last-of-type': {
        paddingRight: theme.spacing(4),
      },
    },
    tableRowCellAlignRight: {
      textAlign: 'right',
    },
    tableRowCellTruncate: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    tableRowCellMaxWidth1: {
      maxWidth: '6.875rem',
    },
    tableRowCellMaxWidth2: {
      maxWidth: '10rem',
    },
    tableRowCellMaxWidth3: {
      maxWidth: '13.125rem',
    },
    tableRowActionCell: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 16,
      paddingLeft: 0,
      position: 'relative',
      textAlign: 'right',
      width: theme.pxToRem(1),
      zIndex: theme.zIndex.byValueUpTo20[6],
      // Add bottom border to table action row
      // when actions are hidden
      '&::after': {
        background: theme.palette.divider,
        content: `''`,
        display: 'block',
        height: theme.pxToRem(1),
        left: 0,
        position: 'absolute',
        width: '100%',
        bottom: theme.pxToRem(-1),
      },
    },
    tableModuleActions: {
      background: `linear-gradient(135deg,
        ${theme.palette.primary.light} 0%,
        ${theme.palette.primary.main} 22%,
        ${theme.palette.purple[700]} 92%)`,
      borderRadius: theme.pxToRem(16),
      boxShadow: theme.boxShadows.tooltip,
      display: 'inline-flex',
      minHeight: theme.pxToRem(32),
      left: 0,
      opacity: 0,
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem',
      position: 'relative',
      '& > button': {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 0,
        // Add negative horizontal margins when there is
        // only one button so container appears as circle
        // instead of a pill shape
        '&:only-of-type': {
          marginLeft: theme.spacing(-0.375),
          marginRight: theme.spacing(-0.375),
        },
      },
    },
    tableLoadingCell: {
      borderBottom: 'inherit',
      display: 'table-cell',
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(4),
      paddingTop: theme.spacing(1),
    },
    clickable: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    stickyMenuButton: {
      position: 'sticky',
      willChange: 'transform',
      right: 0,
    },
    isSticky: {
      background: lighten(theme.palette.graphite[50], 0.5),
      left: 0,
      position: 'sticky',
      zIndex: theme.zIndex.byValueUpTo20[4],
      willChange: 'transform',
    },
    isStickyLast: {
      boxShadow: `inset -4px 0 ${theme.palette.divider}`,
    },
    wrapContent: {
      whiteSpace: 'pre-wrap',
    },
  }),
  { name: TableModuleStylesKey }
);

export type TableModuleClasses = GetClasses<typeof useStyles>;

export interface TableModuleProps<Item = any>
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  config?: Array<TableConfiguration<Item>>;
  data?: Array<any>;
  isLoading?: boolean;
  onRowClick?: (row: any) => void;
  rowRole?: 'link';
  noResultsMessage?: string;
  sortState?: TableSortState;
  maxCellWidth?: 1 | 2 | 3;
  wrapCellContent?: boolean;
  rowActions?: (row: any, index?: number) => React.ReactNode;
  rowClickLabel?: string;
  state?: Partial<TableState>;
  enableRowSelection?: boolean;
  getRowId?: (row: Item, index: number) => string;
  onRowSelectionChange?: (state: RowSelectionState) => void;
}

/**
 * A table component with an opinionated API. It relies a `config` and `data` prop
 * for rendering. More on that below.
 *
 * ### Accessibility
 *
 * - The table leverages the proper `role` attributes.
 * - The `aria-sort` attribute is used when sorting occurs (ascending, descending,
 *   none).
 * - NOTE: To test with a screenreader with VoiceOver, use
 *   `control+option+command+t`.
 * - Resource:
 *   [https://inclusive-components.design/data-tables/](https://inclusive-components.design/data-tables/)
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TableModule/TableModule.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TableModule/TableModule.stories.tsx)
 */
export const TableModule = React.memo(
  React.forwardRef<HTMLTableElement, TableModuleProps>(
    (
      {
        config = [],
        className,
        data,
        onRowClick,
        isLoading = false,
        rowRole,
        noResultsMessage,
        sortState = { sortKey: null, sortDirection: null },
        maxCellWidth,
        wrapCellContent,
        rowActions,
        rowClickLabel,
        state,
        enableRowSelection = false,
        getRowId = (_, index) => index.toString(),
        onRowSelectionChange,
        ...rootProps
      },
      forwardedRef
    ) => {
      const classes = useStyles({});

      warning(
        Boolean(onRowClick) && !rowClickLabel,
        'Chroma Warning: It is recommended you provide "rowClickLabel" if specifying a "onRowClick" for the <TableModule> component. This will be a required prop in a future major version.'
      );

      const [sort, setSort] = React.useState<TableSortState>(sortState);

      const [rowSelection, setRowSelection] = React.useState<RowSelectionState>(
        state?.rowSelection || {}
      );

      const [headings, setHeadings] = React.useState<Array<TableHeader>>(
        config?.map((c) => c.header) || []
      );
      const [cells, setCells] = React.useState<Array<TableCell>>(
        config?.map((c) => c.cell) || []
      );

      const [stickyCols, setstickyCols] = React.useState<Array<any>>([]);

      const [stickyCellsLeft, setStickyCellsLeft] = React.useState<
        Array<number>
      >([]);

      React.useEffect(() => {
        if (config.length > 0) {
          setHeadings(config.map((c) => c.header));
          setCells(config.map((c) => c.cell));
          setstickyCols(
            config
              .map((c, index) => {
                if (c.isSticky) {
                  return index;
                }
              })
              .filter((index) => {
                if (index !== undefined) {
                  return true;
                }
              })
          );
        }
      }, [config]);

      React.useEffect(() => {
        if (sortState.sortKey && headings) {
          const column = headings && headings[sortState.sortKey];
          column.onSort &&
            column.onSort({
              index: sortState.sortKey,
              sortDirection: sortState.sortDirection,
              header: column,
            });
        }
      }, [headings, sortState.sortDirection, sortState.sortKey]);

      React.useEffect(() => {
        if (stickyCols.length === 0) {
          return;
        }
        const allStickyCells = Array.from(
          document.querySelectorAll('.sticky-cell-hook')
        );
        allStickyCells.forEach((cell, index) => {
          if ((index + 1) % stickyCols.length === 0) {
            cell?.classList.add(classes.isStickyLast);
          }
        });
      });

      const setStickyCellLeftValues = React.useCallback(() => {
        if (stickyCols.length === 0) {
          return;
        }

        let sum = 0;
        const stickyCellsLeft: Array<number> = [];
        // only need to grab column width from one row, since all rows should be the same in each column
        if (forwardedRef != null && typeof forwardedRef !== 'function') {
          const row = forwardedRef?.current?.childNodes[1].childNodes[0];
          row?.childNodes.forEach((node: any, index: number) => {
            if (stickyCols.includes(index)) {
              stickyCellsLeft.push(sum);
              sum += node?.clientWidth;
            }
          });
          setStickyCellsLeft(stickyCellsLeft);
        } else {
          console.warn(
            "Chroma Warning: Table's forwardRef is null, please set it in order to set the sticky cell's left value correctly"
          );
        }
      }, [forwardedRef, stickyCols]);

      React.useLayoutEffect(() => {
        if (stickyCols.length === 0) {
          return;
        }
        setStickyCellLeftValues();
      }, [setStickyCellLeftValues, stickyCols, config.length]);

      React.useEffect(() => {
        if (stickyCols.length === 0) {
          return;
        }
        window.addEventListener('resize', setStickyCellLeftValues);
        return () => {
          window.removeEventListener('resize', setStickyCellLeftValues);
        };
      }, [setStickyCellLeftValues, stickyCols]);

      const handleSortColumnClick = ({
        index,
        sortDirection,
        header,
      }: TableSortClickProps) => {
        // A column was clicked, and we either don't have a sort setup yet,
        // or we are moving from one column to another
        if (sort.sortKey !== index) {
          setSort({ sortKey: index, sortDirection: 'asc' });
          header.onSort &&
            header.onSort({ index, sortDirection: 'asc', header });
          return;
        }

        // The same column was clicked, so we need to figure out
        // the sorting direction now
        if (!sortDirection) {
          setSort({ sortKey: index, sortDirection: 'asc' });
          header.onSort &&
            header.onSort({ index, sortDirection: 'asc', header });
          return;
        }

        if (sortDirection === 'asc') {
          setSort({ sortKey: index, sortDirection: 'desc' });
          header.onSort &&
            header.onSort({ index, sortDirection: 'desc', header });
          return;
        }

        if (sortDirection === 'desc') {
          setSort({ sortKey: index, sortDirection: null });
          header.onSort &&
            header.onSort({ index, sortDirection: null, header });
          return;
        }
      };

      const isRowSelected = (row: any, index: number): boolean => {
        return rowSelection[getRowId(row, index)] ?? false;
      };

      const createRow = React.useCallback(
        (row: any, index: number): RowSelectionRow => ({
          ...row,
          getIsSelected: () => {
            return isRowSelected(row, index);
          },
          getCanSelect: () => enableRowSelection,
          toggleSelected: (value?: boolean) => {
            const isSelected = isRowSelected(row, index);
            value = typeof value !== 'undefined' ? value : !isSelected;

            if (isSelected === value) {
              return;
            }

            const newRowSelection = { ...rowSelection };

            if (isSelected) {
              delete newRowSelection[getRowId(row, index)];
            } else {
              newRowSelection[getRowId(row, index)] = true;
            }

            setRowSelection(newRowSelection);

            if (onRowSelectionChange) {
              onRowSelectionChange(newRowSelection);
            }
          },
          getToggleSelectedHandler() {
            return (e: unknown) => {
              if (enableRowSelection) {
                this.toggleSelected(
                  ((e as MouseEvent).target as HTMLInputElement).checked
                );
              }
            };
          },
        }),
        [setRowSelection, isRowSelected, onRowSelectionChange]
      );

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
              {headings?.map((header, i) => (
                <TableHeaderCell
                  index={i}
                  headingsCount={headings.length}
                  key={i}
                  header={header}
                  isSticky={stickyCols.indexOf(i) >= 0}
                  left={
                    stickyCols.indexOf(i) >= 0
                      ? stickyCellsLeft[stickyCols.indexOf(i)]
                      : undefined
                  }
                  isSorting={sort.sortKey === i}
                  sortDirection={sort.sortDirection}
                  onClick={handleSortColumnClick}
                  {...getTestProps(testIds.headerCell)}
                />
              ))}
              {(rowActions || onRowClick) && (
                <TableHeaderCell
                  header={{
                    label: '',
                  }}
                  index={headings?.length + 1}
                  headingsCount={headings.length}
                  isSorting={false}
                  sortDirection={sort.sortDirection}
                  isSticky={stickyCols.indexOf(headings?.length + 1) >= 0}
                  left={
                    stickyCols.indexOf(headings?.length + 1) >= 0
                      ? stickyCellsLeft[
                          stickyCols.indexOf(headings?.length + 1)
                        ]
                      : undefined
                  }
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
                  colSpan={headings.length}
                  role="cell"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1.5 } }}
                >
                  {noResultsMessage || 'No results'}
                </motion.td>
              </tr>
            )}
            {data?.map((row, rowIndex) => {
              const rowData = enableRowSelection
                ? createRow(row, rowIndex)
                : row;
              return (
                <TableModuleRow
                  key={`tableRow-${rowIndex}`}
                  onRowClick={onRowClick}
                  rowRole={rowRole}
                  maxCellWidth={maxCellWidth}
                  wrapCellContent={wrapCellContent}
                  row={rowData}
                  headingsLength={headings?.length}
                  cells={cells}
                  rowActions={rowActions}
                  rowIndex={rowIndex}
                  rowClickLabel={rowClickLabel}
                  stickyCols={stickyCols}
                  stickyCellsLeft={stickyCellsLeft}
                />
              );
            })}
            {isLoading && (
              <tr
                className={classes.tableRow}
                {...getTestProps(testIds.isLoadingRow)}
              >
                <td
                  className={classes.tableLoadingCell}
                  colSpan={headings.length}
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

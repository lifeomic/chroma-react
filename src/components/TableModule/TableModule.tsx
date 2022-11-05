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
  TableSortState,
  TableHeader,
  TableCell,
  TableConfiguration,
  TableSortClickProps,
} from './types';
import * as React from 'react';
import clsx from 'clsx';
import { lighten } from '@mui/material/styles';
import './staticCss.css';

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
    tableRowActionCell: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 16,
      paddingLeft: 0,
      position: 'relative',
      textAlign: 'right',
      width: theme.pxToRem(1),
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
    sticky: {
      position: 'sticky',
      willChange: 'transform',
      right: 0,
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
    isSticky: {
      background: 'inherit',
      left: 0,
      position: 'sticky',
      zIndex: 4,
      willChange: 'transform',
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
  maxCellWidth?: 1 | 2;
  ref?: React.Ref<HTMLTableElement>;
  rowActions?: (row: any) => React.ReactNode;
  rowClickLabel?: string;
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
        rowActions,
        rowClickLabel,
        ...rootProps
      },
      ref
    ) => {
      const classes = useStyles({});

      warning(
        Boolean(onRowClick) &&
          !rowClickLabel &&
          process.env.NODE_ENV === 'development',
        'Chroma Warning: It is recommended you provide "rowClickLabel" if specifying a "onRowClick" for the <TableModule> component. This will be a required prop in a future major version.'
      );

      const [sort, setSort] = React.useState<TableSortState>(sortState);

      const [headings, setHeadings] = React.useState<Array<TableHeader>>(
        config?.map((c) => c.header) || []
      );
      const [cells, setCells] = React.useState<Array<TableCell>>(
        config?.map((c) => c.cell) || []
      );

      React.useEffect(() => {
        if (config.length > 0) {
          setHeadings(config.map((c) => c.header));
          setCells(config.map((c) => c.cell));
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

      return (
        <table
          role="table"
          className={clsx(classes.root, className)}
          ref={ref}
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
              return (
                <TableModuleRow
                  key={`tableRow-${rowIndex}`}
                  data={row}
                  onRowClick={onRowClick}
                  rowRole={rowRole}
                  maxCellWidth={maxCellWidth}
                  row={row}
                  headingsLength={headings?.length}
                  cells={cells}
                  rowActions={rowActions}
                  rowClickLabel={rowClickLabel}
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

import clsx from 'clsx';
import * as React from 'react';
import { ChevronDown } from '@lifeomic/chromicons';
import { makeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';
import { TableSortDirection, TableHeader, TableSortClickProps } from './types';

export const TableHeaderCellStylesKey = 'ChromaTableHeaderCell';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      transition: 'color 0.25s ease',
      background: theme.palette.common.white,
      borderCollapse: 'collapse',
      borderSpacing: 0,
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: theme.pxToRem(22),
      paddingBottom: theme.spacing(1.75),
      paddingLeft: theme.spacing(2),
      // Intentional additional padding-right to account for the
      // sort chevron
      paddingRight: theme.spacing(2.5),
      paddingTop: theme.spacing(1.75),
      position: 'sticky',
      textAlign: 'left',
      top: 0,
      whiteSpace: 'nowrap',
      zIndex: 3,
      '&::after': {
        content: `''`,
        position: 'absolute',
        left: 0,
        width: '100%',
        bottom: 0,
        borderBottom: `4px solid ${theme.palette.primary.main}`,
      },
      // First and last headers have additional spacing intentionally
      '&:first-child': {
        paddingLeft: theme.spacing(4),
      },
      '&:last-child': {
        paddingRight: theme.spacing(4),
      },
    },
    rootAlignRight: {
      textAlign: 'right',
    },
    rootPeekIconHover: {
      '&:hover': {
        '& > svg': {
          display: 'inline',
        },
      },
    },
    clickable: {
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': {
        color: theme.palette.black[500],
        '& > *': {
          color: theme.palette.black[500],
        },
      },
    },
    icon: {
      transition: 'color 0.25s ease, opacity 0.25s ease, transform 0.25s ease',
      margin: theme.spacing(0.375, 0, 0, 0.5),
      color: theme.palette.black.main,
      position: 'absolute',
      top: '25%',
    },
    peekIcon: {
      // we rely on hovering of the root element to set this to
      // visible (see rootPeekIconHover)
      display: 'none',
      opacity: 0.5,
    },
    rotatedIcon: {
      transform: 'rotate(180deg)',
    },
    isSticky: {
      background: theme.palette.graphite[50],
      position: 'sticky',
      left: 0,
      zIndex: 4,
      willChange: 'transform',
    },
  }),
  { name: TableHeaderCellStylesKey }
);

export type TableHeaderCellClasses = GetClasses<typeof useStyles>;

export interface TableHeaderCellProps extends TableSortDirection {
  isSorting?: boolean;
  header: TableHeader;
  onClick?: (header: TableSortClickProps) => any;
  index: number;
  headingsCount: number;
  isSticky?: boolean;
  left?: number;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  header,
  isSorting = false,
  sortDirection,
  onClick,
  index,
  headingsCount,
  isSticky = false,
  left,
  ...rootProps
}) => {
  const classes = useStyles({});

  const handleClick = () => {
    onClick?.({ index, sortDirection, header });
  };

  const canSort = onClick && header.onSort;

  const Tag = !header?.content && !header.label ? 'td' : 'th';

  return (
    <Tag
      className={clsx(
        classes.root,
        header.onSort && classes.clickable,
        canSort && classes.rootPeekIconHover,
        // Rules of alignment:
        // - `header.align` wins over default behavior
        // - If this is the first header and there is only one column for the table
        //   then it is left-aligned
        // - If this is the last header and there is more than one column, then
        //   it is right-aligned
        // - Allow for left alignment override on last header
        // - Fallback behavior is left aligned (specified by root class)
        ((!header.align && headingsCount > 1 && index === headingsCount - 1) ||
          header?.align === 'right') &&
          classes.rootAlignRight,
        header.className,
        isSticky && classes.isSticky,
        isSticky && 'sticky-cell-hook'
      )}
      onClick={canSort ? handleClick : undefined}
      role="columnheader"
      aria-sort={
        !isSorting || !sortDirection
          ? 'none'
          : sortDirection === 'asc'
          ? 'ascending'
          : 'descending'
      }
      style={{ left: left }}
      {...rootProps}
    >
      {header.content ? header.content(header) : header.label}
      {/* We aren't actively sorting this column, but we want to display a "peek" icon so they know they can sort it */}
      {(!sortDirection || !isSorting) && canSort && (
        <ChevronDown
          className={clsx(classes.icon, classes.peekIcon, classes.rotatedIcon)}
          role="img"
          aria-hidden
          width={18}
          height={18}
        />
      )}
      {/* We have a sort active */}
      {isSorting && sortDirection && (
        <ChevronDown
          className={clsx(
            classes.icon,
            sortDirection === 'asc' && classes.rotatedIcon
          )}
          role="img"
          aria-hidden
          width={18}
          height={18}
        />
      )}
    </Tag>
  );
};

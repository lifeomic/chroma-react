import clsx from 'clsx';
import * as React from 'react';
import { X } from '../../icons/lined';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const ChipStylesKey = 'ChromaChip';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: theme.spacing(1.25, 1.25, 0, 0),
      height: theme.pxToRem(30),
      borderRadius: theme.pxToRem(4),
      backgroundColor: theme.palette.black[50],
      display: 'inline-flex',
      alignItems: 'center',
      color: theme.palette.black[400],
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    label: {
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      paddingRight: theme.pxToRem(10),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: theme.spacing(37.5),
      letterSpacing: '0.4px',
    },
    noDeleteButtonLabel: {
      paddingRight: 0,
    },
    svgStyle: {
      width: theme.pxToRem(10),
      height: theme.pxToRem(10),
    },
    deleteButton: {
      alignItems: 'center',
      background: theme.palette.black[400],
      borderRadius: 9999,
      border: 'none',
      display: 'inline-flex',
      justifyContent: 'center',
      color: theme.palette.common.white,
      cursor: 'pointer',
      height: theme.pxToRem(14),
      minHeight: theme.pxToRem(10),
      minWidth: theme.pxToRem(10),
      padding: 0,
      width: theme.pxToRem(14),
      transition: 'background 0.25s ease, opacity 0.25s ease',
      '&:hover': {
        background: theme.palette.black[400],
        opacity: 0.85,
      },
      '&:disabled': {
        background: theme.palette.black[100],
        color: theme.palette.common.white,
        cursor: 'initial',
      },
      '&:focus': {
        background: theme.palette.black[200],
        outline: 'none',
      },
    },
  }),
  { name: ChipStylesKey }
);

export type ChipClasses = GetClasses<typeof useStyles>;

export interface ChipOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string;
  onDelete?(): void;
  disableDelete?: boolean;
}

export interface ChipProps extends ChipOwnProps {}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    { children, label = '', disableDelete, onDelete, className, ...rootProps },
    ref
  ) => {
    const classes = useStyles({});

    return (
      <div
        ref={ref}
        className={clsx(classes.root, className)}
        tabIndex={0}
        aria-label={label}
        {...rootProps}
      >
        <span
          className={clsx(
            classes.label,
            !onDelete && classes.noDeleteButtonLabel
          )}
        >
          {label}
        </span>
        {!!onDelete && (
          <button
            className={classes.deleteButton}
            aria-label="Remove"
            disabled={disableDelete}
            onClick={onDelete}
            type="button"
            tabIndex={0}
          >
            <X className={classes.svgStyle} aria-hidden />
          </button>
        )}
        {children}
      </div>
    );
  }
);

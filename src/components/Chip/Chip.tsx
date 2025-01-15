import clsx from 'clsx';
import * as React from 'react';
import { X } from '@lifeomic/chromicons';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const ChipStylesKey = 'ChromaChip';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      background: theme.hexToRgba(theme.palette.graphite[900], 0.1),
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      display: 'inline-flex',
      height: theme.pxToRem(30),
      gap: theme.spacing(0.375),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(0.5),
    },
    inverseColor: {
      backgroundColor: theme.palette.common.white,
    },
    negativeColor: {
      backgroundColor: theme.palette.red[50],
      color: theme.palette.red[900],
      '& $deleteButton': {
        '&:hover': {
          backgroundColor: theme.palette.negative.main,
          color: theme.palette.common.white,
        },
        '&:disabled': {
          color: theme.palette.red[100],
        },
        '&:focus': {
          background: theme.palette.red[500],
          borderColor: theme.palette.negative.main,
          color: theme.palette.common.white,
        },
      },
    },
    primaryColor: {
      backgroundColor: theme.palette.blue[50],
      color: theme.palette.primary[800],
      '& $deleteButton': {
        '&:hover': {
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
        '&:disabled': {
          color: theme.palette.primary[100],
        },
        '&:focus': {
          background: theme.palette.primary[400],
          borderColor: theme.palette.primary.main,
          color: theme.palette.common.white,
        },
      },
    },
    positiveColor: {
      backgroundColor: theme.palette.green[100],
      color: theme.palette.green[900],
      '& $deleteButton': {
        '&:hover': {
          backgroundColor: theme.palette.positive.main,
          color: theme.palette.common.white,
        },
        '&:disabled': {
          color: theme.palette.green[400],
        },
        '&:focus': {
          background: theme.palette.green[500],
          borderColor: theme.palette.green.main,
          color: theme.palette.common.white,
        },
      },
    },
    warningColor: {
      backgroundColor: theme.palette.yellow[100],
      color: theme.palette.yellow[900],
      '& $deleteButton': {
        '&:hover': {
          background: theme.palette.yellow[900],
          color: theme.palette.common.white,
        },
        '&:disabled': {
          color: theme.palette.yellow[700],
        },
        '&:focus': {
          background: theme.palette.yellow[700],
          borderColor: theme.palette.yellow.main,
          color: theme.palette.yellow[900],
        },
      },
    },
    label: {
      fontSize: theme.typography.caption.fontSize,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: theme.spacing(37.5),
      letterSpacing: theme.pxToRem(0.4),
    },
    noDeleteButtonLabel: {
      paddingRight: 0,
    },
    svgStyle: {
      width: theme.pxToRem(13),
      height: theme.pxToRem(13),
      strokeWidth: theme.pxToRem(1.85),
    },
    deleteButton: {
      alignItems: 'center',
      background: 'none',
      border: 'none',
      borderRadius: 9999,
      display: 'inline-flex',
      justifyContent: 'center',
      color: 'currentcolor',
      cursor: 'pointer',
      maxHeight: theme.pxToRem(18),
      maxWidth: theme.pxToRem(18),
      minHeight: theme.pxToRem(18),
      minWidth: theme.pxToRem(18),
      padding: 0,
      transition: 'background 0.25s ease-out',
      '&:hover': {
        color: theme.palette.black[50],
        background: theme.palette.black[300],
        '&:disabled': {
          background: 'none',
        },
      },
      '&:disabled': {
        color: theme.palette.black[200],
        cursor: 'not-allowed',
      },
      '&:focus': {
        background: theme.palette.black[300],
        border: `solid ${theme.pxToRem(1.5)} ${theme.palette.primary.main}`,
        color: theme.palette.black[50],
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
  children?: React.ReactNode;
  color?:
    | 'default'
    | 'primary'
    | 'inverse'
    | 'negative'
    | 'positive'
    | 'warning';
  label?: string;
  onDelete?(): void;
  disableDelete?: boolean;
}

export interface ChipProps extends ChipOwnProps {}

/**
 * The Chip component is used for labeling items, tracking selected items in a list, etc.
 *
 * ### Accessibility
 *
 * - The Chip has a `tabIndex` set so it can be tabbed into.
 *   - Pressing `Tab` again, will set focus to the removal button.
 *   - When the removal button is focused, pressing `Space` or `Enter` triggers the click action.
 * - The Chip has `aria-label` set to the provided label.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Chip/Chip.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Chip/Chip.stories.tsx)
 *
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      children,
      label = '',
      disableDelete,
      onDelete,
      className,
      color = 'default',
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    return (
      <div
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.primaryColor]: color === 'primary',
            [classes.inverseColor]: color === 'inverse',
            [classes.negativeColor]: color === 'negative',
            [classes.positiveColor]: color === 'positive',
            [classes.warningColor]: color === 'warning',
          },
          className
        )}
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

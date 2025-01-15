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
      backgroundColor: theme.palette.black[50],
      borderRadius: theme.pxToRem(4),
      color: theme.palette.text.primary,
      display: 'inline-flex',
      height: theme.pxToRem(30),
      gap: theme.spacing(0.375),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(0.5),
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
      border: 'none',
      borderRadius: 9999,
      display: 'inline-flex',
      justifyContent: 'center',
      cursor: 'pointer',
      height: theme.pxToRem(18),
      minHeight: theme.pxToRem(13),
      minWidth: theme.pxToRem(13),
      padding: 0,
      width: theme.pxToRem(18),
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

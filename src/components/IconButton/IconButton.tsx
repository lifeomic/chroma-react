import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import 'focus-visible';

export const IconButtonStylesKey = 'ChromaIconButton';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 0,
      color: theme.palette.black[500],
      cursor: 'pointer',
      display: 'inline-flex',
      flex: '0 0 auto',
      justifyContent: 'center',
      margin: 0,
      outline: 'none',
      padding: theme.spacing(1.5),
      position: 'relative',
      transition: 'color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:focus': {
        borderRadius: '9999px',
        color: theme.palette.primary.main,
        outline: 'none',
        '&.focus-visible': {
          boxShadow: theme.boxShadows.focusVisible,
        },
      },
      '&:disabled': {
        cursor: 'default',
        pointerEvents: 'none',
        color: theme.palette.black[200],
      },
    },
    inverse: {
      background: 'transparent',
      color: theme.palette.common.white,
      '&:hover': {
        color: theme.palette.common.white,
        opacity: 0.85,
      },
      '&:focus': {
        color: theme.palette.common.white,
        opacity: 0.75,
        '&.focus-visible': {
          boxShadow: theme.boxShadows.focusVisibleInverse,
        },
      },
      '&:disabled': {
        color: theme.hexToRgba(theme.palette.common.white, 0.45),
      },
    },
    negative: {
      color: theme.palette.negative.main,
      '&:hover, &:focus': {
        color: theme.palette.negative.dark,
      },
      '&:disabled': {
        color: theme.palette.negative.main,
        opacity: 0.44,
      },
    },
    positive: {
      color: theme.palette.positive.main,
      '&:hover, &:focus': {
        color: theme.palette.positive.dark,
      },
      '&:disabled': {
        color: theme.palette.positive.main,
        opacity: 0.44,
      },
    },
    primary: {
      color: theme.palette.primary.main,
      '&:hover, &:focus': {
        color: theme.palette.primary[900],
      },
      '&:disabled': {
        color: theme.palette.primary.main,
        opacity: 0.44,
      },
    },
    size0: {
      '& > svg': {
        width: 18,
        height: 18,
      },
    },
    size1: {
      '& > svg': {
        width: 24,
        height: 24,
      },
    },
    paddingTop0: {
      paddingTop: 0,
    },
    paddingTop1: {
      paddingTop: theme.spacing(0.5),
    },
    paddingTop2: {
      paddingTop: theme.spacing(1),
    },
    paddingTop3: {
      paddingTop: theme.spacing(1.5),
    },
    paddingBottom0: {
      paddingBottom: 0,
    },
    paddingBottom1: {
      paddingBottom: theme.spacing(0.5),
    },
    paddingBottom2: {
      paddingBottom: theme.spacing(1),
    },
    paddingBottom3: {
      paddingBottom: theme.spacing(1.5),
    },
    paddingLeft0: {
      paddingLeft: 0,
    },
    paddingLeft1: {
      paddingLeft: theme.spacing(0.5),
    },
    paddingLeft2: {
      paddingLeft: theme.spacing(1),
    },
    paddingLeft3: {
      paddingLeft: theme.spacing(1.5),
    },
    paddingRight0: {
      paddingRight: 0,
    },
    paddingRight1: {
      paddingRight: theme.spacing(0.5),
    },
    paddingRight2: {
      paddingRight: theme.spacing(1),
    },
    paddingRight3: {
      paddingRight: theme.spacing(1.5),
    },
  }),
  { name: IconButtonStylesKey }
);

export type IconButtonClasses = GetClasses<typeof useStyles>;

export interface IconButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  ['aria-label']: string;
  color?: 'default' | 'inverse' | 'negative' | 'positive' | 'primary';
  icon: React.MemoExoticComponent<
    (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  >;
  size?: 0 | 1;
  paddingTop?: 0 | 1 | 2 | 3;
  paddingBottom?: 0 | 1 | 2 | 3;
  paddingLeft?: 0 | 1 | 2 | 3;
  paddingRight?: 0 | 1 | 2 | 3;
}

/**
 * A Button element with an icon only. Since it's only an icon that's rendered,
 * it's required to pass the `aria-label` prop so that screen readers can give
 * meaning to the button.
 *
 * ### Accessibility
 *
 * - The Icon Button has `type="button"`.
 *   - Pressing `Tab` will set focus to the element
 *   - Pressing `Space` or `Enter` triggers the click action.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconButton/IconButton.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconButton/IconButton.stories.tsx)
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      'aria-label': ariaLabel,
      className,
      color = 'default',
      disabled,
      icon: Icon,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      size = 1,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        type="button"
        className={clsx(
          classes.root,
          { [classes.size0]: size === 0 },
          {
            [classes.inverse]: color === 'inverse',
            [classes.negative]: color === 'negative',
            [classes.positive]: color === 'positive',
            [classes.primary]: color === 'primary',
          },
          {
            [classes.paddingTop0]: paddingTop === 0,
            [classes.paddingTop1]: paddingTop === 1,
            [classes.paddingTop2]: paddingTop === 2,
            [classes.paddingTop3]: paddingTop === 3,
          },
          {
            [classes.paddingBottom0]: paddingBottom === 0,
            [classes.paddingBottom1]: paddingBottom === 1,
            [classes.paddingBottom2]: paddingBottom === 2,
            [classes.paddingBottom3]: paddingBottom === 3,
          },
          {
            [classes.paddingLeft0]: paddingLeft === 0,
            [classes.paddingLeft1]: paddingLeft === 1,
            [classes.paddingLeft2]: paddingLeft === 2,
            [classes.paddingLeft3]: paddingLeft === 3,
          },
          {
            [classes.paddingRight0]: paddingRight === 0,
            [classes.paddingRight1]: paddingRight === 1,
            [classes.paddingRight2]: paddingRight === 2,
            [classes.paddingRight3]: paddingRight === 3,
          },
          className
        )}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...rootProps}
      >
        <Icon role="img" aria-hidden />
      </button>
    );
  }
);

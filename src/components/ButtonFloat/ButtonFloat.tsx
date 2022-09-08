import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import 'focus-visible';

export const ButtonFloatStylesKey = 'ChromaButtonFloat';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundImage: `linear-gradient(135deg,
        ${theme.palette.primary.light} 0%,
        ${theme.palette.primary.main} 22%,
        ${theme.palette.purple[700]} 92%)`,
      border: 0,
      boxShadow: theme.boxShadows.tooltip,
      bottom: theme.spacing(2),
      color: theme.palette.common.white,
      cursor: 'pointer',
      display: 'inline-flex',
      flex: '0 0 auto',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.button.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      justifyContent: 'center',
      letterSpacing: theme.pxToRem(0.5),
      margin: 0,
      outline: 'none',
      padding: theme.spacing(1.5, 2.5),
      position: 'absolute',
      right: theme.spacing(2),
      transition: 'color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundImage: `linear-gradient(135deg,
          ${theme.palette.primary.light} 0%,
          ${theme.palette.primary.main} 7.5%,
          ${theme.palette.purple[700]} 92%)`,
      },
      '&:focus': {
        outline: 'none',
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisible,
        backgroundColor: theme.palette.primary.main,
        backgroundImage: 'none',
      },
      '&:disabled': {
        backgroundColor: theme.palette.black[100],
        backgroundImage: 'none',
        cursor: 'not-allowed',
        pointerEvents: 'none',
        color: theme.palette.black[200],
      },
    },
    fullWidth: {
      width: '100%',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    trailingIcon: {
      marginRight: 0,
      marginLeft: theme.spacing(1),
    },
    size0: {
      borderRadius: theme.pxToRem(21),
      minHeight: theme.pxToRem(42),
      '& $icon': {
        width: theme.pxToRem(18),
        height: theme.pxToRem(18),
      },
    },
    size1: {
      borderRadius: theme.pxToRem(24),
      minHeight: theme.pxToRem(48),
      '& $icon': {
        width: theme.pxToRem(20),
        height: theme.pxToRem(20),
      },
    },
    size2: {
      borderRadius: theme.pxToRem(28),
      fontSize: theme.typography.body2.fontSize,
      minHeight: theme.pxToRem(56),
      paddingLeft: theme.spacing(2.75),
      paddingRight: theme.spacing(2.75),
      '& $icon': {
        width: theme.pxToRem(24),
        height: theme.pxToRem(24),
      },
    },
    justifyLeft: {
      left: theme.spacing(2),
      right: 'auto',
    },
    justifyCenter: {
      left: 'auto',
      right: 'auto',
    },
    justifyRight: {},
    alignTop: {
      top: theme.spacing(2),
      bottom: 'auto',
    },
    alignCenter: {
      top: 'auto',
      bottom: 'auto',
    },
    alignBottom: {},
  }),
  { name: ButtonFloatStylesKey }
);

export type ButtonFloatClasses = GetClasses<typeof useStyles>;

export interface ButtonFloatProps
  extends React.ComponentPropsWithoutRef<'button'> {
  align?: 'top' | 'center' | 'bottom';
  children?: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  fullWidth?: boolean;
  justify?: 'left' | 'center' | 'right';
  size?: 0 | 1 | 2;
  trailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

/**
A Button element that floats above other content.

### Accessibility

- The Button Float has `type="button"`.
- Pressing `Tab` will set focus to the element
- Pressing `Space` or `Enter` triggers the click action.

### Links

- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/ButtonFloat/ButtonFloat.tsx)
- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/ButtonFloat/ButtonFloat.stories.tsx)

 */
export const ButtonFloat = React.forwardRef<
  HTMLButtonElement,
  ButtonFloatProps
>(
  (
    {
      align = 'bottom',
      children,
      className,
      disabled,
      fullWidth,
      justify = 'right',
      icon: Icon,
      size = 2,
      trailingIcon: TrailingIcon,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          classes.root,
          {
            [classes.size0]: size === 0,
            [classes.size1]: size === 1,
            [classes.size2]: size === 2,
          },
          {
            [classes.justifyLeft]: justify === 'left',
            [classes.justifyCenter]: justify === 'center',
            [classes.justifyRight]: justify === 'right',
          },
          {
            [classes.alignTop]: align === 'top',
            [classes.alignCenter]: align === 'center',
            [classes.alignBottom]: align === 'bottom',
          },
          fullWidth && classes.fullWidth,
          className
        )}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...rootProps}
      >
        {!!Icon && <Icon role="img" aria-hidden className={classes.icon} />}
        {children}
        {!!TrailingIcon && (
          <TrailingIcon
            role="img"
            aria-hidden
            className={clsx(classes.icon, classes.trailingIcon)}
          />
        )}
      </button>
    );
  }
);

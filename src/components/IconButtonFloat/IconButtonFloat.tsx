import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import 'focus-visible';

export const IconButtonFloatStylesKey = 'ChromaIconButtonFloat';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundImage: `linear-gradient(135deg,
        ${theme.palette.primary.light} 0%,
        ${theme.palette.primary.main} 22%,
        ${theme.palette.purple[700]} 92%)`,
      border: 0,
      borderRadius: '50%',
      boxShadow: theme.boxShadows.tooltip,
      bottom: theme.spacing(2),
      color: theme.palette.common.white,
      cursor: 'pointer',
      display: 'inline-flex',
      flex: '0 0 auto',
      justifyContent: 'center',
      margin: 0,
      outline: 'none',
      padding: theme.spacing(1.5),
      position: 'absolute',
      right: theme.spacing(2),
      transition: 'color 0.25s ease, opacity 0.25s ease',
      userSelect: 'none',
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
    size0: {
      '& > svg': {
        width: theme.pxToRem(18),
        height: theme.pxToRem(18),
      },
    },
    size1: {
      padding: theme.spacing(1.75),
      '& > svg': {
        width: theme.pxToRem(20),
        height: theme.pxToRem(20),
      },
    },
    size2: {
      padding: theme.spacing(2),
      '& > svg': {
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
  { name: IconButtonFloatStylesKey }
);

export type IconButtonFloatClasses = GetClasses<typeof useStyles>;

export interface IconButtonFloatProps
  extends React.ComponentPropsWithoutRef<'button'> {
  ['aria-label']: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  align?: 'top' | 'center' | 'bottom';
  justify?: 'left' | 'center' | 'right';
  size?: 0 | 1 | 2;
}

export const IconButtonFloat = React.forwardRef<
  HTMLButtonElement,
  IconButtonFloatProps
>(
  (
    {
      'aria-label': ariaLabel,
      align = 'bottom',
      className,
      disabled,
      justify = 'right',
      icon: Icon,
      size = 2,
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

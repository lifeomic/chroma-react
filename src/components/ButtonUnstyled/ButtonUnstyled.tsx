import * as React from 'react';
import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import clsx from 'clsx';

export const ButtonUnstyledStylesKey = 'ChromaButtonUnstyled';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: 'transparent',
      border: 0,
      borderRadius: theme.pxToRem(4),
      cursor: 'pointer',
      padding: 0,
      width: 'fit-content',
      '&:focus': {
        outline: 'none',
      },
      '&:focus.focus-visible': {
        boxShadow: theme.boxShadows.focusVisible,
      },
      '&::-moz-focus-inner': {
        border: 'none',
      },
    },
    fullWidth: {
      width: '100%',
    },
  }),
  { name: ButtonUnstyledStylesKey }
);

export type ButtonUnstyledClasses = GetClasses<typeof useStyles>;

export interface ButtonUnstyledProps
  extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
  fullWidth?: boolean;
}

export const ButtonUnstyled = React.forwardRef<
  HTMLButtonElement,
  ButtonUnstyledProps
>(({ children, className, disabled, fullWidth, ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <button
      className={clsx(classes.root, fullWidth && classes.fullWidth, className)}
      disabled={disabled}
      ref={ref}
      tabIndex={disabled ? -1 : 0}
      type="button"
      {...rootProps}
    >
      {children}
    </button>
  );
});

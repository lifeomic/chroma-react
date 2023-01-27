import * as React from 'react';
import { GetClasses } from '../../typeUtils';
import { newMakeStyles } from '../../styles';
import clsx from 'clsx';

export const ButtonUnstyledStylesKey = 'ChromaButtonUnstyled';

export const useStyles = newMakeStyles({ name: ButtonUnstyledStylesKey })(
  (theme) => ({
    root: {
      backgroundColor: 'transparent',
      border: 0,
      borderRadius: theme.pxToRem(4),
      color: 'inherit',
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
  })
);

export type ButtonUnstyledClasses = GetClasses<typeof useStyles>;

export interface ButtonUnstyledProps
  extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

/**
 * A Button component with no button styles.
 *
 * ### Accessibility
 *
 * - The Button has `type="button"`.
 *   - Pressing `Tab` will set focus to the element
 *   - Pressing `Space` or `Enter` triggers the click action.
 * - When the Button has focus, Space and Enter keys activates it.
 * - When the Button is disabled, the tabIndex is set to `-1`.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Button/ButtonUnstyled.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Button/ButtonUnstyled.stories.tsx)
 */
export const ButtonUnstyled = React.forwardRef<
  HTMLButtonElement,
  ButtonUnstyledProps
>(({ children, className, disabled, fullWidth, ...rootProps }, ref) => {
  const { classes } = useStyles();

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

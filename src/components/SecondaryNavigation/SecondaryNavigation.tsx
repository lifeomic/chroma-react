import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses, StandardProps } from '../../typeUtils';

export const SecondaryNavigationStylesKey = 'ChromaSecondaryNavigation';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderRight: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      height: '100%',
    },
    horizontalNav: {
      position: 'relative',
      borderRight: 0,

      '& > ul': {
        display: 'flex',
        borderBottom: `1px solid`,
        borderBottomColor: theme.palette.divider,

        '& > li': {
          padding: theme.spacing(1, 3),
          fontSize: theme.typography.button.fontSize,
          letterSpacing: 0.5,
          whiteSpace: 'nowrap',

          '& > div': {
            height: theme.pxToRem(2),
            width: '100%',
            top: 'auto',
            bottom: 0,
            left: 0,
          },
        },
      },
    },
    list: {
      listStyle: 'none',
      margin: 0,
      overflowY: 'auto',
      padding: 0,
    },
  }),
  { name: SecondaryNavigationStylesKey }
);

export type SecondaryNavigationClasses = GetClasses<typeof useStyles>;

export interface SecondaryNavigationProps
  extends StandardProps<HTMLElement, SecondaryNavigationClasses> {
  variant?: 'vertical' | 'horizontal';
}

export const SecondaryNavigation = React.forwardRef<
  HTMLElement,
  SecondaryNavigationProps
>(
  (
    {
      children,
      variant = 'vertical',
      className,
      classes: additionalClasses,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });
    return (
      <nav
        ref={ref}
        className={clsx(
          classes.root,
          className,
          variant === 'horizontal' && classes.horizontalNav
        )}
        aria-label="Secondary"
        role="navigation"
        {...rootProps}
      >
        <ul className={classes.list}>{children}</ul>
      </nav>
    );
  }
);

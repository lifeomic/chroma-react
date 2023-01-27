import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Button, ButtonProps } from '../Button';

export const MenuButtonStylesKey = 'ChromaMenuButton';

export const useStyles = newMakeStyles({ name: MenuButtonStylesKey })(
  (theme) => ({
    trailingIcon: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginLeft: theme.spacing(1),
      verticalAlign: 'middle',
      position: 'relative',
      top: theme.pxToRem(-1),
    },
  })
);

export type MenuButtonClasses = GetClasses<typeof useStyles>;

export interface MenuButtonProps extends ButtonProps {
  children?: React.ReactNode;
  trailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

/** @deprecated Please use `trailingIcon` from Button instead. This will be removed in a future release */
export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, trailingIcon: TrailingIcon, ...rootProps }, ref) => {
    const { classes } = useStyles();
    return (
      <Button ref={ref} {...rootProps}>
        {children}
        {!!TrailingIcon && (
          <TrailingIcon
            role="img"
            aria-hidden
            className={classes.trailingIcon}
          />
        )}
      </Button>
    );
  }
);

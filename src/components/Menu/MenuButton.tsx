import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Button, ButtonProps } from '../Button';

export const MenuButtonStylesKey = 'ChromaMenuButton';

export const useStyles = makeStyles(
  (theme) => ({
    trailingIcon: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginLeft: theme.spacing(1),
    },
  }),
  { name: MenuButtonStylesKey }
);

export type MenuButtonClasses = GetClasses<typeof useStyles>;

export interface MenuButtonProps extends ButtonProps {
  trailingIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, trailingIcon: TrailingIcon, ...rootProps }, ref) => {
    const classes = useStyles({});
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

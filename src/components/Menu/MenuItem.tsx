import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const MenuItemStylesKey = 'ChromaMenuItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.body1.fontSize,
      letterSpacing: '0.015625em',
      margin: 0,
      outline: 'none',
      overflow: 'hidden',
      padding: theme.spacing(1.5, 2.5),
      userSelect: 'none',
      width: '100%',
      '&:hover,&:focus': {
        backgroundColor: 'rgba(222,244,252, 0.6)',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    icon: {
      marginRight: theme.spacing(2),
    },
  }),
  { name: MenuItemStylesKey }
);

export type MenuItemClasses = GetClasses<typeof useStyles>;

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<'button'> {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text?: string;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ className, children, icon: Icon, onClick, text, ...rootProps }, ref) => {
    const classes = useStyles({});
    const handleStopPropagation = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.stopPropagation();
      onClick && onClick(e);
    };

    return (
      <button
        ref={ref}
        className={clsx(classes.root, className)}
        onClick={handleStopPropagation}
        {...rootProps}
      >
        {!!Icon && (
          <Icon
            role="img"
            aria-hidden
            className={classes.icon}
            width={18}
            height={18}
          />
        )}
        {!!text && text}
        {children}
      </button>
    );
  }
);

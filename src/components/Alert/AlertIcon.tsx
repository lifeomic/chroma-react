import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import clsx from 'clsx';

export const AlertIconStylesKey = 'ChromaAlertIcon';

export const useStyles = makeStyles(
  () => ({
    root: {
      color: 'inherit',
      display: 'flex',
      flexShrink: 0,
      marginTop: '-0.0625rem',
      marginRight: '0.75rem',
      height: '1.5rem',
      width: '1.5rem',
    },
  }),
  { name: AlertIconStylesKey }
);

export type AlertIconClasses = GetClasses<typeof useStyles>;

export interface AlertIconProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const AlertIcon: React.FC<AlertIconProps> = ({
  className,
  children,
  icon: Icon,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <div className={clsx(classes.root, className)} {...rootProps}>
      {Icon && <Icon role="img" aria-hidden />}
      {children}
    </div>
  );
};

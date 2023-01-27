import { GetClasses } from '../../typeUtils';
import { newMakeStyles } from '../../styles';
import * as React from 'react';
import clsx from 'clsx';

export const BodyStylesKey = 'ChromaSlideOverBody';

export const useStyles = newMakeStyles({ name: BodyStylesKey })((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    width: '100%',
    height: '100%',
  },
}));

export type BodyClasses = GetClasses<typeof useStyles>;

export interface BodyProps {
  as?: React.ElementType<any>;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
export const Body: React.FC<BodyProps> = ({
  as,
  className,
  children,
  ...rootProps
}) => {
  const { classes } = useStyles();

  const AsComponent = as || 'div';

  return (
    <AsComponent className={clsx(classes.root, className)} {...rootProps}>
      {children}
    </AsComponent>
  );
};

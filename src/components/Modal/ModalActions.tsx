import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const ModalActionsStylesKey = 'ChromaModalActions';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1.75),
      '& > button': {
        marginRight: theme.spacing(1),
        '&:last-of-type': {
          marginRight: 0,
        },
      },
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
  }),
  { name: ModalActionsStylesKey }
);

export type ModalActionsClasses = GetClasses<typeof useStyles>;

export interface ModalActionsProps
  extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'space-between' | 'flex-end';
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  className,
  children,
  justify = 'flex-end',
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <div
      className={clsx(
        classes.root,
        {
          [classes.justifyBetween]: justify === 'space-between',
          [classes.justifyEnd]: justify === 'flex-end',
        },
        className
      )}
      {...rootProps}
    >
      {children}
    </div>
  );
};

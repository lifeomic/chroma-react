import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import clsx from 'clsx';

export const AlertActionsRowStylesKey = 'ChromaAlertActionsRow';

export const useStyles = newMakeStyles({ name: AlertActionsRowStylesKey })(
  () => ({
    root: {
      marginTop: '0.5rem',
      marginLeft: '-0.625rem',
      marginRight: '-0.625rem',
      '& > button, a': {
        '&:not(:last-child)': {
          marginRight: '0.25rem',
        },
      },
    },
  })
);

export type AlertActionsRowClasses = GetClasses<typeof useStyles>;

export interface AlertActionsRowProps {
  children?: React.ReactNode;
  className?: string;
}

export const AlertActionsRow: React.FC<AlertActionsRowProps> = ({
  className,
  children,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rootProps}>
      {children}
    </div>
  );
};

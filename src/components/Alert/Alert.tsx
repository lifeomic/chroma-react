import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import clsx from 'clsx';
import { NotificationStatusType } from '../_private/notificationTypes';

export const AlertStylesKey = 'ChromaAlert';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'flex-start',
      borderRadius: '0.375rem',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2, 3),
    },
    fullWidth: {
      width: '100%',
    },
    info: {
      backgroundColor: theme.palette.blue[50],
      color: theme.palette.primary[800],
    },
    warning: {
      backgroundColor: theme.palette.yellow[100],
      color: theme.palette.yellow[900],
    },
    error: {
      backgroundColor: theme.palette.red[50],
      color: theme.palette.red[900],
    },
    success: {
      backgroundColor: theme.palette.green[100],
      color: theme.palette.green[900],
    },
  }),
  { name: AlertStylesKey }
);

export type AlertClasses = GetClasses<typeof useStyles>;

export interface AlertProps {
  children?: React.ReactNode;
  className?: string;
  statusType?: NotificationStatusType;
  fullWidth?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, children, fullWidth, statusType = 'info', ...rootProps },
    ref
  ) => {
    const classes = useStyles({});
    return (
      <div
        className={clsx(
          classes.root,
          classes[statusType],
          fullWidth && classes.fullWidth,
          className
        )}
        ref={ref}
        role="alert"
        {...rootProps}
      >
        {children}
      </div>
    );
  }
);

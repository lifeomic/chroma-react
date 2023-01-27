import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import clsx from 'clsx';
import { NotificationStatusType } from '../_private/notificationTypes';

export const AlertStylesKey = 'ChromaAlert';

export const useStyles = newMakeStyles({ name: AlertStylesKey })((theme) => ({
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
}));

export type AlertClasses = GetClasses<typeof useStyles>;

export interface AlertProps {
  children?: React.ReactNode;
  className?: string;
  statusType?: NotificationStatusType;
  fullWidth?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

/**
  Alerts are used to communicate a state that affects a system, feature or page.

  ### Accessibility

  - The Alert component has the `alert` role.

  ### Links

  - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Alert/Alert.tsx)
  - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Alert/Alert.stories.tsx)
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, children, fullWidth, statusType = 'info', ...rootProps },
    ref
  ) => {
    const { classes } = useStyles();
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

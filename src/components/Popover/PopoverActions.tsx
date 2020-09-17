import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const PopoverActionsStylesKey = 'ChromaPopoverActions';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      padding: theme.spacing(1.75, 2),
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyEnd: {
      justifyContent: 'flex-end',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
  }),
  { name: PopoverActionsStylesKey }
);

export interface PopoverActionsOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  justify?: 'flex-start' | 'center' | 'flex-end';
}

export type PopoverActionsClasses = GetClasses<typeof useStyles>;

export interface PopoverActionsProps extends PopoverActionsOwnProps {}

export const PopoverActions = React.forwardRef<
  HTMLDivElement,
  PopoverActionsProps
>(({ children, className, justify = 'flex-end', ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <div
      ref={ref}
      className={clsx(
        classes.root,
        {
          [classes.justifyCenter]: justify === 'center',
          [classes.justifyEnd]: justify === 'flex-end',
          [classes.justifyStart]: justify === 'flex-start',
        },
        className
      )}
      {...rootProps}
    >
      {children}
    </div>
  );
});

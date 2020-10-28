import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const PopoverContentStylesKey = 'ChromaPopoverContent';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: theme.spacing(1.25, 2.5),
    },
  }),
  { name: PopoverContentStylesKey }
);

export type PopoverContentClasses = GetClasses<typeof useStyles>;

export interface PopoverContentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(({ children, ...rootProps }, ref) => {
  const classes = useStyles({});

  return (
    <div ref={ref} className={classes.root} {...rootProps}>
      {children}
    </div>
  );
});

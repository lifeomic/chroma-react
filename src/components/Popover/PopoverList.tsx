import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const PopoverListStylesKey = 'ChromaPopoverList';

export const useStyles = newMakeStyles({ name: PopoverListStylesKey })(
  (theme) => ({
    root: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      maxHeight: theme.pxToRem(432),
      overflowY: 'auto',
      '&:focus': {
        outline: 'none',
      },
    },
  })
);

export type PopoverListClasses = GetClasses<typeof useStyles>;

export interface PopoverListProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children?: React.ReactNode;
}

export const PopoverList = React.forwardRef<HTMLUListElement, PopoverListProps>(
  ({ children, ...rootProps }, ref) => {
    const { classes } = useStyles();

    return (
      <ul ref={ref} className={classes.root} tabIndex={0} {...rootProps}>
        {children}
      </ul>
    );
  }
);

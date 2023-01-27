import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const ListGroupHeadingStylesKey = 'ChromaListGroupHeading';

export const useStyles = newMakeStyles({ name: ListGroupHeadingStylesKey })(
  (theme) => ({
    root: {
      color: theme.palette.text.hint,
      fontSize: theme.pxToRem(10),
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: theme.pxToRem(1),
      padding: theme.spacing(0.25, 2, 0.5),
      textTransform: 'uppercase',
      '&:not(:first-child)': {
        borderTop: `solid 1px ${theme.palette.divider}`,
        marginTop: theme.spacing(0.75),
        paddingTop: theme.spacing(1.25),
      },
    },
  })
);

export type ListGroupHeadingClasses = GetClasses<typeof useStyles>;

export type ListGroupHeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ListGroupHeading: React.FC<ListGroupHeadingProps> = ({
  className,
  children,
}) => {
  const { classes } = useStyles();
  return <li className={clsx(classes.root, className)}>{children}</li>;
};

import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const MenuGroupHeadingStylesKey = 'ChromaMenuGroupHeading';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      fontSize: theme.pxToRem(10),
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: theme.pxToRem(1),
      padding: theme.spacing(0.25, 2, 0.5),
      color: theme.palette.text.hint,
      textTransform: 'uppercase',
      '&:not(:first-child)': {
        marginTop: theme.spacing(0.75),
        paddingTop: theme.spacing(1.25),
        borderTop: `solid 1px ${theme.palette.divider}`,
      },
    },
  }),
  { name: MenuGroupHeadingStylesKey }
);

export type MenuGroupHeadingClasses = GetClasses<typeof useStyles>;

export type MenuGroupHeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export const MenuGroupHeading: React.FC<MenuGroupHeadingProps> = ({
  className,
  children,
}) => {
  const { classes } = useStyles();
  return <div className={clsx(classes.root, className)}>{children}</div>;
};

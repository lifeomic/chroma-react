import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const GroupHeadingStylesKey = 'ChromaSelectGroupHeading';

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
  { name: GroupHeadingStylesKey }
);

export type GroupHeadingClasses = GetClasses<typeof useStyles>;

export interface GroupHeadingProps {
  className?: string;
  children?: React.ReactNode;
  ['data-select-role']: 'heading';
}

export const GroupHeading: React.FC<GroupHeadingProps> = ({
  children,
  className,
  ['data-select-role']: dataSelectRole,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <li className={clsx(classes.root, className)} role="option" {...rootProps}>
      {children}
    </li>
  );
};

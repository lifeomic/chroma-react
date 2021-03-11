import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const GroupHeadingStylesKey = 'ChromaSelectGroupHeading';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      fontWeight: theme.typography.fontWeightBold,
      margin: theme.spacing(0, 0.75),
      opacity: 0.55,
    },
  }),
  { name: GroupHeadingStylesKey }
);

export type GroupHeadingClasses = GetClasses<typeof useStyles>;

export interface GroupHeadingProps {
  className?: string;
}

export const GroupHeading: React.FC<GroupHeadingProps> = ({
  children,
  className,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <li className={clsx(classes.root, className)} role="option" {...rootProps}>
      {children}
    </li>
  );
};

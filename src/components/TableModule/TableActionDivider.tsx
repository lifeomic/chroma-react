import { Divider } from '../Divider';
import { GetClasses } from '../../typeUtils';
import { newMakeStyles } from '../../styles';
import * as React from 'react';
import clsx from 'clsx';

export const TableActionDividerStylesKey = 'ChromaTableActionDivider';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      height: theme.pxToRem(19),
      margin: `0 ${theme.pxToRem(16)} 0 0`,
      top: theme.pxToRem(4),
      position: 'relative',
    },
  }),
  { name: TableActionDividerStylesKey }
);

export type TableActionDividerClasses = GetClasses<typeof useStyles>;

export interface TableActionDividerProps {
  className?: string;
}

export const TableActionDivider: React.FC<TableActionDividerProps> = ({
  className,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <Divider
      className={clsx(classes.root, className)}
      color="inverse"
      direction="row"
      {...rootProps}
    />
  );
};

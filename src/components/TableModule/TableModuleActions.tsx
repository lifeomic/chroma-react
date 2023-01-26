import * as React from 'react';
import { newMakeStyles } from '../../styles/index';
import { GetClasses } from '../../typeUtils';
import clsx from 'clsx';

export const TableModuleActionsStylesKey = 'ChromaTableModuleActions';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      // Handle the case where an IconButton or IconbuttonLink is in a cell
      // We don't want it to be too large to push out the height of the row!
      '& > button, & > a': {
        display: 'flex',
        height: theme.pxToRem(26),
        marginRight: theme.spacing(2.5),
        padding: 0,
        '& > svg': {
          height: theme.pxToRem(15),
          width: theme.pxToRem(15),
        },
        '&:last-child': {
          marginRight: 0,
        },
      },
    },
  }),
  { name: TableModuleActionsStylesKey }
);

export type TableModuleActionsClasses = GetClasses<typeof useStyles>;

export interface TableModuleActionsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export const TableModuleActions: React.FC<TableModuleActionsProps> = ({
  children,
  className,
  ...rootProps
}) => {
  const { classes } = useStyles();
  return (
    <div
      className={clsx(classes.root, className)}
      aria-label="Table Actions"
      {...rootProps}
    >
      {children}
    </div>
  );
};

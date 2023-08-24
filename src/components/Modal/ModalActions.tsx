import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box } from '../Box';

export const ModalActionsStylesKey = 'ChromaModalActions';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderTop: `${theme.pxToRem(1)} solid ${theme.palette.divider}`,
    },
  }),
  { name: ModalActionsStylesKey }
);

export type ModalActionsClasses = GetClasses<typeof useStyles>;

export interface ModalActionsProps
  extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  justify?: 'space-between' | 'flex-end';
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  className,
  children,
  justify = 'flex-end',
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <Box
      className={clsx(classes.root, className)}
      gap={1}
      justify={justify === 'space-between' ? 'space-between' : 'flex-end'}
      paddingTop={2}
      paddingBottom={1.75}
      {...rootProps}
    >
      {children}
    </Box>
  );
};

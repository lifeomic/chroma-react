import { GetClasses } from '../../typeUtils';
import { makeStyles } from '../../styles';
import { Box, BoxProps } from '../Box';
import * as React from 'react';
import clsx from 'clsx';

export const ActionsStylesKey = 'ChromaSlideOverActions';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  }),
  { name: ActionsStylesKey }
);

export type ActionsClasses = GetClasses<typeof useStyles>;

export interface ActionsProps extends BoxProps {}

export const Actions: React.FC<ActionsProps> = ({
  className,
  children,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <Box
      className={clsx(classes.root, className)}
      gap={1}
      padding={2}
      {...rootProps}
    >
      {children}
    </Box>
  );
};

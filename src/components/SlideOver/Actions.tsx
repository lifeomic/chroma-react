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
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(1),
    },
  }),
  { name: ActionsStylesKey }
);

export type ActionsClasses = GetClasses<typeof useStyles>;

export const Actions: React.FC<BoxProps> = ({
  className,
  children,
  ...rootProps
}) => {
  const classes = useStyles({});
  return (
    <Box className={clsx(classes.root, className)} {...rootProps}>
      {children}
    </Box>
  );
};

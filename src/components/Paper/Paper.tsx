import clsx from 'clsx';
import * as React from 'react';
import { newMakeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box, BoxProps } from '../Box';

export const PaperStylesKey = 'ChromaPaper';

export const useStyles = newMakeStyles(
  (theme) => ({
    root: {
      background: theme.palette.common.white,
      boxShadow: theme.boxShadows.table,
      borderRadius: theme.pxToRem(3),
    },
    padding0: {
      padding: 0,
    },
    padding1: {
      padding: theme.spacing(1),
    },
    padding2: {
      padding: theme.spacing(2),
    },
  }),
  { name: PaperStylesKey }
);

export interface PaperOwnProps extends BoxProps {
  padding?: 0 | 1 | 2;
}

export type PaperClasses = GetClasses<typeof useStyles>;

export interface PaperProps extends PaperOwnProps {}

/**
 * The Paper component is used as a general content wrapper.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Paper/Paper.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Paper/Paper.stories.tsx)
 */
export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ children, className, padding = 2, ...rootProps }, ref) => {
    const { classes } = useStyles();

    return (
      <Box
        direction="column"
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.padding0]: padding === 0,
            [classes.padding1]: padding === 1,
            [classes.padding2]: padding === 2,
          },
          className
        )}
        {...rootProps}
      >
        {children}
      </Box>
    );
  }
);

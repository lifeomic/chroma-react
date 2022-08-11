import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { Box, BoxProps } from '../Box';

export const FormBoxStylesKey = 'ChromaFormBox';

export const useStyles = makeStyles(
  (theme) => ({
    root: {},
    vSpacing0: {
      '& > *:not(:last-child)': {
        marginBottom: 0,
      },
    },
    vSpacing05: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(0.5),
      },
    },
    vSpacing10: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(1),
      },
    },
    vSpacing15: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(1.5),
      },
    },
    vSpacing20: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
    },
    vSpacing25: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(2.5),
      },
    },
    vSpacing30: {
      '& > *:not(:last-child)': {
        marginBottom: theme.spacing(3),
      },
    },
    hSpacing0: {
      '& > *:not(:last-child)': {
        marginRight: 0,
      },
    },
    hSpacing05: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(0.5),
      },
    },
    hSpacing10: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
    hSpacing15: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(1.5),
      },
    },
    hSpacing20: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(2),
      },
    },
    hSpacing25: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(2.5),
      },
    },
    hSpacing30: {
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(3),
      },
    },
    padding0: {
      padding: 0,
    },
    padding05: {
      padding: theme.spacing(0.5),
    },
    padding10: {
      padding: theme.spacing(1),
    },
    padding15: {
      padding: theme.spacing(1.5),
    },
    padding20: {
      padding: theme.spacing(2),
    },
    xPadding0: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    xPadding05: {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    xPadding10: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(0.5),
    },
    xPadding15: {
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(0.5),
    },
    xPadding20: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(0.5),
    },
    yPadding0: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    yPadding05: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    yPadding10: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
    yPadding15: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(0.5),
    },
    yPadding20: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(0.5),
    },
  }),
  { name: FormBoxStylesKey }
);

export type FormBoxClasses = GetClasses<typeof useStyles>;

export interface FormBoxProps extends BoxProps {
  spacing?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3;
  padding?: 0 | 0.5 | 1 | 1.5 | 2;
  paddingY?: 0 | 0.5 | 1 | 1.5 | 2;
  paddingX?: 0 | 0.5 | 1 | 1.5 | 2;
}

export const FormBox = React.forwardRef<HTMLDivElement, FormBoxProps>(
  (
    {
      className,
      children,
      direction = 'column',
      spacing = 2,
      padding,
      paddingY,
      paddingX,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    return (
      <Box
        direction={direction}
        className={clsx(
          classes.root,
          {
            [classes.vSpacing0]: spacing === 0 && direction === 'column',
            [classes.vSpacing05]: spacing === 0.5 && direction === 'column',
            [classes.vSpacing10]: spacing === 1 && direction === 'column',
            [classes.vSpacing15]: spacing === 1.5 && direction === 'column',
            [classes.vSpacing20]: spacing === 2 && direction === 'column',
            [classes.vSpacing25]: spacing === 2.5 && direction === 'column',
            [classes.vSpacing30]: spacing === 3 && direction === 'column',
          },
          {
            [classes.hSpacing0]: spacing === 0 && direction === 'row',
            [classes.hSpacing05]: spacing === 0.5 && direction === 'row',
            [classes.hSpacing10]: spacing === 1 && direction === 'row',
            [classes.hSpacing15]: spacing === 1.5 && direction === 'row',
            [classes.hSpacing20]: spacing === 2 && direction === 'row',
            [classes.hSpacing25]: spacing === 2.5 && direction === 'row',
            [classes.hSpacing30]: spacing === 3 && direction === 'row',
          },
          {
            [classes.padding0]: padding === 0,
            [classes.padding05]: padding === 0.5,
            [classes.padding10]: padding === 1,
            [classes.padding15]: padding === 1.5,
            [classes.padding20]: padding === 2,
          },
          {
            [classes.yPadding0]: paddingY === 0,
            [classes.yPadding05]: paddingY === 0.5,
            [classes.yPadding10]: paddingY === 1,
            [classes.yPadding15]: paddingY === 1.5,
            [classes.yPadding20]: paddingY === 2,
          },
          {
            [classes.xPadding0]: paddingX === 0,
            [classes.xPadding05]: paddingX === 0.5,
            [classes.xPadding10]: paddingX === 1,
            [classes.xPadding15]: paddingX === 1.5,
            [classes.xPadding20]: paddingX === 2,
          },
          className
        )}
        ref={ref}
        {...rootProps}
      >
        {children}
      </Box>
    );
  }
);

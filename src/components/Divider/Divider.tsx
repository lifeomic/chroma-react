import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const DividerStylesKey = 'ChromaDivider';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.hexToRgba(theme.palette.common.black, 0.15),
      border: 'none',
      flexShrink: 0,
      margin: 0,
      height: 1,
      width: '100%',
    },
    default: {},
    row: {
      height: '100%',
      width: 1,
    },
    inverseColor: {
      backgroundColor: theme.hexToRgba(theme.palette.common.white, 0.25),
    },
    vSpacing0: {
      margin: 0,
    },
    vSpacing05: {
      margin: theme.spacing(0.5, 0),
    },
    vSpacing10: {
      margin: theme.spacing(1, 0),
    },
    vSpacing15: {
      margin: theme.spacing(1.5, 0),
    },
    vSpacing20: {
      margin: theme.spacing(2, 0),
    },
    vSpacing25: {
      margin: theme.spacing(2.5, 0),
    },
    vSpacing30: {
      margin: theme.spacing(3, 0),
    },
    vSpacing35: {
      margin: theme.spacing(3.5, 0),
    },
    vSpacing40: {
      margin: theme.spacing(4, 0),
    },
    hSpacing0: {
      margin: 0,
    },
    hSpacing05: {
      margin: theme.spacing(0, 0.5),
    },
    hSpacing10: {
      margin: theme.spacing(0, 1),
    },
    hSpacing15: {
      margin: theme.spacing(0, 1.5),
    },
    hSpacing20: {
      margin: theme.spacing(0, 2),
    },
    hSpacing25: {
      margin: theme.spacing(0, 2.5),
    },
    hSpacing30: {
      margin: theme.spacing(0, 3),
    },
    hSpacing35: {
      margin: theme.spacing(0, 3.5),
    },
    hSpacing40: {
      margin: theme.spacing(0, 4),
    },
  }),
  { name: DividerStylesKey }
);

export interface DividerOwnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {
  color?: 'inverse' | 'default';
  direction?: 'row' | 'column';
  spacing?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
}

export type DividerClasses = GetClasses<typeof useStyles>;

export interface DividerProps extends DividerOwnProps {}

/**
 * A `Divider` is a thin line that groups content in lists and layouts. The divider
 * renders as an `<hr>`.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Divider/Divider.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Divider/Divider.stories.tsx)
 */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      className,
      color = 'default',
      direction = 'column',
      spacing = 1,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});

    return (
      <hr
        ref={ref}
        className={clsx(
          classes.root,
          {
            [classes.row]: direction === 'row',
          },
          {
            [classes.inverseColor]: color === 'inverse',
          },
          {
            [classes.vSpacing0]: spacing === 0 && direction === 'column',
            [classes.vSpacing05]: spacing === 0.5 && direction === 'column',
            [classes.vSpacing10]: spacing === 1 && direction === 'column',
            [classes.vSpacing15]: spacing === 1.5 && direction === 'column',
            [classes.vSpacing20]: spacing === 2 && direction === 'column',
            [classes.vSpacing25]: spacing === 2.5 && direction === 'column',
            [classes.vSpacing30]: spacing === 3 && direction === 'column',
            [classes.vSpacing35]: spacing === 3.5 && direction === 'column',
            [classes.vSpacing40]: spacing === 4 && direction === 'column',
          },
          {
            [classes.hSpacing0]: spacing === 0 && direction === 'row',
            [classes.hSpacing05]: spacing === 0.5 && direction === 'row',
            [classes.hSpacing10]: spacing === 1 && direction === 'row',
            [classes.hSpacing15]: spacing === 1.5 && direction === 'row',
            [classes.hSpacing20]: spacing === 2 && direction === 'row',
            [classes.hSpacing25]: spacing === 2.5 && direction === 'row',
            [classes.hSpacing30]: spacing === 3 && direction === 'row',
            [classes.hSpacing35]: spacing === 3.5 && direction === 'row',
            [classes.hSpacing40]: spacing === 4 && direction === 'row',
          },
          className
        )}
        {...rootProps}
      />
    );
  }
);

import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses, StandardProps } from '../../typeUtils';
import { Text } from '../Text';

export const PageHeaderStylesKey = 'ChromaPageHeader';

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 0,
      minHeight: theme.pxToRem(82),
      paddingTop: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        flexWrap: 'wrap',
      },
    },
    topSpacing: {
      marginTop: theme.spacing(0.625),
    },
    alignCenter: {
      alignItems: 'center',
      paddingTop: 0,
    },
    marginNormal: {
      marginBottom: theme.spacing(4),
    },
    title: {
      flex: 1,
      [theme.breakpoints.down('md')]: {
        flexBasis: 'auto',
      },
    },
    left: {
      flex: 1,
      [theme.breakpoints.down('md')]: {
        flexBasis: 'auto',
      },
    },
    titleInverse: {
      color: theme.palette.common.white,
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
        flexBasis: '100%',
        margin: theme.spacing(2, 0, 4),
        order: 3,
      },
    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      flex: 1,
      [theme.breakpoints.down('md')]: {
        flexBasis: 'auto',
      },
    },
  }),
  { name: PageHeaderStylesKey }
);

export type PageHeaderClasses = GetClasses<typeof useStyles>;

export interface PageHeaderProps
  extends StandardProps<HTMLElement, PageHeaderClasses> {
  align?: 'center' | 'top';
  title?: string;
  center?: React.ReactNode;
  centerClassName?: string;
  margin?: 'none' | 'normal';
  actionsClassName?: string;
  actions?: React.ReactNode;
  color?: 'inverse' | 'default';
  left?: React.ReactNode;
  leftClassName?: string;
}

export const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  (
    {
      align = 'top',
      margin,
      className,
      title,
      actions,
      center = null,
      centerClassName = '',
      actionsClassName = '',
      classes: additionalClasses,
      color,
      left,
      leftClassName,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });

    return (
      <header
        {...rootProps}
        ref={ref}
        className={clsx(
          classes.root,
          {
            [(classes as any)[`margin${capitalize(margin!)}`]]:
              margin !== 'none',
          },
          {
            [classes.alignCenter]: align === 'center',
          },
          className
        )}
      >
        {!!left && (
          <div
            className={clsx(
              classes.left,
              {
                [classes.topSpacing]: align !== 'center',
              },
              leftClassName
            )}
          >
            {left}
          </div>
        )}
        {title && (
          <Text
            className={clsx(classes.title, {
              [classes.topSpacing]: align !== 'center',
            })}
            size="headline"
            color={color}
          >
            {title}
          </Text>
        )}
        {!!center && (
          <div className={clsx(classes.center, centerClassName)}>{center}</div>
        )}
        {!!actions && (
          <div className={clsx(classes.actions, actionsClassName)}>
            {actions}
          </div>
        )}
      </header>
    );
  }
);

PageHeader.defaultProps = {
  margin: 'none',
};

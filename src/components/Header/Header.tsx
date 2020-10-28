import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';

export const headerHeight = '3.125rem';

export const HeaderStylesKey = 'ChromaHeader';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      alignItems: 'center',
      backgroundColor: theme.palette.common.white,
      boxShadow: '0px 4px 54px rgba(0, 0, 0, 0.12);',
      display: 'flex',
      flex: 1,
      height: headerHeight,
      left: 'auto',
      minHeight: headerHeight,
      paddingLeft: '1rem',
      paddingRight: '1rem',
      position: 'relative',
      right: 0,
      top: 0,
      width: '100%',
      zIndex: 1100,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      flexGrow: 0,
      flexShrink: 0,
      marginRight: theme.spacing(1.5),
    },
    centerLogo: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      margin: 0,
    },
    left: {
      flex: 1,
      marginRight: theme.spacing(1.5),
    },
    right: {
      flexGrow: 0,
      flexShrink: 1,
    },
  }),
  { name: HeaderStylesKey }
);

export type HeaderClasses = GetClasses<typeof useStyles>;

export interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  centerLogo?: boolean;
}

export const Header = React.forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ logo, left, right, className, centerLogo, ...rootProps }, ref) => {
    const classes = useStyles({});

    return (
      <header
        ref={ref}
        className={clsx(classes.root, className)}
        role="banner"
        {...rootProps}
      >
        {!!logo && (
          <div
            role="presentation"
            className={clsx(
              classes.container,
              classes.logo,
              centerLogo && classes.centerLogo
            )}
          >
            {logo}
          </div>
        )}
        <div className={clsx(classes.container, classes.left)}>{left}</div>
        <div className={clsx(classes.container, classes.right)}>{right}</div>
      </header>
    );
  }
);

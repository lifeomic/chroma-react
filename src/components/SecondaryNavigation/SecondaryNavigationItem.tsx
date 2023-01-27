import clsx from 'clsx';
import * as React from 'react';
import { NavLink, Route, RouteProps } from 'react-router-dom';
import { newMakeStyles } from '../../styles';
import { GetClasses, StandardProps } from '../../typeUtils';

export const SecondaryNavigationItemStylesKey = 'ChromaSecondaryNavigationItem';

export const useStyles = newMakeStyles({
  name: SecondaryNavigationItemStylesKey,
})((theme) => ({
  root: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingRight: theme.spacing(3),
    textAlign: 'right',
    position: 'relative',
  },
  link: {
    color: theme.palette.text.hint,
    display: 'block',
    textDecoration: 'none',
    transition: 'color 0.5s ease',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
  linkActive: {
    color: theme.palette.text.primary,
  },
  selector: {
    position: 'absolute',
    width: theme.pxToRem(4),
    height: '100%',
    top: 0,
    right: 0,
    background: theme.palette.primary.main,
    transition: 'all 0.2s',
    opacity: 0,
  },
  selectorActive: {
    opacity: 100,
  },
}));

export type SecondaryNavigationItemClasses = GetClasses<typeof useStyles>;

export interface SecondaryNavigationItemProps
  extends StandardProps<HTMLLIElement, SecondaryNavigationItemClasses>,
    Pick<RouteProps, 'exact'> {
  to: string;
  label: string;
}

export const SecondaryNavigationItem = React.forwardRef<
  HTMLLIElement,
  SecondaryNavigationItemProps
>(
  (
    { className, exact, label, to, classes: additionalClasses, ...rootProps },
    ref
  ) => {
    const { classes } = useStyles(undefined, {
      props: { classes: additionalClasses },
    });

    return (
      <Route exact={exact} path={to}>
        {({ match }) => {
          const isActive = Boolean(match);

          return (
            <li
              ref={ref}
              className={clsx(classes.root, className)}
              {...rootProps}
            >
              <NavLink
                activeClassName={classes.linkActive}
                className={classes.link}
                exact={exact}
                to={to}
              >
                {label}
              </NavLink>

              <div
                role="presentation"
                className={clsx(
                  classes.selector,
                  isActive && classes.selectorActive
                )}
              />
            </li>
          );
        }}
      </Route>
    );
  }
);

import clsx from 'clsx';
import * as React from 'react';
import { NavLinkProps } from 'react-router-dom';
import { makeStyles } from '../../styles/index';
import { GetClasses, StandardProps } from '../../typeUtils';
import { sideBarWidthCollapsed, useLayoutManager } from '../LayoutManager';
import { Pill } from '../Pill';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import {
  BETA_INITIAL_TRANSITION,
  BETA_ANIMATE_TRANSITION,
  BETA_EXIT_TRANSITION,
} from './_private/common';
import { NavOrExternalLink } from './_private/NavOrExternalLink';
import { motion } from 'framer-motion';

export const PrimaryNavigationItemStylesKey = 'ChromaPrimaryNavigationItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      position: 'relative',
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      height: theme.pxToRem(47),
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color 0.5s ease, opacity 0.5s ease',
      '&:hover': {
        color: 'var(--link-hover)',
        textDecoration: 'none',
        fallbacks: {
          color: 'inherit',
        },
      },
    },
    linkActive: {
      backgroundColor: 'var(--link-active-bg)',
      color: 'var(--link-active)',
      '&:hover': {
        color: 'var(--link-active)',
        opacity: 0.75,
      },
      fallbacks: {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.primary[300],
      },
    },
    icon: {
      width: sideBarWidthCollapsed,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 'none',
    },
    label: {
      alignSelf: 'center',
      color: 'inherit',
      flex: 1,
      letterSpacing: 0.15,
      lineHeight: 'unset',
      overflowX: 'hidden',
      paddingRight: theme.spacing(2.25),
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    labelBeta: {
      maxWidth: 120,
      paddingRight: 0,
    },
    beta: {
      margin: theme.spacing(0.125, 1, 0),
      position: 'absolute',
      right: theme.spacing(4),
      transform: 'scale(0.75)',
    },
  }),
  { name: PrimaryNavigationItemStylesKey }
);

const text = {
  hide: { opacity: 0, x: 16, transition: { ease: 'easeIn' } },
  show: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
};

export type PrimaryNavigationItemClasses = GetClasses<typeof useStyles>;

export interface PrimaryNavigationItemProps
  extends StandardProps<HTMLLIElement, PrimaryNavigationItemClasses>,
    Pick<NavLinkProps, 'exact' | 'to'> {
  label?: string;
  beta?: boolean;
  betaLabelText?: string;
  icon?: React.ReactNode;
}

export const PrimaryNavigationItem = React.forwardRef<
  HTMLLIElement,
  PrimaryNavigationItemProps
>(
  (
    {
      exact,
      icon,
      label,
      to,
      className,
      classes: additionalClasses,
      beta,
      betaLabelText,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });
    const { isSidebarCollapsed } = useLayoutManager();

    return (
      <li ref={ref} className={clsx(classes.root, className)} {...rootProps}>
        <NavOrExternalLink
          exact={exact}
          className={classes.link}
          activeClassName={classes.linkActive}
          to={to}
        >
          {isSidebarCollapsed ? (
            <Tooltip title={label} placement="right" gutter={-4}>
              <div className={classes.icon}>{icon}</div>
            </Tooltip>
          ) : (
            <div className={classes.icon}>{icon}</div>
          )}
          <motion.div variants={text}>
            <Text
              size="subbody"
              className={clsx(
                classes.label,
                beta && classes.labelBeta,
                className
              )}
            >
              {label}
            </Text>
          </motion.div>
          {beta && !isSidebarCollapsed && (
            <Pill
              variant="highlight"
              label={betaLabelText}
              className={classes.beta}
              initial={BETA_INITIAL_TRANSITION}
              animate={BETA_ANIMATE_TRANSITION}
              exit={BETA_EXIT_TRANSITION}
            />
          )}
        </NavOrExternalLink>
      </li>
    );
  }
);

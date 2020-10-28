import clsx from 'clsx';
import * as React from 'react';
import { NavLinkProps } from 'react-router-dom';
import { makeStyles } from '../../styles/index';
import { GetClasses, StandardProps } from '../../typeUtils';
import { sideBarWidthCollapsed, useLayoutManager } from '../LayoutManager';
import { Text } from '../Text';
import { inDuration, outDuration } from './_private/common';
import { NavOrExternalLink } from './_private/NavOrExternalLink';
import { motion, MotionProps } from 'framer-motion';

export const PrimaryNavigationSubItemStylesKey =
  'ChromaPrimaryNavigationSubItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      height: theme.pxToRem(32),
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
      color: 'var(--link-active)',
      '&:hover': {
        color: 'var(--link-active)',
        opacity: 0.75,
      },
      fallbacks: {
        color: theme.palette.primary[300],
      },
    },
    spacer: {
      width: sideBarWidthCollapsed,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    },
    tooltipPlacement: {
      marginLeft: theme.spacing(-2),
    },
  }),
  { name: PrimaryNavigationSubItemStylesKey }
);

export type PrimaryNavigationSubItemClasses = GetClasses<typeof useStyles>;

export interface PrimaryNavigationSubItemProps
  extends Omit<
      StandardProps<HTMLLIElement, PrimaryNavigationSubItemClasses>,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    >,
    Pick<NavLinkProps, 'exact' | 'to'>,
    MotionProps {
  label?: string;
}

export const PrimaryNavigationSubItem = React.forwardRef<
  HTMLLIElement,
  PrimaryNavigationSubItemProps
>(
  (
    { exact, label, to, className, classes: additionalClasses, ...rootProps },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });
    const { isSidebarCollapsed } = useLayoutManager();

    if (isSidebarCollapsed) {
      return null;
    }

    return (
      <motion.li
        ref={ref}
        className={clsx(classes.root, className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: inDuration } }}
        exit={{ opacity: 0, transition: { duration: outDuration } }}
        {...rootProps}
      >
        <NavOrExternalLink
          exact={exact}
          className={classes.link}
          activeClassName={classes.linkActive}
          to={to}
        >
          <span role="presentation" aria-hidden className={classes.spacer} />
          <Text size="subbody" className={classes.label}>
            {label}
          </Text>
        </NavOrExternalLink>
      </motion.li>
    );
  }
);

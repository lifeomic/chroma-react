import clsx from 'clsx';
import * as React from 'react';
import { NavLinkProps, useLocation } from 'react-router-dom';
import { Plus } from '@lifeomic/chromicons';
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
  PLUS_INITIAL_TRANSITION,
  PLUS_ANIMATE_TRANSITION,
  PLUS_EXIT_TRANSITION,
} from './_private/common';
import { NavOrExternalLink } from './_private/NavOrExternalLink';
import { motion, MotionProps, Variants } from 'framer-motion';

export const PrimaryNavigationExpansionItemStylesKey =
  'ChromaPrimaryNavigationExpansionItem';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      position: 'relative',
    },
    rootOpen: {
      backgroundColor: 'var(--link-active-bg)',
      maxHeight: 'inherit',
      paddingBottom: theme.spacing(1),
      fallbacks: {
        backgroundColor: theme.palette.action.active,
      },
    },
    sidebarCollapsed: {
      paddingBottom: 0,
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
      color: 'var(--link-active)',
      '&:hover': {
        color: 'var(--link-active)',
        opacity: 0.75,
      },
      fallbacks: {
        color: theme.palette.primary[300],
      },
    },
    icon: {
      width: sideBarWidthCollapsed,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      maxWidth: 60,
      outline: 'none',
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
      whiteSpace: 'nowrap',
    },
    labelBeta: {
      justifyContent: 'flex-start',
      maxWidth: 120,
      paddingRight: 0,
    },
    plusIcon: {
      color: 'inherit',
      justifySelf: 'flex-end',
      marginRight: theme.spacing(2),
      position: 'absolute',
      right: 0,
    },
    hidden: {
      display: 'none',
    },
    content: {
      maxHeight: 0,
      overflow: 'hidden',
      transition: 'max-height 0.25s ease-in-out',
    },
    inner: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'inherit',
      width: '100%',
      height: '100%',
      visibility: 'visible',
    },
    innerHidden: {
      visibility: 'hidden',
    },
    innerUl: {
      margin: theme.spacing(-1, 0, 0),
      padding: 0,
      position: 'relative',
    },
    beta: {
      margin: theme.spacing(0.125, 1, 0),
      position: 'absolute',
      right: theme.spacing(4),
      transform: 'scale(0.75)',
    },
  }),
  { name: PrimaryNavigationExpansionItemStylesKey }
);

const BASE_TRANSITION_VARIANTS: Variants = {
  hide: { opacity: 0, x: 16, transition: { ease: 'easeIn' } },
  show: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
};

export type PrimaryNavigationExpansionItemClasses = GetClasses<
  typeof useStyles
>;

export interface PrimaryNavigationExpansionItemProps
  extends Omit<
      StandardProps<HTMLLIElement, PrimaryNavigationExpansionItemClasses>,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    >,
    Pick<NavLinkProps, 'exact' | 'to'>,
    MotionProps {
  rootParentPath?: string;
  label?: string;
  beta?: boolean;
  betaLabelText?: string;
  icon?: React.ReactNode;
}

export const PrimaryNavigationExpansionItem = React.forwardRef<
  HTMLLIElement,
  PrimaryNavigationExpansionItemProps
>(
  (
    {
      rootParentPath,
      exact,
      icon,
      label,
      beta,
      betaLabelText,
      to,
      children,
      className,
      classes: additionalClasses,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({ classes: additionalClasses });
    const { isSidebarCollapsed } = useLayoutManager();
    const location = useLocation();

    const innerRef = React.useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = React.useState<number>(0);
    const isExpanded = React.useMemo(
      () => location.pathname.startsWith(rootParentPath),
      [location, rootParentPath]
    );

    React.useEffect(() => {
      if (innerRef && innerRef.current && children) {
        setContentHeight(innerRef.current.scrollHeight);
      }
    }, [children, innerRef?.current?.scrollHeight]);

    return (
      <motion.li
        ref={ref}
        className={clsx(
          classes.root,
          isExpanded && classes.rootOpen,
          isSidebarCollapsed && classes.sidebarCollapsed,
          className
        )}
        {...rootProps}
      >
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
          <motion.div variants={BASE_TRANSITION_VARIANTS}>
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
          {!isSidebarCollapsed && (
            <motion.span
              className={clsx(classes.plusIcon, isExpanded && classes.hidden)}
              initial={PLUS_INITIAL_TRANSITION}
              animate={PLUS_ANIMATE_TRANSITION}
              exit={PLUS_EXIT_TRANSITION}
              role="presentation"
            >
              <Plus aria-hidden="true" width={18} height={18} />
            </motion.span>
          )}
        </NavOrExternalLink>
        <motion.div
          aria-hidden={!isExpanded}
          className={clsx(classes.content)}
          style={{ maxHeight: isExpanded ? contentHeight : 0 }}
        >
          <div
            ref={innerRef}
            className={clsx(classes.inner, !isExpanded && classes.innerHidden)}
          >
            <motion.ul className={classes.innerUl}>{children}</motion.ul>
          </div>
        </motion.div>
      </motion.li>
    );
  }
);

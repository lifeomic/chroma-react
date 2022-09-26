import clsx from 'clsx';
import * as React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import { Sidebar } from '@lifeomic/chromicons';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import { sideBarWidthCollapsed, useLayoutManager } from '../LayoutManager';
import { inDuration, outDuration } from './_private/common';
import { motion, Variants } from 'framer-motion';
import { getTestProps } from '../../testUtils/getTestProps';

const KEY_MAP = {
  TOGGLE_SIDE_BAR: '[',
};

export const testIds = {
  toggleButton: 'primaryNavigation-toggleButton',
  headerRoot: 'primaryNavigation-headerRoot',
};

export const PrimaryNavigationStylesKey = 'ChromaPrimaryNavigation';

export const useStyles = makeStyles(
  (theme) => ({
    root: {
      '--link-color': theme.palette.black[300],
      '--link-hover': theme.palette.black[50],
      '--link-active': theme.palette.primary[300],
      '--link-active-bg': theme.palette.action.active,
      '--link-size': '0.875rem',
      backgroundColor: theme.palette.grey.main,
      color: 'var(--link-color)',
      display: 'flex',
      paddingTop: theme.spacing(1.5),
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'auto',
      width: '100%',
      fallbacks: {
        color: theme.palette.black[300],
      },
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: theme.pxToRem(32),
      flex: '0 0 auto',
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1.25),
    },
    headerContent: {
      flex: '1 1 auto',
      paddingLeft: theme.spacing(2.25),
      paddingRight: theme.spacing(2.25),
    },
    headerContentMin: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: 0,
      paddingRight: 0,
    },
    headerContentHidden: {
      display: 'none',
    },
    toggleButton: {
      width: sideBarWidthCollapsed,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      opacity: 0.3,
    },
    navItems: {
      overflowY: 'auto',
      overflowX: 'hidden',
      flex: '1 1 100px',
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footer: {
      flex: '0 0 auto',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2.75),
      paddingRight: theme.spacing(2.75),
    },
    footToggle: {
      alignItems: 'flex-start',
      background: 'transparent none',
      border: 0,
      color: 'var(--link-color)',
      display: 'flex',
      fontFamily: theme.typography.fontFamily,
      fontSize: 'var(--link-size)',
      justifyContent: 'flex-start',
      letterSpacing: 0.15,
      padding: theme.spacing(1, 2.25, 2),
      textAlign: 'left',
      transition: 'color 0.5s ease',
      whiteSpace: 'nowrap',
      '&:hover': {
        color: 'var(--link-hover)',
        cursor: 'pointer',
      },
      '&[aria-checked=true]': {
        color: 'var(--link-active)',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    footToggleContainer: {
      width: theme.pxToRem(24),
      height: theme.pxToRem(24),
    },
    toggleText: {
      display: 'inline-block',
      marginLeft: theme.spacing(2.25),
      position: 'relative',
      top: theme.spacing(0.25),
    },
  }),
  {
    name: PrimaryNavigationStylesKey,
  }
);

const NAV_LIST_TRANSITION_VARIANTS: Variants = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.125,
    },
  },
};

const SHARED_TRANSITION_VARIANTS: Variants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export type PrimaryNavigationClasses = GetClasses<typeof useStyles>;

export interface PrimaryNavigationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: React.ReactNode;
  header?: React.ReactNode;
  headerMin?: React.ReactNode;
  footer?: React.ReactNode;
  toggleButtonText?: string;
}

/**
 * The Primary Navigation is not designed to be a single component, but instead a
 * composable navigation layout. It is an opinionated navigation solution, with a
 * set width, a collapsed and uncollapsed state (with a set width), and a single
 * content section.
 *
 * Notes:
 *
 * - `PrimaryNavigation` relies on LayoutManagerContext and must be wrapped by it.
 *   It is recommended that you use the `LayoutManager` component to handle this
 *   for you.
 * - `header` and `footer` props are both optional. They are only rendered when the
 *   sidebar is open.
 * - The `header` is rendered in a wrapping div container.
 * - An optional `headerMin` component is rendered in place of `header` when the
 *   sidebar is collapsed.
 *
 * ### Accessibility
 *
 * - The component renders a `<nav>` element.
 * - The aria `role="navigation"` attribute is set.
 * - The navigation has aria-labels set by default.
 * - The toggle sidebar button has the `aria-checked` attribute set.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/PrimaryNavigation/PrimaryNavigation.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/PrimaryNavigation/PrimaryNavigation.stories.tsx)
 */
export const PrimaryNavigation = React.forwardRef<
  HTMLElement,
  PrimaryNavigationProps
>(
  (
    {
      header,
      headerMin,
      footer,
      children,
      className,
      toggleButtonText,
      ...rootProps
    },
    ref
  ) => {
    const classes = useStyles({});
    const {
      isSidebarCollapsed,
      toggleSidebarCollapsed,
      isSidebarCollapseDisabled,
    } = useLayoutManager();

    const HANDLERS = {
      TOGGLE_SIDE_BAR: toggleSidebarCollapsed,
    };

    const showHeader =
      (headerMin && isSidebarCollapsed) || (header && !isSidebarCollapsed);

    return (
      <nav
        ref={ref}
        className={clsx(classes.root, className)}
        aria-label="Primary"
        role="navigation"
        {...rootProps}
      >
        {/* Header with optional header content */}
        {showHeader && (
          <div className={classes.header} {...getTestProps(testIds.headerRoot)}>
            {headerMin && isSidebarCollapsed && (
              <motion.div
                aria-label="Navigation Header Section Collapsed"
                className={clsx(
                  classes.headerContent,
                  classes.headerContentMin
                )}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.25, duration: 0.25 },
                }}
              >
                {headerMin}
              </motion.div>
            )}
            {header && !isSidebarCollapsed && (
              <motion.div
                aria-label="Navigation Header Section"
                className={clsx(classes.headerContent)}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.25 },
                }}
              >
                {header}
              </motion.div>
            )}
          </div>
        )}

        {/* Nav items are rendered as children in a ul  */}
        <motion.ul
          variants={NAV_LIST_TRANSITION_VARIANTS}
          animate={isSidebarCollapsed ? 'hide' : 'show'}
          className={clsx(classes.navItems)}
        >
          {children}
        </motion.ul>

        {/* Optional footer section */}
        {!isSidebarCollapsed && !!footer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: inDuration } }}
            exit={{ opacity: 0, transition: { duration: outDuration } }}
            className={classes.footer}
          >
            {footer}
          </motion.div>
        )}

        {/* Very bottom toggle section */}
        {!isSidebarCollapseDisabled && (
          <GlobalHotKeys keyMap={KEY_MAP} handlers={HANDLERS}>
            <button
              className={classes.footToggle}
              onClick={toggleSidebarCollapsed}
              role="checkbox"
              aria-checked={isSidebarCollapsed}
              {...getTestProps(testIds.toggleButton)}
            >
              <span className={classes.footToggleContainer}>
                <Sidebar aria-hidden />
              </span>
              <motion.span
                className={classes.toggleText}
                animate={isSidebarCollapsed ? 'hide' : 'show'}
                variants={SHARED_TRANSITION_VARIANTS}
              >
                {toggleButtonText || 'Toggle Sidebar'}
              </motion.span>
            </button>
          </GlobalHotKeys>
        )}
      </nav>
    );
  }
);

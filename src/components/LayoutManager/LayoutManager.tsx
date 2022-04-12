import clsx from 'clsx';
import * as React from 'react';
import { makeStyles } from '../../styles';
import { GetClasses } from '../../typeUtils';
import {
  LayoutManagerContext,
  LayoutManagerContextValue,
  LayoutManagerStoreKey,
} from './LayoutManagerContext';
import { canAccessLocalStorage } from './canAccessLocalStorage';

export const LayoutManagerStylesKey = 'ChromaLayoutManager';

const gridAreas = {
  sidebar: 'sidebar',
  header: 'header',
  main: 'main',
};

export const sideBarWidth = '16.625rem';
export const sideBarWidthCollapsed = '3.75rem';

export const useStyles = makeStyles(
  () => ({
    root: {
      display: 'grid',
      height: '100vh',
      width: '100%',
      gridTemplateAreas: `
        '${gridAreas.header} ${gridAreas.header}'
        '${gridAreas.sidebar} ${gridAreas.main}'
      `,
      gridTemplateColumns: 'max-content 1fr',
      gridTemplateRows: 'max-content 1fr',
    },
    sidebar: {
      display: 'flex',
      width: '16.625rem',
      gridArea: gridAreas.sidebar,
      height: '100%',
      overflowX: 'hidden',
      transform: 'translate3d(0, 0, 0)',
      transition: 'transform 0.25s, width 0.25s ease-out',
    },
    sidebarCollapsed: {
      transitionTimingFunction: 'ease-in-out',
      width: '3.75rem',
    },
    header: {
      gridArea: gridAreas.header,
    },
    main: {
      gridArea: gridAreas.main,
      overflow: 'auto',
    },
  }),
  {
    name: LayoutManagerStylesKey,
  }
);

export type LayoutManagerClasses = GetClasses<typeof useStyles>;

export interface LayoutManagerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
  header?: React.ReactNode;
  initialIsSidebarCollapsed?: boolean;
  isSidebarCollapseDisabled?: boolean;
  sidebar?: React.ReactNode;
}

export const LayoutManager: React.FC<LayoutManagerProps> = ({
  children,
  header,
  initialIsSidebarCollapsed,
  isSidebarCollapseDisabled,
  sidebar,
  className,
  ...rootProps
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(
    isSidebarCollapseDisabled ? false : initialIsSidebarCollapsed!
  );

  const contextValue = React.useMemo(
    (): LayoutManagerContextValue => ({
      isSidebarCollapsed,
      isSidebarCollapseDisabled: isSidebarCollapseDisabled!,
      toggleSidebarCollapsed: () => {
        if (isSidebarCollapseDisabled) {
          return;
        }
        setIsSidebarCollapsed((state) => {
          const isOpen = !state;
          canAccessLocalStorage() &&
            localStorage.setItem(
              LayoutManagerStoreKey,
              isOpen ? 'true' : 'false'
            );
          return isOpen;
        });
      },
    }),
    [isSidebarCollapsed, isSidebarCollapseDisabled]
  );

  const classes = useStyles({});

  React.useEffect(() => {
    if (isSidebarCollapseDisabled) {
      setIsSidebarCollapsed(false);
    }
  }, [isSidebarCollapseDisabled]);

  return (
    <LayoutManagerContext.Provider value={contextValue}>
      <div className={clsx(classes.root, className)} {...rootProps}>
        {!!header && <div className={classes.header}>{header}</div>}
        {!!sidebar && (
          <aside
            className={clsx(
              classes.sidebar,
              isSidebarCollapsed && classes.sidebarCollapsed
            )}
          >
            {sidebar}
          </aside>
        )}
        <main className={classes.main}>{children}</main>
      </div>
    </LayoutManagerContext.Provider>
  );
};

LayoutManager.defaultProps = {
  initialIsSidebarCollapsed: !!(
    canAccessLocalStorage() &&
    localStorage.getItem(LayoutManagerStoreKey) === 'true'
  ),
  isSidebarCollapseDisabled: false,
};

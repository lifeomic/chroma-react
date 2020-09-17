import * as React from 'react';

export const LayoutManagerStoreKey = '@@lifeomic/store/layoutSidebarCollapsed';

export interface LayoutManagerContextValue {
  isSidebarCollapseDisabled: boolean;
  isSidebarCollapsed: boolean;
  toggleSidebarCollapsed(): void;
}

export const LayoutManagerContext = React.createContext<
  LayoutManagerContextValue
>({
  isSidebarCollapseDisabled: false,
  isSidebarCollapsed: !!(
    localStorage && localStorage.getItem(LayoutManagerStoreKey) === 'true'
  ),
  toggleSidebarCollapsed: () => undefined,
});

export const useLayoutManager = () => React.useContext(LayoutManagerContext);

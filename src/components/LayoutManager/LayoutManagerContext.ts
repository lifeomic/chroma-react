import * as React from 'react';
import { canAccessLocalStorage } from './canAccessLocalStorage';

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
    canAccessLocalStorage() &&
    localStorage &&
    localStorage.getItem(LayoutManagerStoreKey) === 'true'
  ),
  toggleSidebarCollapsed: () => undefined,
});

export const useLayoutManager = () => React.useContext(LayoutManagerContext);

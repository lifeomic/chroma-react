import * as React from 'react';
import { TabStateReturn } from 'reakit/ts';

export interface TabsState {
  tabState: TabStateReturn;
  variant: 'default' | 'pill';
  fullWidth?: boolean;
}

export const TabsContext = React.createContext<TabsState>({
  // only will happen when tabs components are used outside of the context
  tabState: {} as any,
  variant: 'default',
});

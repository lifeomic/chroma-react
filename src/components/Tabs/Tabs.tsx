import * as React from 'react';
import { useTabState } from 'reakit/Tab';
import { TabsContext } from './TabsContext';

export interface TabsProps {
  children: React.ReactNode;
  manualControl?: boolean;
  selectedTabId?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  selectedTabId,
  manualControl,
}) => {
  const tab = useTabState({ selectedId: selectedTabId, manual: manualControl });
  const value = React.useMemo(() => tab, [tab]);

  // Re-select our tab if it changes via a manual override
  if (selectedTabId && manualControl && tab.selectedId !== selectedTabId) {
    tab.select(selectedTabId);
  }

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

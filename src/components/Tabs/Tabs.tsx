import * as React from 'react';
import { useTabState } from 'reakit/Tab';
import { TabsContext } from './TabsContext';

export interface TabsProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  manualControl?: boolean;
  selectedTabId?: string;
  variant?: 'default' | 'pill';
}

/**
 * Tab components for conditionally rendering content.
 *
 * ### Accessibility
 *
 * - Tab has `role="tab"`.
 * - Tab has `aria-controls` referring to its associated TabPanel.
 * - The selected Tab has `aria-selected` set to true and all other Tabs have it
 *   set to false.
 * - The `left` and `right` arrow keys can be used to cycle through the tabs, when
 *   the tab container has focus.
 * - TabList has `role="tablist"`.
 * - TabList has `aria-orientation` set to vertical or horizontal based on the
 *   value of the orientation option.
 * - TabPanel has `role="tabpanel"`.
 * - TabPanel has `aria-labelledby` referring to its associated Tab.
 *
 * ### Links
 *
 * - [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Tabs/Tabs.tsx)
 * - [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Tabs/Tabs.stories.tsx)
 */
export const Tabs: React.FC<TabsProps> = ({
  children,
  fullWidth,
  selectedTabId,
  manualControl,
  variant = 'default',
}) => {
  const tab = useTabState({ selectedId: selectedTabId, manual: manualControl });
  const value = React.useMemo(() => tab, [tab]);

  // Re-select our tab if it changes via a manual override
  if (selectedTabId && manualControl && tab.selectedId !== selectedTabId) {
    tab.select(selectedTabId);
  }

  return (
    <TabsContext.Provider value={{ variant, fullWidth, tabState: value }}>
      {children}
    </TabsContext.Provider>
  );
};

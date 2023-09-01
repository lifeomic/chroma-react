import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  args: {
    children: (
      <>
        <TabList aria-label="My Tabs">
          <Tab stopId="tab1">Tab 1 Pill</Tab>
          <Tab stopId="tab2">Tab 2 Pill</Tab>
          <Tab stopId="tab3" disabled>
            Tab 3 Pill
          </Tab>
        </TabList>
        <TabPanel>Tab 2 selected</TabPanel>
        <TabPanel>Tab 1 selected</TabPanel>
      </>
    ),
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

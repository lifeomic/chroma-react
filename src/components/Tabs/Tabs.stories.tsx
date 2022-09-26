import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {},
  subcomponents: { Tab, TabList, TabPanel },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};

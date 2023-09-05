import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Tabs } from './Tabs';
import { TabList } from './TabList';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
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
        <TabPanel stopId="tab1">Tab 1 selected</TabPanel>
        <TabPanel stopId="tab2">Tab 2 selected</TabPanel>
      </>
    ),
  },
};

const TemplateManual: StoryFn<typeof Tabs> = (args) => {
  const [activeTab, setActiveTab] = React.useState('tab1');
  const [content, setContent] = React.useState(
    'No side effect has been called yet...'
  );

  return (
    <>
      <Tabs {...args} selectedTabId={activeTab}>
        <TabList aria-label="My Tabs">
          <Tab
            stopId="tab1"
            onClick={() => {
              setActiveTab('tab1');
              setContent('Some side effect from tab 1');
            }}
          >
            Tab 1 Pill
          </Tab>
          <Tab
            stopId="tab2"
            onClick={() => {
              setActiveTab('tab2');
              setContent('Some side effect from tab 2');
            }}
          >
            Tab 2 Pill
          </Tab>
          <Tab
            stopId="tab3"
            onClick={() => {
              setActiveTab('tab3');
              setContent('Some side effect from tab 3');
            }}
          >
            Tab 3 Pill
          </Tab>
        </TabList>
        <TabPanel stopId="tab1">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel stopId="tab2">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel stopId="tab3">
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
      <div style={{ backgroundColor: 'whitesmoke', padding: '1rem' }}>
        <p>{content}</p>
      </div>
    </>
  );
};

export const ManualControl: Story = {
  render: TemplateManual,
  args: {
    manualControl: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Manual control allows you to run side effects by handling tab change manually with an onClick() on each tab',
      },
    },
  },
};

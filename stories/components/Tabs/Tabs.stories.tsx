import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tab, TabList, TabPanel, Tabs } from '../../../src/components/Tabs';
import { Container } from '../../storyComponents/Container';
import defaultMd from './default.md';

const TabsPlayground: React.FC = () => (
  <>
    <Container>
      <Tabs selectedTabId="tab2">
        <TabList aria-label="My Tabs">
          <Tab stopId="tab1" onClick={() => console.log('tab1 clicked')}>
            Tab 1
          </Tab>
          <Tab stopId="tab2" onClick={() => console.log('tab2 clicked')}>
            Tab 2
          </Tab>
          <Tab
            stopId="tab3"
            onClick={() => console.log('should not work...')}
            disabled
          >
            Tab 3
          </Tab>
          <Tab stopId="tab4" onClick={() => console.log('tab4 clicked')}>
            Tab 4
          </Tab>
        </TabList>
      </Tabs>
    </Container>
    <Container containerStyles={{ display: 'block' }}>
      <Tabs selectedTabId="tab2">
        <TabList aria-label="My Tabs">
          <Tab stopId="tab1" onClick={() => console.log('tab1 clicked')}>
            Tab 1
          </Tab>
          <Tab stopId="tab2" onClick={() => console.log('tab2 clicked')}>
            Tab 2
          </Tab>
        </TabList>
        <TabPanel>Tab 1 selected</TabPanel>
        <TabPanel>Tab 2 selected</TabPanel>
      </Tabs>
    </Container>
  </>
);

storiesOf('Components/Tabs', module).add('Default', () => <TabsPlayground />, {
  readme: { content: defaultMd },
});

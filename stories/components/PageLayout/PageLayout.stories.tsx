import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from '../../../src/components/Button';
import { PageLayout } from '../../../src/components/PageLayout';
import { Paper } from '../../../src/components/Paper';
import {
  SecondaryNavigation,
  SecondaryNavigationItem,
} from '../../../src/components/SecondaryNavigation';
import { Text } from '../../../src/components/Text';
import { spacing } from '../../storyStyles';
import applyBackgroundMd from './applyBackground.md';
import md from './default.md';
import disclaimerMd from './disclaimer.md';
import sidebarMd from './sidebar.md';
import tabsMd from './tabs.md';
import withCenterActionsMd from './withCenterActions.md';

const PageLayoutContent: React.FC = () => (
  <Paper
    style={{
      padding: spacing[4],
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}
  >
    <Text size="headline" marginBottom>
      Page Content
    </Text>
    <Text size="body" style={{ marginBottom: spacing[4] }}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </Text>
  </Paper>
);

const PageLayoutStory: React.FC = () => (
  <PageLayout title="Header Test" headerAlign="center">
    <PageLayoutContent />
  </PageLayout>
);

const PageLayoutWithBackgroundStory: React.FC = () => (
  <PageLayout
    left={
      <Text size="headline" color="inverse">
        Header
      </Text>
    }
    headerAlign="center"
    maxWidth={false}
    applyBackgroundCover={true}
  >
    <div>
      <Text size="headline" marginBottom>
        Content
      </Text>
      <Text size="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </div>
  </PageLayout>
);

const PageLayoutPageHeaderPassThroughStory: React.FC = () => (
  <PageLayout
    title="Header"
    headerAlign="center"
    headerCenter={<Text>Centered Content</Text>}
    headerActions={<Button>Edit</Button>}
  >
    <PageLayoutContent />
  </PageLayout>
);

const PageLayoutSidebarStory: React.FC = () => (
  <PageLayout
    title="Header"
    headerAlign="center"
    sidebar={
      <BrowserRouter>
        <SecondaryNavigation>
          <SecondaryNavigationItem to="/tony" label="Item 1" />
          <SecondaryNavigationItem to="/foo" label="Item 2" />
          <SecondaryNavigationItem to="/bar" label="Item 3" />
          <SecondaryNavigationItem to="/baz" label="Item 4" />
        </SecondaryNavigation>
      </BrowserRouter>
    }
  >
    <PageLayoutContent />
  </PageLayout>
);

const PageLayoutDisclaimerStory: React.FC = () => (
  <PageLayout
    title="Header"
    headerAlign="center"
    sidebar={
      boolean('display sidebarNav', true) ? (
        <BrowserRouter>
          <SecondaryNavigation>
            <SecondaryNavigationItem to="/tony" label="Item 1" />
            <SecondaryNavigationItem to="/foo" label="Item 2" />
            <SecondaryNavigationItem to="/bar" label="Item 3" />
            <SecondaryNavigationItem to="/baz" label="Item 4" />
          </SecondaryNavigation>
        </BrowserRouter>
      ) : null
    }
    disclaimer={<Text size="caption">Disclaimer content</Text>}
  >
    <PageLayoutContent />
  </PageLayout>
);

const PageLayoutTabsStory: React.FC = () => (
  <PageLayout
    title="Header"
    headerAlign="center"
    tabs={
      boolean('display tabs', true) ? (
        <BrowserRouter>
          <SecondaryNavigation variant="horizontal">
            <SecondaryNavigationItem to="/trave" label="Item 1" />
            <SecondaryNavigationItem to="/foo" label="Item 2" />
            <SecondaryNavigationItem to="/bar" label="Item 3" />
          </SecondaryNavigation>
        </BrowserRouter>
      ) : null
    }
  >
    <PageLayoutContent />
  </PageLayout>
);

storiesOf('Layout/Page Layout', module)
  .add('Default', () => <PageLayoutStory />, { readme: { content: md } })
  .add('With Background', () => <PageLayoutWithBackgroundStory />, {
    readme: { content: applyBackgroundMd },
  })
  .add(
    'With Center + Actions',
    () => <PageLayoutPageHeaderPassThroughStory />,
    {
      readme: { content: withCenterActionsMd },
    }
  )
  .add('With Sidebar', () => <PageLayoutSidebarStory />, {
    readme: { content: sidebarMd },
  })
  .add('With Sidebar + Disclaimer', () => <PageLayoutDisclaimerStory />, {
    readme: { content: disclaimerMd },
  })
  .add('With Tabs', () => <PageLayoutTabsStory />, {
    readme: { content: tabsMd },
  });

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLayout } from './PageLayout';
import { MemoryRouter } from 'react-router-dom';
import {
  SecondaryNavigation,
  SecondaryNavigationItem,
} from '../SecondaryNavigation';
import { Button } from '../Button';

export default {
  title: 'Layout/PageLayout',
  component: PageLayout,
  argTypes: {},
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p>Content</p>
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Header',
};

export const ApplyBackgroundCover = Template.bind({});
ApplyBackgroundCover.args = {
  title: 'Header',
  applyBackgroundCover: true,
};

export const ApplyBackgroundCoverCustom = Template.bind({});
ApplyBackgroundCoverCustom.args = {
  title: 'Header',
  applyBackgroundCover: true,
  backgroundImage: 'https://via.placeholder.com/150',
};

export const Disclaimer = Template.bind({});
Disclaimer.args = {
  title: 'Header',
  disclaimer: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '4rem',
      }}
    >
      disclaimer content
    </div>
  ),
};

export const Sidebar = Template.bind({});
Sidebar.args = {
  title: 'Header',
  sidebar: (
    <MemoryRouter>
      <SecondaryNavigation>
        <SecondaryNavigationItem to="/link-1" label="Link 1" />
        <SecondaryNavigationItem to="/link-2" label="Link 2" />
        <SecondaryNavigationItem to="/link-3" label="Link 3" />
      </SecondaryNavigation>
    </MemoryRouter>
  ),
};

export const Tabs = Template.bind({});
Tabs.args = {
  title: 'Header',
  tabs: (
    <MemoryRouter>
      <SecondaryNavigation variant="horizontal">
        <SecondaryNavigationItem to="/link-1" label="Link 1" />
        <SecondaryNavigationItem to="/link-2" label="Link 2" />
        <SecondaryNavigationItem to="/link-3" label="Link 3" />
      </SecondaryNavigation>
    </MemoryRouter>
  ),
};

export const HeaderActions = Template.bind({});
HeaderActions.args = {
  title: 'Header',
  headerCenter: <p>Centered Content</p>,
  headerActions: <Button>Edit</Button>,
};

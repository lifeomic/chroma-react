import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { PageLayout } from './PageLayout';
import { MemoryRouter } from 'react-router-dom';
import {
  SecondaryNavigation,
  SecondaryNavigationItem,
} from '../SecondaryNavigation';
import { Button } from '../Button';

const meta: Meta<typeof PageLayout> = {
  title: 'Layout/PageLayout',
  args: {
    title: 'Header',
  },
  component: PageLayout,
};
export default meta;
type Story = StoryObj<typeof PageLayout>;

const Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <p>Content</p>
  </PageLayout>
);

export const Default: Story = {
  render: Template,
};

export const ApplyBackgroundCover: Story = {
  render: Template,
  args: {
    applyBackgroundCover: true,
  },
};

export const ApplyBackgroundCoverCustom: Story = {
  render: Template,
  args: {
    applyBackgroundCover: true,
    backgroundImage: 'https://via.placeholder.com/150',
  },
};

export const Disclaimer: Story = {
  render: Template,
  args: {
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
  },
};

export const Sidebar: Story = {
  render: Template,
  args: {
    sidebar: (
      <MemoryRouter>
        <SecondaryNavigation>
          <SecondaryNavigationItem to="/link-1" label="Link 1" />
          <SecondaryNavigationItem to="/link-2" label="Link 2" />
          <SecondaryNavigationItem to="/link-3" label="Link 3" />
        </SecondaryNavigation>
      </MemoryRouter>
    ),
  },
};

export const Tabs: Story = {
  render: Template,
  args: {
    tabs: (
      <MemoryRouter>
        <SecondaryNavigation variant="horizontal">
          <SecondaryNavigationItem to="/link-1" label="Link 1" />
          <SecondaryNavigationItem to="/link-2" label="Link 2" />
          <SecondaryNavigationItem to="/link-3" label="Link 3" />
        </SecondaryNavigation>
      </MemoryRouter>
    ),
  },
};

export const HeaderActions: Story = {
  render: Template,
  args: {
    headerCenter: <p>Centered Content</p>,
    headerActions: <Button>Edit</Button>,
  },
};

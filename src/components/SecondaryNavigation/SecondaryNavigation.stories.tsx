import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { SecondaryNavigation } from './SecondaryNavigation';
import { MemoryRouter } from 'react-router-dom';
import { SecondaryNavigationItem } from './SecondaryNavigationItem';

const meta: Meta<typeof SecondaryNavigation> = {
  component: SecondaryNavigation,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof SecondaryNavigation>;

const Template: StoryFn<typeof SecondaryNavigation> = (args) => (
  <SecondaryNavigation {...args}>
    <SecondaryNavigationItem to="/link-1" label="Link 1" />
    <SecondaryNavigationItem to="/link-2" label="Link 2" />
  </SecondaryNavigation>
);

export const Default: Story = {
  render: Template,
};

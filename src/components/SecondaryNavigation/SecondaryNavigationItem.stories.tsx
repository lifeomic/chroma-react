import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import { SecondaryNavigationItem } from './SecondaryNavigationItem';

const meta: Meta<typeof SecondaryNavigationItem> = {
  component: SecondaryNavigationItem,
  args: {
    to: '/',
    label: 'Default',
  },
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof SecondaryNavigationItem>;

export const Default: Story = {};

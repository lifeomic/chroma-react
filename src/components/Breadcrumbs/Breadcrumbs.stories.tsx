import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  args: {
    crumbs: [
      {
        text: 'Parent',
        url: 'root',
      },
      {
        text: 'Child',
        url: 'root/child',
      },
      {
        text: 'GrandChild',
        url: 'root/child/grand',
      },
    ],
  },
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};

export const InverseDark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue = {
  parameters: {
    backgrounds: { default: 'blue' },
  },

  args: {
    color: 'inverse',
  },
};

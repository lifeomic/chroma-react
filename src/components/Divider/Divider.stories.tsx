import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const InverseDark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

export const Direction: Story = {
  args: {
    direction: 'row',
  },
  decorators: [
    (story: Function) => <div style={{ height: '50px' }}>{story()}</div>,
  ],
};

import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { IconButtonFloat } from './IconButtonFloat';
import { Edit } from '@lifeomic/chromicons';

const meta: Meta<typeof IconButtonFloat> = {
  component: IconButtonFloat,
  args: {
    'aria-label': 'Edit',
    icon: Edit,
  },
  argTypes: {
    disabled: {
      description: '`boolean`',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (story) => (
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        {story()}
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof IconButtonFloat>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

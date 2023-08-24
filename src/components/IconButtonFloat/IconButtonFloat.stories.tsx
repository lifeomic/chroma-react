import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { IconButtonFloat } from './IconButtonFloat';
import { Edit, Settings } from '@lifeomic/chromicons';

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
      <div style={{ height: '50px' }}>
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
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof IconButtonFloat>;

export const Default: Story = {};

export const Icon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'For a list of available icons, see our <a href="https://lifeomic.github.io/chromicons.com/">Chrōmicons catalog</a>.',
      },
    },
  },
  args: {
    icon: Settings,
  },
};

export const Size: Story = {
  args: {
    size: 0,
  },
};

export const Justify: Story = {
  args: {
    justify: 'left',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

import { StoryObj, Meta } from '@storybook/react';

import { IconButton } from './IconButton';
import { Edit, Settings } from '@lifeomic/chromicons';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
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
};
export default meta;
type Story = StoryObj<typeof IconButton>;

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

export const Color: Story = {
  args: {
    color: 'negative',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

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

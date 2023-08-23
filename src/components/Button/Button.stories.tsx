import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Button } from './Button';
import { ChevronDown, Edit } from '@lifeomic/chromicons';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default: Story = {
  render: Template,
};

export const Outlined: Story = {
  render: Template,
  args: {
    variant: 'outlined',
  },
};

export const TextOnly: Story = {
  render: Template,
  args: {
    variant: 'text',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const Icon: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "The Button component takes an `icon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
      },
    },
  },
  args: {
    icon: Edit,
  },
};

export const TrailingIcon: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "The Button component takes an `icon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
      },
    },
  },
  args: {
    trailingIcon: ChevronDown,
  },
};

export const Color: Story = {
  render: Template,
  args: {
    color: 'negative',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The button component takes multiple different colors, for different styled ' +
          'buttons. Typically, the `inverse` color is used when a button needs to be ' +
          'on a dark-colored background. When the action of the button will have a ' +
          'negative or positive impact, `negative` or `positive` color are used.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: Template,
  args: {
    fullWidth: true,
  },
};

export const InverseDark: Story = {
  render: Template,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  render: Template,
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

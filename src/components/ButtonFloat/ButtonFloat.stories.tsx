import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { ButtonFloat } from './ButtonFloat';
import { Edit } from '@lifeomic/chromicons';

const meta: Meta<typeof ButtonFloat> = {
  component: ButtonFloat,
  argTypes: {
    disabled: {
      description: '`boolean`',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (story) => (
      <div style={{ width: '100%', height: '50px' }}>
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
type Story = StoryObj<typeof ButtonFloat>;

const Template: StoryFn<typeof ButtonFloat> = (args) => (
  <ButtonFloat {...args}>Button Float</ButtonFloat>
);

export const Default: Story = {
  render: Template,
};

export const Disabled: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'Like regular buttons, Button Float also takes a prop to disable it.',
      },
    },
  },
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
          "The Button Float component takes an icon prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
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
          "The Button Float component takes a `trailingIcon` prop. This icon will be rendered after the text. It's recommended to use the Chroma icon set.",
      },
    },
  },
  args: {
    trailingIcon: Edit,
  },
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonFloat } from './ButtonFloat';
import { Edit } from '@lifeomic/chromicons';

export default {
  title: 'Components/ButtonFloat',
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
} as ComponentMeta<typeof ButtonFloat>;

const Template: ComponentStory<typeof ButtonFloat> = (args) => (
  <ButtonFloat {...args}>Button Float</ButtonFloat>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Like regular buttons, Button Float also takes a prop to disable it.',
    },
  },
};
Disabled.args = {
  disabled: true,
};

export const Icon = Template.bind({});
Icon.parameters = {
  docs: {
    description: {
      story:
        "The Button Float component takes an icon prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
    },
  },
};
Icon.args = {
  icon: Edit,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.parameters = {
  docs: {
    description: {
      story:
        "The Button Float component takes a `trailingIcon` prop. This icon will be rendered after the text. It's recommended to use the Chroma icon set.",
    },
  },
};
TrailingIcon.args = {
  trailingIcon: Edit,
};

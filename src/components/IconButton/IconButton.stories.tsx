import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';
import { Edit } from '@lifeomic/chromicons';

export default {
  title: 'Components/IconButton',
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'Edit',
  icon: Edit,
};

export const Disabled = Template.bind({});
Disabled.args = {
  'aria-label': 'Edit',
  icon: Edit,
  disabled: true,
};

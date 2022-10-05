import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButtonFloat } from './IconButtonFloat';
import { Edit } from '@lifeomic/chromicons';

export default {
  title: 'Components/IconButtonFloat',
  component: IconButtonFloat,
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
} as ComponentMeta<typeof IconButtonFloat>;

const Template: ComponentStory<typeof IconButtonFloat> = (args) => (
  <IconButtonFloat {...args} />
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

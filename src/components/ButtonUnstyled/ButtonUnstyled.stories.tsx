import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { ButtonUnstyled } from './ButtonUnstyled';

const meta: Meta<typeof ButtonUnstyled> = {
  component: ButtonUnstyled,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonUnstyled>;

const Template: StoryFn<typeof ButtonUnstyled> = (args) => (
  <ButtonUnstyled {...args}>Button Unstyled</ButtonUnstyled>
);

export const Default: Story = {
  render: Template,
};

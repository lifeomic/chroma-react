import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form Components/Radio/RadioGroup',
  component: RadioGroup,
  args: {
    title: 'Radio Group',
  },
  argTypes: {
    onChange: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

const Template: StoryFn<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
  </RadioGroup>
);

export const Default: Story = {
  render: Template,
};

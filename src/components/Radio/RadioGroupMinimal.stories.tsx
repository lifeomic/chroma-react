import React from 'react';
import { StoryFn, Meta, StoryObj } from '@storybook/react';

import { RadioGroupMinimal } from './RadioGroupMinimal';
import { Radio } from './Radio';

const meta: Meta<typeof RadioGroupMinimal> = {
  title: 'Form Components/Radio/RadioGroupMinimal',
  component: RadioGroupMinimal,
  argTypes: {
    onChange: { action: 'clicked' },
  },
  args: {
    title: 'Radio Group Minimal',
  },
};
export default meta;
type Story = StoryObj<typeof RadioGroupMinimal>;

const Template: StoryFn<typeof RadioGroupMinimal> = (args) => (
  <RadioGroupMinimal {...args}>
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
  </RadioGroupMinimal>
);

export const Default: Story = {
  render: Template,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroupMinimal } from './RadioGroupMinimal';
import { Radio } from './Radio';

export default {
  title: 'Form Components/Radio/RadioGroupMinimal',
  component: RadioGroupMinimal,
  argTypes: {
    onChange: { action: 'clicked' },
  },
} as ComponentMeta<typeof RadioGroupMinimal>;

const Template: ComponentStory<typeof RadioGroupMinimal> = (args) => (
  <RadioGroupMinimal {...args}>
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
  </RadioGroupMinimal>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Radio Group Minimal',
};

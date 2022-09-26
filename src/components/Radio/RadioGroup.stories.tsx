import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';

export default {
  title: 'Form Components/Radio/RadioGroup',
  component: RadioGroup,
  argTypes: {
    onChange: { action: 'clicked' },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args}>
    <Radio value="opt1" label="Option 1" />
    <Radio value="opt2" label="Option 2" />
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Radio Group',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinearProgress } from './LinearProgress';

export default {
  title: 'Components/LinearProgress',
  component: LinearProgress,
  argTypes: {},
} as ComponentMeta<typeof LinearProgress>;

const Template: ComponentStory<typeof LinearProgress> = (args) => (
  <LinearProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: 'indeterminate',
};

export const Value = Template.bind({});
Value.args = {
  value: 50,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pill } from './Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {},
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Pill',
};

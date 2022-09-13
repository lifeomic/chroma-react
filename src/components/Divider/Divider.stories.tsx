import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {},
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {};

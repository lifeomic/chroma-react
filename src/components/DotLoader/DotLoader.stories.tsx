import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DotLoader } from './DotLoader';

export default {
  title: 'Components/DotLoader',
  component: DotLoader,
  argTypes: {},
} as ComponentMeta<typeof DotLoader>;

const Template: ComponentStory<typeof DotLoader> = (args) => (
  <DotLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpansionPanel } from './ExpansionPanel';
import { Check } from '@lifeomic/chromicons';

export default {
  title: 'Components/ExpansionPanel',
  component: ExpansionPanel,
  argTypes: {},
} as ComponentMeta<typeof ExpansionPanel>;

const Template: ComponentStory<typeof ExpansionPanel> = (args) => (
  <ExpansionPanel {...args}>
    <p>Content inside of panel</p>
    <p>More content inside of panel</p>
  </ExpansionPanel>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Expansion Panel',
};

export const Icon = Template.bind({});
Icon.args = {
  title: 'Expansion Panel',
  leadingIcon: Check,
};

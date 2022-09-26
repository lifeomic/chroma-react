import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpansionPanel } from './ExpansionPanel';

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

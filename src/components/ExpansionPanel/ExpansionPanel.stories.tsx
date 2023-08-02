import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExpansionPanel } from './ExpansionPanel';
import { Check, ArrowRight } from '@lifeomic/chromicons';

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

export const TruncatedTitle = Template.bind({});
TruncatedTitle.args = {
  title:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  leadingIcon: ArrowRight,
  truncateTitle: true,
};

TruncatedTitle.parameters = {
  docs: {
    description: {
      story: `The title can be set to truncate with an ellipsis if it is too long for the expansion panel.`,
    },
  },
};

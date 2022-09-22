import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MenuItem } from './MenuItem';
import { HelpCircle } from '@lifeomic/chromicons';

export default {
  title: 'Components/Menu/MenuItem',
  component: MenuItem,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Menu Item',
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  text: 'Menu Item',
  secondaryText: 'This is secondary text',
};

export const Icon = Template.bind({});
Icon.args = {
  text: 'Menu Item',
  icon: HelpCircle,
};

import { StoryObj, Meta } from '@storybook/react';

import { MenuItem } from './MenuItem';
import { HelpCircle } from '@lifeomic/chromicons';

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
  args: {
    text: 'Menu Item',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {};

export const SecondaryText: Story = {
  args: {
    secondaryText: 'This is secondary text',
  },
};

export const Icon: Story = {
  args: {
    icon: HelpCircle,
  },
};

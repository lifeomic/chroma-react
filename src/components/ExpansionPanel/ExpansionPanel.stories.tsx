import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { ExpansionPanel } from './ExpansionPanel';
import { Check, ArrowRight } from '@lifeomic/chromicons';
import { Button } from '../Button';

const meta: Meta<typeof ExpansionPanel> = {
  title: 'Components/ExpansionPanel',
  component: ExpansionPanel,
  args: {
    title: 'Expansion Panel',
  },
};
export default meta;
type Story = StoryObj<typeof ExpansionPanel>;

const Template: StoryFn<typeof ExpansionPanel> = (args) => (
  <ExpansionPanel {...args}>
    <p>Content inside of panel</p>
    <p>More content inside of panel</p>
  </ExpansionPanel>
);

export const Default: Story = {
  render: Template,
};

export const Icon: Story = {
  render: Template,
  args: {
    leadingIcon: Check,
  },
};

export const TruncatedTitle: Story = {
  render: Template,
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    leadingIcon: ArrowRight,
    truncateTitle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `The title can be set to truncate with an ellipsis if it is too long for the expansion panel.`,
      },
    },
  },
};

export const SecondaryHeader: Story = {
  render: Template,
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    leadingIcon: ArrowRight,
    secondaryHeader: <Button variant="text">Secondary Button</Button>,
    truncateTitle: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Secondary content or actions can be placed in the expansion panel header.`,
      },
    },
  },
};

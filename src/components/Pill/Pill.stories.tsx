import { StoryObj, Meta } from '@storybook/react';

import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  component: Pill,
  args: {
    label: 'Pill',
  },
};
export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {};

export const Color: Story = {
  args: {
    color: 'negative',
  },
};

export const Variant: Story = {
  args: {
    variant: 'highlight',
  },
};

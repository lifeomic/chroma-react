import { StoryObj, Meta } from '@storybook/react';

import { LinearProgress } from './LinearProgress';

const meta: Meta<typeof LinearProgress> = {
  component: LinearProgress,
};
export default meta;
type Story = StoryObj<typeof LinearProgress>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: {
    variant: 'indeterminate',
  },
};

export const Value: Story = {
  args: {
    value: 50,
  },
};

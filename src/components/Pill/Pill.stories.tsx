import { StoryObj, Meta } from '@storybook/react';

import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  component: Pill,
};
export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: 'Pill',
  },
};

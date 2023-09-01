import { StoryObj, Meta } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children: 'Text',
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const InverseDark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

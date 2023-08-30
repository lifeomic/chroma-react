import { StoryObj, Meta } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Form Components/Radio/Radio',
  component: Radio,
  args: {
    label: 'Radio',
  },
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

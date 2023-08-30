import { StoryObj, Meta } from '@storybook/react';

import { Radio } from './Radio';
import { Apple } from '@lifeomic/chromicons';

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

export const Icon: Story = {
  args: {
    label: 'Apples',
    icon: Apple,
  },
  parameters: {
    docs: {
      description: {
        story:
          'See a list of available icons in our [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.',
      },
    },
  },
};

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

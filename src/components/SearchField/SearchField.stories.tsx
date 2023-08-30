import { StoryObj, Meta } from '@storybook/react';

import { SearchField } from './SearchField';

const meta: Meta<typeof SearchField> = {
  title: 'Form Components/SearchField',
  component: SearchField,
  args: {
    'aria-label': 'Search',
  },
};
export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {};

export const InverseDark = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue = {
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

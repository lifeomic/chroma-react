import { StoryObj, Meta } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Form Components/Toggle',
  component: Toggle,
  args: {
    label: 'Toggle',
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};

export const Placement: Story = {
  args: {
    placement: 'right',
  },
};

export const ShowRequiredLabel: Story = {
  args: {
    showRequiredLabel: true,
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    errorMessage: 'Error Message',
  },
};

export const HelpMessage: Story = {
  args: {
    helpMessage: 'Error Message',
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

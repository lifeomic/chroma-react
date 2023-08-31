import { StoryObj, Meta } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  args: {
    label: 'Slider',
  },
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const LabelPlacement: Story = {
  args: {
    labelPlacement: 'bottom',
  },
};

export const HelpMessage: Story = {
  args: {
    helpMessage: 'Help Message',
  },
};

export const Value: Story = {
  args: {
    value: 40,
  },
};

export const ShowValue: Story = {
  args: {
    value: 40,
    showValue: true,
  },
};

export const FormatValue: Story = {
  args: {
    value: 40,
    formatValue: (value: number | undefined) => `${value} cm`,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    errorMessage: 'Error Message',
  },
};

export const InverseDark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    value: 40,
    color: 'inverse',
    helpMessage: 'Help Message',
    showValue: true,
  },
};

export const InverseBlue: Story = {
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    value: 40,
    color: 'inverse',
    helpMessage: 'Help Message',
    showValue: true,
  },
};

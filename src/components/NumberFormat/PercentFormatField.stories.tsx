import { StoryObj, Meta } from '@storybook/react';

import { PercentFormatField } from './UnitNumberFormatField';

const meta: Meta<typeof PercentFormatField> = {
  title: 'Form Components/NumberFormat/PercentFormatField',
  component: PercentFormatField,
  args: {
    label: 'Percent Format Field',
    value: 50,
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof PercentFormatField>;

export const Default: Story = {};

export const Min: Story = {
  args: {
    min: 20,
  },
};

export const Max: Story = {
  args: {
    max: 70,
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

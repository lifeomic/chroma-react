import { StoryObj, Meta } from '@storybook/react';

import { UnitNumberFormatField } from './UnitNumberFormatField';

const meta: Meta<typeof UnitNumberFormatField> = {
  title: 'Form Components/NumberFormat/UnitNumberFormatField',
  component: UnitNumberFormatField,
  args: {
    label: 'Unit Number Format Field',
    value: 50,
    units: 'units',
  },
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof UnitNumberFormatField>;

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

export const DecimalScale: Story = {
  args: {
    decimalScale: 2,
  },
};

export const PrefixUnits: Story = {
  args: {
    prefixUnits: true,
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

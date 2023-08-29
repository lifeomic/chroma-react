import { StoryObj, Meta } from '@storybook/react';

import { PriceFormatField } from './UnitNumberFormatField';

const meta: Meta<typeof PriceFormatField> = {
  title: 'Form Components/NumberFormat/PriceFormatField',
  component: PriceFormatField,
  args: {
    label: 'Price Format Field',
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
type Story = StoryObj<typeof PriceFormatField>;

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

import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { UnitNumberFormatField } from './UnitNumberFormatField';
import { Apple, HelpCircle, TrendingUp } from '@lifeomic/chromicons';

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

export const Adornments: Story = {
  args: {
    startAdornment: <Apple />,
    endAdornment: <TrendingUp />,
  },
};

export const TooltipMessage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Icon and Tooltip Message must be used at the same time for either of them to render.',
      },
    },
  },
  args: {
    icon: HelpCircle,
    tooltipMessage: 'Tooltip Message',
  },
};

export const RequiredAndError: Story = {
  args: {
    hasError: true,
    showRequiredLabel: true,
    errorMessage: 'This is required',
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

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UnitNumberFormatField } from './UnitNumberFormatField';

export default {
  title: 'Form Components/NumberFormat/UnitNumberFormatField',
  component: UnitNumberFormatField,
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
} as ComponentMeta<typeof UnitNumberFormatField>;

const Template: ComponentStory<typeof UnitNumberFormatField> = (args) => (
  <UnitNumberFormatField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
};

export const Min = Template.bind({});
Min.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
  min: 20,
};

export const Max = Template.bind({});
Max.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
  max: 70,
};

export const DecimalScale = Template.bind({});
DecimalScale.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
  decimalScale: 2,
};

export const PrefixUnits = Template.bind({});
PrefixUnits.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
  prefixUnits: true,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Unit Number Format Field',
  value: 50,
  units: 'units',
  color: 'inverse',
};

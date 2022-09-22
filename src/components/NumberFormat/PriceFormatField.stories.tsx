import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PriceFormatField } from './UnitNumberFormatField';

export default {
  title: 'Form Components/NumberFormat/PriceFormatField',
  component: PriceFormatField,
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
} as ComponentMeta<typeof PriceFormatField>;

const Template: ComponentStory<typeof PriceFormatField> = (args) => (
  <PriceFormatField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Price Format Field',
  value: 50,
};

export const Min = Template.bind({});
Min.args = {
  label: 'Price Format Field',
  value: 50,
  min: 20,
};

export const Max = Template.bind({});
Max.args = {
  label: 'Price Format Field',
  value: 50,
  max: 70,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Price Format Field',
  value: 50,
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Price Format Field',
  value: 50,
  color: 'inverse',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PhoneNumberFormatField } from './PhoneNumberFormatField';

export default {
  title: 'Form Components/NumberFormat/PhoneNumberFormatField',
  component: PhoneNumberFormatField,
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
} as ComponentMeta<typeof PhoneNumberFormatField>;

const Template: ComponentStory<typeof PhoneNumberFormatField> = (args) => (
  <PhoneNumberFormatField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'placeholder',
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  errorMessage: 'This is required',
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  color: 'inverse',
};

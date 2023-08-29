import { StoryObj, Meta } from '@storybook/react';

import { PhoneNumberFormatField } from './PhoneNumberFormatField';

const meta: Meta<typeof PhoneNumberFormatField> = {
  title: 'Form Components/NumberFormat/PhoneNumberFormatField',
  component: PhoneNumberFormatField,
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'inverse'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof PhoneNumberFormatField>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'placeholder',
  },
};

export const Error: Story = {
  args: {
    hasError: true,
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

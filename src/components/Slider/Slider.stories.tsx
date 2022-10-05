import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {},
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Slider',
};

export const LabelPlacement = Template.bind({});
LabelPlacement.args = {
  label: 'Slider',
  labelPlacement: 'bottom',
};

export const HelpMessage = Template.bind({});
HelpMessage.args = {
  label: 'Slider',
  helpMessage: 'Help Message',
};

export const Value = Template.bind({});
Value.args = {
  label: 'Slider',
  value: 40,
};

export const ShowValue = Template.bind({});
ShowValue.args = {
  label: 'Slider',
  value: 40,
  showValue: true,
};

export const FormatValue = Template.bind({});
FormatValue.args = {
  label: 'Slider',
  value: 40,
  formatValue: (value: number | undefined) => `${value} cm`,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Slider',
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Slider',
  hasError: true,
  errorMessage: 'Error Message',
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Slider',
  value: 40,
  color: 'inverse',
  helpMessage: 'Help Message',
  showValue: true,
  formatValue: (value: number | undefined) => `${value} cm`,
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Slider',
  value: 40,
  color: 'inverse',
  helpMessage: 'Help Message',
  showValue: true,
  formatValue: (value: number | undefined) => `${value} cm`,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './TextArea';
import { HelpCircle } from '@lifeomic/chromicons';

export default {
  title: 'Form Components/TextArea',
  component: TextArea,
  argTypes: {},
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'TextArea',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  'aria-label': 'TextArea',
};

export const SecondaryLabel = Template.bind({});
SecondaryLabel.args = {
  label: 'TextArea',
  secondaryLabel: 'Secondary Label',
};

export const HelpMessage = Template.bind({});
HelpMessage.args = {
  label: 'TextArea',
  helpMessage: 'Help Message',
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: 'TextArea',
  icon: HelpCircle,
  tooltipMessage: 'Here is descriptive text',
};

export const Required = Template.bind({});
Required.args = {
  label: 'TextArea',
  showRequiredLabel: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'TextArea',
  hasError: true,
  errorMessage: 'This is required',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'TextArea',
  readOnly: true,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'TextArea',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'TextArea',
  color: 'inverse',
};

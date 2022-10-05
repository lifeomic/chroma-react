import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';
import { HelpCircle, User } from '@lifeomic/chromicons';

export default {
  title: 'Form Components/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Text Field',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Text Field',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Text Field',
  readOnly: true,
};

export const Password = Template.bind({});
Password.args = {
  label: 'Text Field',
  type: 'password',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Text Field',
  placeholder: 'Required',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Text Field',
  hasError: true,
  errorMessage: 'This is required!',
};

export const RequiredLabel = Template.bind({});
RequiredLabel.args = {
  label: 'Text Field',
  showRequiredLabel: true,
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  label: 'Text Field',
  startAdornment: <User aria-hidden />,
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  label: 'Text Field',
  endAdornment: <User aria-hidden />,
};

export const HelpMessage = Template.bind({});
HelpMessage.args = {
  label: 'Text Field',
  helpMessage: 'Help Message',
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: 'Text Field',
  icon: HelpCircle,
  tooltipMessage: 'Tooltip Message',
};

export const SecondaryLabel = Template.bind({});
SecondaryLabel.args = {
  label: 'Text Field',
  secondaryLabel: 'Secondary Label',
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Text Field',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Text Field',
  color: 'inverse',
};

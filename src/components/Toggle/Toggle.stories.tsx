import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './Toggle';

export default {
  title: 'Form Components/Toggle',
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Toggle',
};

export const Placement = Template.bind({});
Placement.args = {
  label: 'Toggle',
  placement: 'right',
};

export const ShowRequiredLabel = Template.bind({});
ShowRequiredLabel.args = {
  label: 'Toggle',
  showRequiredLabel: true,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Toggle',
  hasError: true,
  errorMessage: 'Error Message',
};

export const HelpMessage = Template.bind({});
HelpMessage.args = {
  label: 'Toggle',
  helpMessage: 'Error Message',
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Toggle',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Toggle',
  color: 'inverse',
};

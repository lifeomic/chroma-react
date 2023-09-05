import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { TextField } from './TextField';
import { HelpCircle, User } from '@lifeomic/chromicons';

const meta: Meta<typeof TextField> = {
  title: 'Form Components/TextField',
  component: TextField,
  args: {
    label: 'Text Field',
  },
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Required',
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    errorMessage: 'This is required!',
  },
};

export const RequiredLabel: Story = {
  args: {
    showRequiredLabel: true,
  },
};

export const StartAdornment: Story = {
  args: {
    startAdornment: <User aria-hidden />,
  },
};

export const EndAdornment: Story = {
  args: {
    endAdornment: <User aria-hidden />,
  },
};

export const HelpMessage: Story = {
  args: {
    helpMessage: 'Help Message',
  },
};

export const Tooltip: Story = {
  args: {
    icon: HelpCircle,
    tooltipMessage: 'Tooltip Message',
  },
};

export const SecondaryLabel: Story = {
  args: {
    secondaryLabel: 'Secondary Label',
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

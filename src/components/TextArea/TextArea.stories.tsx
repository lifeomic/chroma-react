import { StoryObj, Meta } from '@storybook/react';

import { TextArea } from './TextArea';
import { HelpCircle } from '@lifeomic/chromicons';

const meta: Meta<typeof TextArea> = {
  title: 'Form Components/TextArea',
  component: TextArea,
  args: {
    label: 'TextArea',
  },
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const NoLabel: Story = {
  args: {
    label: '',
    'aria-label': 'TextArea',
  },
};

export const SecondaryLabel: Story = {
  args: {
    secondaryLabel: 'Secondary Label',
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
    tooltipMessage: 'Here is descriptive text',
  },
};

export const Required: Story = {
  args: {
    showRequiredLabel: true,
  },
};

export const Error: Story = {
  args: {
    hasError: true,
    errorMessage: 'This is required',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
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

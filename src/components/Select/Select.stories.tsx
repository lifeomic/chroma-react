import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { ChevronRight, Edit } from '@lifeomic/chromicons';
import { GroupHeading } from './GroupHeading';

const meta: Meta<typeof Select> = {
  title: 'Form Components/Select',
  component: Select,
  args: {
    label: 'Select',
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => {
  const [selected, setSelected] = React.useState<string>('');

  return (
    <Select
      {...args}
      value={selected}
      onChange={(value) => {
        setSelected(value);
        console.log(value);
      }}
    >
      <SelectOption
        title="Option 1"
        value="option 1"
        secondaryAction={args.secondaryAction}
      />
      <SelectOption
        title="Option 2"
        subtitle="This is a subtitle. For options that need a little extra description."
        value="option 2"
        secondaryAction={args.secondaryAction}
      />
      <GroupHeading data-select-role="heading">Group 1</GroupHeading>
      <SelectOption
        disabled
        title="Option 3"
        value="option 3"
        secondaryAction={args.secondaryAction}
      />
      <SelectOption
        title="Option 4"
        value="option 4"
        secondaryAction={args.secondaryAction}
      />
    </Select>
  );
};

export const Default: Story = {
  render: Template,
};

export const Placeholder: Story = {
  render: Template,
  args: {
    placeholder: 'Placeholder',
  },
};

export const SecondaryLabel: Story = {
  render: Template,
  args: {
    secondaryLabel: 'Secondary Label',
  },
};

export const HelpMessage: Story = {
  render: Template,
  args: {
    helpMessage: 'Help Message',
  },
};

export const Error: Story = {
  render: Template,
  args: {
    errorMessage: 'Error Message',
    hasError: true,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  render: Template,
  args: {
    fullWidth: true,
  },
};

export const Tooltip: Story = {
  render: Template,
  args: {
    icon: Edit,
    tooltipMessage: 'Tooltip Message',
  },
};

export const SecondaryAction: Story = {
  render: Template,
  args: {
    secondaryAction: {
      args: 'https://lifeomic.com/',
      action: (args: string) => {
        alert(`You can do something with arg "${args}"`);
      },
      label: 'Do something',
      icon: ChevronRight,
    },
  },
};

export const InverseDark: Story = {
  render: Template,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  render: Template,
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { ChevronRight, Edit } from '@lifeomic/chromicons';
import { GroupHeading } from './GroupHeading';

export default {
  title: 'Form Components/Select',
  component: Select,
  argTypes: {},
  subcomponents: { SelectOption, GroupHeading },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
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

export const Default = Template.bind({});
Default.args = {
  label: 'Select',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: 'Select',
  placeholder: 'Placeholder',
};

export const SecondaryLabel = Template.bind({});
SecondaryLabel.args = {
  label: 'Select',
  secondaryLabel: 'Secondary Label',
};

export const HelpMessage = Template.bind({});
HelpMessage.args = {
  label: 'Select',
  helpMessage: 'Help Message',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Select',
  errorMessage: 'Error Message',
  hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Select',
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Select',
  fullWidth: true,
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: 'Select',
  icon: Edit,
  tooltipMessage: 'Tooltip Message',
};

export const SecondaryAction = Template.bind({});
SecondaryAction.args = {
  label: 'Select',
  secondaryAction: {
    args: 'https://lifeomic.com/',
    action: (args: string) => {
      alert(`You can do something with arg "${args}"`);
    },
    label: 'Do something',
    icon: ChevronRight,
  },
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Select',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Select',
  color: 'inverse',
};

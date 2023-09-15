import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { HelpCircle } from '@lifeomic/chromicons';

import { ComboBox } from './ComboBox';
import { SelectOption } from './SelectOption';

const meta: Meta<typeof ComboBox> = {
  title: 'Form Components/ComboBox',
  component: ComboBox,
  args: {
    label: 'Combo Box',
  },
};
export default meta;
type Story = StoryObj<typeof ComboBox>;

const Template: StoryFn<typeof ComboBox> = (args) => (
  <ComboBox {...args}>
    <SelectOption title="Option 1" value="option1" />
    <SelectOption title="Option 2" subtitle="Subtitle" value="option2" />
    <SelectOption title="Option 3" value="option3" />
    <SelectOption title="Option 4" value="option4" />
  </ComboBox>
);

export const Default: Story = {
  render: Template,
};

export const ValueAndOnChange: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `The ComboBox works by providing \`value\` for the checked options and \`onChange\`
  for listening for when items are added/removed. ComboBox expects the \`value\` to
  be an array of options. 

  When an option is selected, the \`onChange\` is called. This function provides two
  arguments, one for the selected values, and then the \`meta\` object. The \`meta\`
  object can be used to store additional information about the option.

  When an item is currently selected, and then clicked a second time, the item is
  "removed". Chroma does not remove this item for you from the list. It is up to
  you, the consumer, to do this yourself with a combination of \`onChange\` and
  \`value\`.`,
      },
    },
  },
  args: {
    value: ['option1', 'option3'],
  },
};

export const Label: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `The label to display for the ComboBox element. This is also the popover title
  announced for screen readers when the select menu is open. If a label is not
  provided, \`popoverAriaLabel\` should be provided.`,
      },
    },
  },
};

export const SecondaryLabel: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `A secondary, supplemental label to display for the combobox element.`,
      },
    },
  },
  args: {
    secondaryLabel: 'Secondary Label',
  },
};

export const Placeholder: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `The placeholder text to display.`,
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
};

export const HelpMessage: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `Caption, help text to display underneath the element. This should be
  supplemental text to the label, typically an expanded description of the option.`,
      },
    },
  },
  args: {
    helpMessage: 'Help Message',
  },
};

export const TooltipMessage: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: `Text to display on hover over a small icon. This should be
  supplemental text to the label, typically an expanded description of the option.`,
      },
    },
  },
  args: {
    icon: HelpCircle,
    tooltipMessage: 'Tooltip Message',
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

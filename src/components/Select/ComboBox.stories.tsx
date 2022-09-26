import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ComboBox } from './ComboBox';
import { SelectOption } from './SelectOption';

export default {
  title: 'Form Components/ComboBox',
  component: ComboBox,
  argTypes: {},
} as ComponentMeta<typeof ComboBox>;

const Template: ComponentStory<typeof ComboBox> = (args) => (
  <ComboBox {...args}>
    <SelectOption title="Option 1" value="option1" />
    <SelectOption title="Option 2" subtitle="Subtitle" value="option2" />
    <SelectOption title="Option 3" value="option3" />
    <SelectOption title="Option 4" value="option4" />
  </ComboBox>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Combo Box',
};

export const ValueAndOnChange = Template.bind({});
ValueAndOnChange.parameters = {
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
};
ValueAndOnChange.args = {
  label: 'Combo Box',
  value: ['option1', 'option3'],
};

export const Label = Template.bind({});
Label.parameters = {
  docs: {
    description: {
      story: `The label to display for the ComboBox element. This is also the popover title
announced for screen readers when the select menu is open. If a label is not
provided, \`popoverAriaLabel\` should be provided.`,
    },
  },
};
Label.args = {
  label: 'Combo Box',
};

export const SecondaryLabel = Template.bind({});
SecondaryLabel.parameters = {
  docs: {
    description: {
      story: `A secondary, supplemental label to display for the combobox element.`,
    },
  },
};
SecondaryLabel.args = {
  label: 'Combo Box',
  secondaryLabel: 'Secondary Label',
};

export const Placeholder = Template.bind({});
Placeholder.parameters = {
  docs: {
    description: {
      story: `The placeholder text to display.`,
    },
  },
};
Placeholder.args = {
  label: 'Combo Box',
  placeholder: 'Placeholder',
};

export const HelpMessage = Template.bind({});
HelpMessage.parameters = {
  docs: {
    description: {
      story: `Caption, help text to display underneath the element. This should be
supplemental text to the label, typically an expanded description of the option.`,
    },
  },
};
HelpMessage.args = {
  label: 'Combo Box',
  helpMessage: 'Help Message',
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Combo Box',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Combo Box',
  color: 'inverse',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: '`boolean`',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    disabled: {
      description: '`boolean`',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    onChange: { action: 'clicked' },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Unchecked = Template.bind({});
Unchecked.parameters = {
  docs: {
    description: {
      story:
        'A checkbox component for form usage. Under the covers, this is an input element with `type="checkbox"`.',
    },
  },
};
Unchecked.args = {
  checked: false,
  label: 'Checkbox',
};

export const Checked = Template.bind({});
Checked.parameters = {
  docs: {
    description: {
      story:
        'The checked state of the checkbox. Normally this is controlled in combination with `onChange` handler.',
    },
  },
};
Checked.args = {
  checked: true,
  label: 'Checkbox',
};

export const DisabledChecked = Template.bind({});
DisabledChecked.parameters = {
  docs: {
    description: {
      story: 'Applies the disabled state to the element.',
    },
  },
};
DisabledChecked.args = {
  disabled: true,
  checked: true,
  label: 'Checkbox',
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  disabled: true,
  checked: false,
  label: 'Checkbox',
};

export const HelpMessage = Template.bind({});
HelpMessage.parameters = {
  docs: {
    description: {
      story:
        'Caption, help text to display underneath the element. This should be supplemental text to the label, typically an expanded description of the option.',
    },
  },
};
HelpMessage.args = {
  label: 'Checkbox',
  helpMessage: 'This is some helper text.',
};

export const WithError = Template.bind({});
WithError.parameters = {
  docs: {
    description: {
      story: 'Sets an error style on the element.',
    },
  },
};
WithError.args = {
  label: 'Checkbox',
  hasError: true,
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  label: 'Checkbox',
  hasError: true,
  errorMessage: 'This is an error!',
};

export const ShowRequiredLabel = Template.bind({});
ShowRequiredLabel.args = {
  label: 'Checkbox',
  showRequiredLabel: true,
};

export const WithHelpAndErrorText = Template.bind({});
WithHelpAndErrorText.args = {
  label: 'Checkbox',
  hasError: true,
  errorMessage: 'This is an error!',
  helpMessage: 'This is some helper text.',
};

export const Indeterminate = Template.bind({});
Indeterminate.parameters = {
  docs: {
    description: {
      story:
        'Applies the indeterminate state to the element. Primarily used when a parent checkbox has a mix of checked and unchecked children checkboxes.',
    },
  },
};
Indeterminate.args = {
  label: 'Checkbox',
  indeterminate: true,
};

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  label: 'Checkbox',
  indeterminate: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
  'aria-label': 'Checkbox with no label',
};

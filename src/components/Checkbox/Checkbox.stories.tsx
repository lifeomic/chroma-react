import { StoryObj, Meta } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
  },
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
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A checkbox component for form usage. Under the covers, this is an input element with `type="checkbox"`.',
      },
    },
  },
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The checked state of the checkbox. Normally this is controlled in combination with `onChange` handler.',
      },
    },
  },
  args: {
    checked: true,
  },
};

export const DisabledChecked: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Applies the disabled state to the element.',
      },
    },
  },
  args: {
    disabled: true,
    checked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    checked: false,
  },
};

export const HelpMessage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Caption, help text to display underneath the element. This should be supplemental text to the label, typically an expanded description of the option.',
      },
    },
  },
  args: {
    helpMessage: 'This is some helper text.',
  },
};

export const WithError: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Sets an error style on the element.',
      },
    },
  },
  args: {
    hasError: true,
  },
};

export const WithErrorText: Story = {
  args: {
    hasError: true,
    errorMessage: 'This is an error!',
  },
};

export const ShowRequiredLabel: Story = {
  args: {
    showRequiredLabel: true,
  },
};

export const WithHelpAndErrorText: Story = {
  args: {
    hasError: true,
    errorMessage: 'This is an error!',
    helpMessage: 'This is some helper text.',
  },
};

export const Indeterminate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Applies the indeterminate state to the element. Primarily used when a parent checkbox has a mix of checked and unchecked children checkboxes.',
      },
    },
  },
  args: {
    checked: true,
    indeterminate: true,
  },
};

export const IndeterminateDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    indeterminate: true,
  },
};

export const NoLabel: Story = {
  args: {
    label: '',
    'aria-label': 'Checkbox with no label',
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

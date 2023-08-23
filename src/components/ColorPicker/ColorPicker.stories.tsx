import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { ColorPicker } from './ColorPicker';
import { HelpCircle } from '@lifeomic/chromicons';

const meta: Meta<typeof ColorPicker> = {
  title: 'Form Components/ColorPicker',
  component: ColorPicker,
  args: {
    label: 'Color Picker',
  },
  decorators: [
    (story) => <div style={{ width: '100%', height: '250px' }}>{story()}</div>,
  ],
};
export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {};

export const InvalidColorText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Displays text in Popover header when color is invalid.',
      },
    },
  },
  args: {
    invalidColorText: 'Invalid Color Text',
  },
};

export const SecondaryLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A secondary, supplemental label to display for the ColorPicker element.',
      },
    },
  },
  args: {
    secondaryLabel: 'Secondary Label',
  },
};

export const Placeholder: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The placeholder text to display.',
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
};

export const IconAndTooltipMessage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'An additional icon and tooltip element can be used to provide additional context ' +
          'for the user on how the text entry will be used.',
      },
    },
  },
  args: {
    icon: HelpCircle,
    tooltipMessage: "If you provide a color, you'll get free tacos!",
  },
};

export const HelpMessage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Caption, help text to display underneath the element. This should be ' +
          'supplemental text to the label, typically an expanded description of the option.',
      },
    },
  },
  args: {
    helpMessage: 'Some helper text!',
  },
};

export const ShowRequiredLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Shows an `*` next to the label; required validation must be handled separately.',
      },
    },
  },
  args: {
    showRequiredLabel: true,
  },
};

export const HasError: Story = {
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

export const ErrorMessage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Caption, error text to display underneath the element when an error occurs. For ' +
          'the message to be displayed `hasError` must be set as well.',
      },
    },
  },
  args: {
    hasError: true,
    errorMessage: 'Error Message',
  },
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Applies the disabled state to the element.\n\n' +
          '**REMINDER:** If you use `disabled`, screenreaders will not announce the text ' +
          'inside of the ColorPicker to the user, and will completely skip over this element.',
      },
    },
  },
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Applies the read only state to the element.',
      },
    },
  },
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

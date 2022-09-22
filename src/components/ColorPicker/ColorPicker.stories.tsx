import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorPicker } from './ColorPicker';
import { HelpCircle } from '@lifeomic/chromicons';

export default {
  title: 'Form Components/ColorPicker',
  component: ColorPicker,
  argTypes: {},
} as ComponentMeta<typeof ColorPicker>;

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Color Picker',
};

export const InvalidColorText = Template.bind({});
InvalidColorText.parameters = {
  docs: {
    description: {
      story: 'Displays text in Popover header when color is invalid.',
    },
  },
};
InvalidColorText.args = {
  label: 'Color Picker',
  invalidColorText: 'Invalid Color Text',
};

export const SecondaryLabel = Template.bind({});
SecondaryLabel.parameters = {
  docs: {
    description: {
      story:
        'A secondary, supplemental label to display for the ColorPicker element.',
    },
  },
};
SecondaryLabel.args = {
  label: 'Color Picker',
  secondaryLabel: 'Secondary Label',
};

export const Placeholder = Template.bind({});
Placeholder.parameters = {
  docs: {
    description: {
      story: 'The placeholder text to display.',
    },
  },
};
Placeholder.args = {
  label: 'Color Picker',
  placeholder: 'Placeholder',
};

export const IconAndTooltipMessage = Template.bind({});
IconAndTooltipMessage.parameters = {
  docs: {
    description: {
      story:
        'An additional icon and tooltip element can be used to provide additional context ' +
        'for the user on how the text entry will be used.',
    },
  },
};
IconAndTooltipMessage.args = {
  label: 'Color Picker',
  icon: HelpCircle,
  tooltipMessage: "If you provide a color, you'll get free tacos!",
};

export const HelpMessage = Template.bind({});
HelpMessage.parameters = {
  docs: {
    description: {
      story:
        'Caption, help text to display underneath the element. This should be ' +
        'supplemental text to the label, typically an expanded description of the option.',
    },
  },
};
HelpMessage.args = {
  label: 'Color Picker',
  helpMessage: 'Some helper text!',
};

export const ShowRequiredLabel = Template.bind({});
ShowRequiredLabel.parameters = {
  docs: {
    description: {
      story:
        'Shows an `*` next to the label; required validation must be handled separately.',
    },
  },
};
ShowRequiredLabel.args = {
  label: 'Color Picker',
  showRequiredLabel: true,
};

export const HasError = Template.bind({});
HasError.parameters = {
  docs: {
    description: {
      story: 'Sets an error style on the element.',
    },
  },
};
HasError.args = {
  label: 'Color Picker',
  hasError: true,
};

export const ErrorMessage = Template.bind({});
ErrorMessage.parameters = {
  docs: {
    description: {
      story:
        'Caption, error text to display underneath the element when an error occurs. For ' +
        'the message to be displayed `hasError` must be set as well.',
    },
  },
};
ErrorMessage.args = {
  label: 'Color Picker',
  hasError: true,
  errorMessage: 'Error Message',
};

export const Disabled = Template.bind({});
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Applies the disabled state to the element.\n\n' +
        '**REMINDER:** If you use `disabled`, screenreaders will not announce the text ' +
        'inside of the ColorPicker to the user, and will completely skip over this element.',
    },
  },
};
Disabled.args = {
  label: 'Color Picker',
  disabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.parameters = {
  docs: {
    description: {
      story: 'Applies the read only state to the element.',
    },
  },
};
ReadOnly.args = {
  label: 'Color Picker',
  readOnly: true,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  label: 'Color Picker',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  label: 'Color Picker',
  color: 'inverse',
};

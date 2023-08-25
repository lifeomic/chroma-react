import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { DayPicker } from './DayPicker';

const meta: Meta<typeof DayPicker> = {
  title: 'Form Components/DayPicker',
  component: DayPicker,
  args: {
    label: 'Day Picker',
  },
  decorators: [
    (story) => <div style={{ width: '460px', height: '350px' }}>{story()}</div>,
  ],
};
export default meta;
type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {};

export const ValueAndOnDayChange: Story = {
  parameters: {
    docs: {
      description: {
        story: `\`DayPicker\` is a controlled component, and uses the \`value\` and \`onDayChange\` props
  to facilitate input.

  If \`value\` is set to \`undefined\`, the provided \`placeholder\` message will be shown.

  \`onDayChange\` is called in two scenarios:

  - a date was selected in the calendar UI
  - if manual input is enabled (via \`parseDate\`), and the input is updated to a valid date string.`,
      },
    },
  },
  args: {
    value: new Date(),
  },
};

export const FormatDate: Story = {
  parameters: {
    docs: {
      description: {
        story: `Custom text formats can be supported via the \`formatDate\` prop`,
      },
    },
  },
  args: {
    value: new Date(),
    formatDate: (date: Date) => date.toISOString().slice(0, 10),
  },
};

export const ManualInput: Story = {
  parameters: {
    docs: {
      description: {
        story: `By default, \`DayPicker\` does not allow for manual input into the text field.

  Providing the \`parseDate\` prop will enable this behavior.

  You can use the \`onTextChange\` prop to visually handle malformed strings, e.g. via an error message.`,
      },
    },
  },
  args: {
    value: new Date(),
    formatDate: (date: Date) => date.toISOString().slice(0, 10),
    parseDate: (_text: string) => new Date(),
    onTextChange: (_text: string) => {},
  },
};

export const MinDate: Story = {
  args: {
    value: new Date(),
    minDate: new Date(),
  },
};

export const MaxDate: Story = {
  args: {
    value: new Date(),
    maxDate: new Date(),
  },
};

export const DisableDay: Story = {
  args: {
    value: new Date(),
    disableDay: (date: Date) => date.getDate() % 2 === 0,
  },
};

export const AnchorPosition: Story = {
  args: {
    value: new Date(),
    anchorPosition: 'bottom-right',
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

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DayPicker } from './DayPicker';

export default {
  title: 'Form Components/DayPicker',
  component: DayPicker,
  argTypes: {},
} as ComponentMeta<typeof DayPicker>;

const Template: ComponentStory<typeof DayPicker> = (args) => (
  <DayPicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Day Picker',
};

export const ValueAndOnDayChange = Template.bind({});
ValueAndOnDayChange.parameters = {
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
};
ValueAndOnDayChange.args = {
  label: 'Day Picker',
  value: new Date(),
};

export const FormatDate = Template.bind({});
FormatDate.parameters = {
  docs: {
    description: {
      story: `Custom text formats can be supported via the \`formatDate\` prop`,
    },
  },
};
FormatDate.args = {
  label: 'Day Picker',
  value: new Date(),
  formatDate: (date: Date) => date.toISOString().slice(0, 10),
};

export const ManualInput = Template.bind({});
ManualInput.parameters = {
  docs: {
    description: {
      story: `By default, \`DayPicker\` does not allow for manual input into the text field.

Providing the \`parseDate\` prop will enable this behavior.

You can use the \`onTextChange\` prop to visually handle malformed strings, e.g. via an error message.`,
    },
  },
};
ManualInput.args = {
  label: 'Day Picker',
  value: new Date(),
  formatDate: (date: Date) => date.toISOString().slice(0, 10),
  parseDate: (_text: string) => new Date(),
  onTextChange: (_text: string) => {},
};

export const MinDate = Template.bind({});
MinDate.args = {
  label: 'Day Picker',
  value: new Date(),
  minDate: new Date(),
};

export const MaxDate = Template.bind({});
MaxDate.args = {
  label: 'Day Picker',
  value: new Date(),
  maxDate: new Date(),
};

export const DisableDay = Template.bind({});
DisableDay.args = {
  label: 'Day Picker',
  value: new Date(),
  disableDay: (date: Date) => date.getDate() % 2 === 0,
};

export const AnchorPosition = Template.bind({});
AnchorPosition.args = {
  label: 'Day Picker',
  value: new Date(),
  anchorPosition: 'top-right',
};

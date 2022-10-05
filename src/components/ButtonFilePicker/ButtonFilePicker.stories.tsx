import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonFilePicker } from './ButtonFilePicker';
import { Edit } from '@lifeomic/chromicons';

export default {
  title: 'Components/ButtonFilePicker',
  component: ButtonFilePicker,
  argTypes: {},
} as ComponentMeta<typeof ButtonFilePicker>;

const Template: ComponentStory<typeof ButtonFilePicker> = (args) => (
  <ButtonFilePicker {...args}>Button File Picker</ButtonFilePicker>
);

export const Default = Template.bind({});
Default.args = {};

export const Accept = Template.bind({});
Accept.parameters = {
  docs: {
    description: {
      story:
        'A CSV list of the type of file extension(s) the file picker should accept.',
    },
  },
};
Accept.args = {
  accept: '.jpg,.jpeg',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: Edit,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  color: 'inverse',
};

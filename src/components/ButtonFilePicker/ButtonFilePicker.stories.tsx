import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { ButtonFilePicker } from './ButtonFilePicker';
import { Edit } from '@lifeomic/chromicons';
const meta: Meta<typeof ButtonFilePicker> = {
  component: ButtonFilePicker,
};
export default meta;
type Story = StoryObj<typeof ButtonFilePicker>;

const Template: StoryFn<typeof ButtonFilePicker> = (args) => (
  <ButtonFilePicker {...args}>Button File Picker</ButtonFilePicker>
);

export const Default: Story = {
  render: Template,
};

export const Accept: Story = {
  render: Template,
  args: {
    accept: '.jpg,.jpeg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A CSV list of the type of file extension(s) the file picker should accept.',
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const Icon: Story = {
  render: Template,
  args: {
    icon: Edit,
  },
};

export const InverseDark: Story = {
  render: Template,
  args: {
    color: 'inverse',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const InverseBlue: Story = {
  render: Template,
  args: {
    color: 'inverse',
  },
  parameters: {
    backgrounds: { default: 'blue' },
  },
};

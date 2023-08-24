import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { FormBox } from './FormBox';
import { TextField } from '../TextField';
import { TextArea } from '../TextArea';

const meta: Meta<typeof FormBox> = {
  title: 'Form Components/FormBox',
  component: FormBox,
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof FormBox>;

const Template: StoryFn<typeof FormBox> = (args) => (
  <FormBox {...args}>
    <TextField label="Text Field" />
    <TextArea label="Text Area" />
  </FormBox>
);

export const Default: Story = {
  render: Template,
};

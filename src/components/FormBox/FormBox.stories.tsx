import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormBox } from './FormBox';
import { TextField } from '../TextField';
import { TextArea } from '../TextArea';

export default {
  title: 'Form Components/FormBox',
  component: FormBox,
  argTypes: {},
} as ComponentMeta<typeof FormBox>;

const Template: ComponentStory<typeof FormBox> = (args) => (
  <FormBox {...args}>
    <TextField label="Text Field" />
    <TextArea label="Text Area" />
  </FormBox>
);

export const Default = Template.bind({});
Default.args = {};

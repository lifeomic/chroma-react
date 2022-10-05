import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Snackbar } from './Snackbar';
import { Button } from '../Button';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {},
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: (
    <>
      <span>This is child text with a call to action</span>
      <Button style={{ marginLeft: 8 }}>Button</Button>
    </>
  ),
};

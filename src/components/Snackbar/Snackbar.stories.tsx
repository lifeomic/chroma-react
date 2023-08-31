import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Snackbar } from './Snackbar';
import { Button } from '../Button';

const meta: Meta<typeof Snackbar> = {
  component: Snackbar,
  args: {
    isOpen: true,
    children: (
      <>
        <span>This is child text with a call to action</span>
        <Button style={{ marginLeft: 8 }}>Button</Button>
      </>
    ),
  },
};
export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {};

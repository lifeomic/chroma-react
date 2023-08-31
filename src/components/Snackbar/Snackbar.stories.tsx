import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Snackbar } from './Snackbar';
import { Button } from '../Button';
import { AlertTriangle } from '@lifeomic/chromicons';

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
  decorators: [
    (story: Function) => (
      <div
        style={{
          height: '100px',
        }}
      >
        {story()}
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {};
export const Icon: Story = {
  args: {
    icon: AlertTriangle,
    statusType: 'error',
    role: 'alert',
    allowDismiss: true,
    children: (
      <>
        <span>Warning</span>
        <Button style={{ marginLeft: 8 }} color="negative">
          Button
        </Button>
      </>
    ),
  },
};

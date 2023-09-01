import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  args: {
    height: 30,
    width: 300,
  },
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        {story()}
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

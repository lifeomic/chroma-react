import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { KeymapHelp } from './KeymapHelp';

const meta: Meta<typeof KeymapHelp> = {
  component: KeymapHelp,
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p>Open with shift + ?</p>
        {story()}
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof KeymapHelp>;

export const Default: Story = {};

export const AdditionalKeys: Story = {
  args: {
    keyMapDocs: [
      {
        sequences: ['ctrl', 'alt', 'delete'],
        description: 'Bring up the help menu',
      },
    ],
  },
};

import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { SmallTile } from './SmallTile';
import { SmallTileContent } from './SmallTileContent';
import { SmallTileFooter } from './SmallTileFooter';

const meta: Meta<typeof SmallTile> = {
  component: SmallTile,
  args: {
    children: (
      <>
        <SmallTileContent text="Title Text" />
        <SmallTileFooter text="Footer Text" />
      </>
    ),
  },
  subcomponents: {
    SmallTileContent,
    SmallTileFooter,
  },
};
export default meta;
type Story = StoryObj<typeof SmallTile>;

export const Default: Story = {};

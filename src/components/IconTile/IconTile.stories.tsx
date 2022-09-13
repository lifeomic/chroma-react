import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconTile } from './IconTile';
import { IconTileHero } from './IconTileHero';
import { IconTileBadge } from './IconTileBadge';
import { IconTileContent } from './IconTileContent';
import { Edit2 } from '@lifeomic/chromicons';
import sampleBackground from '../../assets/sampleBackground.svg';

export default {
  title: 'Components/IconTile',
  component: IconTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof IconTile>;

export const Default: ComponentStory<typeof IconTile> = (args) => {
  return (
    <IconTile {...args}>
      <IconTileHero backgroundUrl={sampleBackground} />
      <IconTileBadge icon={Edit2} />
      <IconTileContent text="Text" caption="caption" />
    </IconTile>
  );
};

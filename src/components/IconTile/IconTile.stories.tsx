import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { IconTile } from './IconTile';
import { IconTileHero } from './IconTileHero';
import { IconTileBadge } from './IconTileBadge';
import { IconTileContent } from './IconTileContent';
import { Edit2 } from '@lifeomic/chromicons';
import sampleBackground from '../../../stories/assets/sampleBackground.svg';

const meta: Meta<typeof IconTile> = {
  component: IconTile,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof IconTile>;

const Template: StoryFn<typeof IconTile> = (args) => (
  <IconTile {...args}>
    <IconTileHero backgroundUrl={sampleBackground} />
    <IconTileBadge icon={Edit2} />
    <IconTileContent text="Text" caption="caption" />
  </IconTile>
);

export const Default: Story = {
  render: Template,
};

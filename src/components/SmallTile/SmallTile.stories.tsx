import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SmallTile } from './SmallTile';
import { SmallTileContent } from './SmallTileContent';
import { SmallTileFooter } from './SmallTileFooter';

export default {
  title: 'Components/SmallTile',
  component: SmallTile,
  argTypes: {},
  subcomponents: {
    SmallTileContent,
    SmallTileFooter,
  },
} as ComponentMeta<typeof SmallTile>;

const Template: ComponentStory<typeof SmallTile> = (args) => (
  <SmallTile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <SmallTileContent text="Title Text" />
      <SmallTileFooter text="Footer Text" />
    </>
  ),
};

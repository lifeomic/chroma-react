import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu } from './Menu';
import { IconButton } from '../IconButton';
import { MoreHorizontal } from '@lifeomic/chromicons';
import { MenuItem } from './MenuItem';
import { MenuGroupHeading } from './MenuGroupHeading';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'Chroma menu options',
  anchorElement: (
    <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
  ),
  items: [<MenuItem key="1">Menu body</MenuItem>],
};

export const GroupHeadings = Template.bind({});
GroupHeadings.args = {
  'aria-label': 'Chroma menu options',
  anchorElement: (
    <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
  ),
  items: [
    <MenuGroupHeading key="1">First Section</MenuGroupHeading>,
    <MenuItem key="2">Option 1</MenuItem>,
    <MenuItem key="3">Option 2</MenuItem>,
    <MenuGroupHeading key="4">Second Section</MenuGroupHeading>,
    <MenuItem key="5">Option 3</MenuItem>,
    <MenuItem key="6">Option 4</MenuItem>,
  ],
};

export const Placement = Template.bind({});
Placement.args = {
  'aria-label': 'Chroma menu options',
  anchorElement: (
    <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
  ),
  items: [<MenuItem key="1">Menu body</MenuItem>],
  placement: 'top-end',
};

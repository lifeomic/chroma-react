import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Menu } from './Menu';
import { IconButton } from '../IconButton';
import { MoreHorizontal } from '@lifeomic/chromicons';
import { MenuItem } from './MenuItem';
import { MenuGroupHeading } from './MenuGroupHeading';

const meta: Meta<typeof Menu> = {
  component: Menu,
  args: {
    'aria-label': 'Chroma menu options',
    anchorElement: (
      <IconButton aria-label="Click to open menu" icon={MoreHorizontal} />
    ),
    items: [
      <MenuItem key="2">Option 1</MenuItem>,
      <MenuItem key="3">Option 2</MenuItem>,
      <MenuItem key="5">Option 3</MenuItem>,
      <MenuItem key="6">Option 4</MenuItem>,
    ],
  },
  decorators: [(story) => <div style={{ height: '250px' }}>{story()}</div>],
};
export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};

export const GroupHeadings: Story = {
  args: {
    items: [
      <MenuGroupHeading key="1">First Section</MenuGroupHeading>,
      <MenuItem key="2">Option 1</MenuItem>,
      <MenuItem key="3">Option 2</MenuItem>,
      <MenuGroupHeading key="4">Second Section</MenuGroupHeading>,
      <MenuItem key="5">Option 3</MenuItem>,
      <MenuItem key="6">Option 4</MenuItem>,
    ],
  },
};

export const Title: Story = {
  args: {
    title: 'Title',
  },
};

export const Placement: Story = {
  args: {
    placement: 'top-end',
  },
};

export const Gutter: Story = {
  args: {
    gutter: 50,
  },
};

export const UsePortal: Story = {
  args: {
    usePortal: true,
  },
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from './ListItem';
import { Avatar } from '../Avatar';
import { HeartCircle } from '@lifeomic/chromicons';

export default {
  title: 'Components/List/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = ({ ...args }) => {
  return <ListItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: 'Option 1',
};

export const Icons = Template.bind({});
Icons.args = {
  text: 'Option 1',
  icon: HeartCircle,
};

export const Avatars = Template.bind({});
Avatars.args = {
  text: 'Option 1',
  avatar: <Avatar name="Avatar" />,
};

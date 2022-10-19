import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ListGroupHeading } from './ListGroupHeading';
import { Avatar } from '../Avatar';
import { HeartCircle } from '@lifeomic/chromicons';
import Avatar1 from '../../assets/example-avatar-1.jpg';
import Avatar2 from '../../assets/example-avatar-2.jpg';

export default {
  title: 'Components/List/List',
  component: List,
  argTypes: {
    margin: {
      type: { name: 'string' },
    },
    marginTop: {
      type: { name: 'string' },
    },
    marginRight: {
      type: { name: 'string' },
    },
    marginBottom: {
      type: { name: 'string' },
    },
    marginLeft: {
      type: { name: 'string' },
    },
    marginX: {
      type: { name: 'string' },
    },
    marginY: {
      type: { name: 'string' },
    },
    padding: {
      type: { name: 'string' },
    },
    paddingTop: {
      type: { name: 'string' },
    },
    paddingRight: {
      type: { name: 'string' },
    },
    paddingBottom: {
      type: { name: 'string' },
    },
    paddingLeft: {
      type: { name: 'string' },
    },
    paddingX: {
      type: { name: 'string' },
    },
    paddingY: {
      type: { name: 'string' },
    },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'List with multiple items',
  items: [
    <ListItem key="1">Option 1</ListItem>,
    <ListItem key="2">Option 2</ListItem>,
    <ListItem key="3">Option 3</ListItem>,
  ],
};

export const Icons = Template.bind({});
Icons.args = {
  'aria-label': 'List with icons',
  items: [
    <ListItem key="1" icon={HeartCircle}>
      Option 1
    </ListItem>,
    <ListItem key="2" icon={HeartCircle}>
      Option 2
    </ListItem>,
    <ListItem key="3" icon={HeartCircle}>
      Option 3
    </ListItem>,
  ],
};

export const Avatars = Template.bind({});
Avatars.args = {
  'aria-label': 'List with avatars',
  items: [
    <ListItem key="1" avatar={<Avatar name="1" src={Avatar1} />}>
      Option 1
    </ListItem>,
    <ListItem key="2" avatar={<Avatar name="2" src={Avatar2} />}>
      Option 2
    </ListItem>,
    <ListItem key="3" avatar={<Avatar name="Third Person" />}>
      Option 3
    </ListItem>,
  ],
};

export const Sections = Template.bind({});
Sections.args = {
  'aria-label': 'List with multiple sections of items',
  items: [
    <ListGroupHeading key="section-1">Section 1</ListGroupHeading>,
    <ListItem key="item-1">Option 1</ListItem>,
    <ListItem key="item-2">Option 2</ListItem>,
    <ListItem key="item-3">Option 3</ListItem>,
    <ListGroupHeading key="section-2">Section 2</ListGroupHeading>,
    <ListItem key="item-4">Option 4</ListItem>,
    <ListItem key="item-5">Option 5</ListItem>,
    <ListItem key="item-6">Option 6</ListItem>,
  ],
};

export const Margin = Template.bind({});
Margin.args = {
  'aria-label': 'List with some margin',
  items: [
    <ListGroupHeading key="section-1">Section 1</ListGroupHeading>,
    <ListItem key="item-1">Option 1</ListItem>,
    <ListItem key="item-2">Option 2</ListItem>,
    <ListItem key="item-3">Option 3</ListItem>,
  ],
  margin: '50px',
};

export const Padding = Template.bind({});
Padding.args = {
  'aria-label': 'List with some padding',
  items: [
    <ListGroupHeading key="section-1">Section 1</ListGroupHeading>,
    <ListItem key="item-1">Option 1</ListItem>,
    <ListItem key="item-2">Option 2</ListItem>,
    <ListItem key="item-3">Option 3</ListItem>,
  ],
  padding: '1rem',
};

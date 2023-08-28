import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ListGroupHeading } from './ListGroupHeading';
import { Avatar } from '../Avatar';
import { Database, HeartCircle } from '@lifeomic/chromicons';
import Avatar1 from '../../assets/example-avatar-1.jpg';
import Avatar2 from '../../assets/example-avatar-2.jpg';

const meta: Meta<typeof List> = {
  component: List,
  args: {
    items: [
      <ListItem key="1">Option 1</ListItem>,
      <ListItem key="2">Option 2</ListItem>,
      <ListItem key="3">Option 3</ListItem>,
    ],
  },
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
};
export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    'aria-label': 'List with multiple items',
  },
};

export const Title: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The List component takes an `title` prop.',
      },
    },
  },
  args: {
    'aria-label': 'List with a title',
    title: 'Title',
  },
};

export const TitleIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The List component takes an `titleIcon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
      },
    },
  },
  args: {
    'aria-label': 'List with title icon and title',
    title: 'Title',
    titleIcon: Database,
  },
};

export const Icons: Story = {
  args: {
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
  },
};

export const Avatars: Story = {
  args: {
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
  },
};

export const Sections: Story = {
  args: {
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
  },
};

export const SecondaryText: Story = {
  args: {
    'aria-label': 'List with some items with secondary text',
    items: [
      <ListGroupHeading key="section-1">Section 1</ListGroupHeading>,
      <ListItem
        key="item-1"
        text="Option 1"
        secondaryText="This is secondary text"
      />,
      <ListItem key="item-2">Option 2</ListItem>,
      <ListItem key="item-3">Option 3</ListItem>,
      <ListGroupHeading key="section-2">Section 2</ListGroupHeading>,
      <ListItem key="item-4">Option 4</ListItem>,
      <ListItem key="item-5">Option 5</ListItem>,
      <ListItem
        key="item-6"
        text="Option 6"
        secondaryText="This is secondary text"
      />,
    ],
  },
};

export const Margin: Story = {
  args: {
    'aria-label': 'List with some margin',
    items: [
      <ListGroupHeading key="section-1">Section 1</ListGroupHeading>,
      <ListItem key="item-1">Option 1</ListItem>,
      <ListItem key="item-2">Option 2</ListItem>,
      <ListItem key="item-3">Option 3</ListItem>,
    ],
    margin: '50px',
  },
};

export const Padding: Story = {
  args: {
    'aria-label': 'List with some padding',
    items: [
      <ListGroupHeading key="section-1">Section 1</ListGroupHeading>,
      <ListItem key="item-1">Option 1</ListItem>,
      <ListItem key="item-2">Option 2</ListItem>,
      <ListItem key="item-3">Option 3</ListItem>,
    ],
    padding: '1rem',
  },
};

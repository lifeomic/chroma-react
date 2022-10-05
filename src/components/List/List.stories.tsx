import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './List';
import { ListItem } from './ListItem';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
  decorators: [
    (story: Function) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof List>;

export const Basic: ComponentStory<typeof List> = (args) => {
  return (
    <List {...args}>
      <ListItem text="Testing testing testing" />
    </List>
  );
};

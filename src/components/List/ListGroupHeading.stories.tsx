import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListGroupHeading } from './ListGroupHeading';
import { newMakeStyles } from '../../styles';

export default {
  title: 'Components/List/ListGroupHeading',
  component: ListGroupHeading,
} as ComponentMeta<typeof ListGroupHeading>;

const useStyles = newMakeStyles(() => ({
  storyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const Template: ComponentStory<typeof ListGroupHeading> = ({ ...args }) => {
  const { classes } = useStyles();
  return (
    <ul className={classes.storyList}>
      <ListGroupHeading {...args} />
    </ul>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Section 1',
};

const TopBorderTemplate: ComponentStory<typeof ListGroupHeading> = ({
  ...args
}) => {
  const { classes } = useStyles();
  return (
    <ul className={classes.storyList}>
      <ListGroupHeading {...args} />
      <ListGroupHeading {...args} />
    </ul>
  );
};

export const MultipleSections = TopBorderTemplate.bind({});
MultipleSections.args = {
  children: 'Section X',
};

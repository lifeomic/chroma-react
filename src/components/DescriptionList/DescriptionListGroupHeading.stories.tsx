import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionListGroupHeading } from './DescriptionListGroupHeading';
import { makeStyles } from '../../styles';

export default {
  title: 'Components/List/ListGroupHeading',
  component: DescriptionListGroupHeading,
} as ComponentMeta<typeof DescriptionListGroupHeading>;

const useStyles = makeStyles(() => ({
  storyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const Template: ComponentStory<typeof DescriptionListGroupHeading> = ({
  ...args
}) => {
  const classes = useStyles({});
  return (
    <ul className={classes.storyList}>
      <DescriptionListGroupHeading {...args} />
    </ul>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Section 1',
};

const TopBorderTemplate: ComponentStory<typeof DescriptionListGroupHeading> = ({
  ...args
}) => {
  const classes = useStyles({});
  return (
    <ul className={classes.storyList}>
      <DescriptionListGroupHeading {...args} />
      <DescriptionListGroupHeading {...args} />
    </ul>
  );
};

export const MultipleSections = TopBorderTemplate.bind({});
MultipleSections.args = {
  children: 'Section X',
};

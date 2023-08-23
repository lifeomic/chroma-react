import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { DescriptionListGroupHeading } from './DescriptionListGroupHeading';
import { makeStyles } from '../../styles';

const meta: Meta<typeof DescriptionListGroupHeading> = {
  title: 'Components/DescriptionList/DescriptionListGroupHeading',
  component: DescriptionListGroupHeading,
};
export default meta;
type Story = StoryObj<typeof DescriptionListGroupHeading>;

const useStyles = makeStyles(() => ({
  storyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const Template: StoryFn<typeof DescriptionListGroupHeading> = ({ ...args }) => {
  const classes = useStyles({});
  return (
    <ul className={classes.storyList}>
      <DescriptionListGroupHeading {...args} />
    </ul>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    children: 'Section 1',
  },
};

const TopBorderTemplate: StoryFn<typeof DescriptionListGroupHeading> = ({
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

export const MultipleSections: Story = {
  render: TopBorderTemplate,
  args: {
    children: 'Section X',
  },
};

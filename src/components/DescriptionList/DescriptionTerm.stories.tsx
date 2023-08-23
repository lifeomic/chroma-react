import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { DescriptionTerm } from './DescriptionTerm';
import { Avatar } from '../Avatar';
import { Check } from '@lifeomic/chromicons';
import { makeStyles } from '../../styles';

const meta: Meta<typeof DescriptionTerm> = {
  component: DescriptionTerm,
  args: {
    text: 'Option 1',
  },
};
export default meta;
type Story = StoryObj<typeof DescriptionTerm>;

const useStyles = makeStyles(() => ({
  storyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const Template: StoryFn<typeof DescriptionTerm> = ({ ...args }) => {
  const classes = useStyles({});
  return (
    <ul className={classes.storyList}>
      <DescriptionTerm {...args} />
    </ul>
  );
};

export const Default: Story = {
  render: Template,
};

export const Icons: Story = {
  render: Template,
  args: {
    icon: Check,
  },
};

export const Avatars: Story = {
  render: Template,
  args: {
    avatar: <Avatar name="Avatar" />,
  },
};

export const SecondaryText: Story = {
  render: Template,
  args: {
    secondaryText: 'This is secondary text',
  },
};

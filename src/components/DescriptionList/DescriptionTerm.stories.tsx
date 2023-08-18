import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionTerm } from './DescriptionTerm';
import { Avatar } from '../Avatar';
import { Check } from '@lifeomic/chromicons';
import { makeStyles } from '../../styles';

export default {
  title: 'Components/DescriptionList/DescriptionTerm',
  component: DescriptionTerm,
} as ComponentMeta<typeof DescriptionTerm>;

const useStyles = makeStyles(() => ({
  storyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const Template: ComponentStory<typeof DescriptionTerm> = ({ ...args }) => {
  const classes = useStyles({});
  return (
    <ul className={classes.storyList}>
      <DescriptionTerm {...args} />
    </ul>
  );
};

export const Default = Template.bind({});
Default.args = {
  text: 'Option 1',
};

export const Icons = Template.bind({});
Icons.args = {
  text: 'Option 1',
  icon: Check,
};

export const Avatars = Template.bind({});
Avatars.args = {
  text: 'Option 1',
  avatar: <Avatar name="Avatar" />,
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  text: 'Option 1',
  secondaryText: 'This is secondary text',
};

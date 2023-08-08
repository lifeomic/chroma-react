import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionDetails } from './DescriptionDetails';
import { Avatar } from '../Avatar';
import { Check } from '@lifeomic/chromicons';
import { makeStyles } from '../../styles';

export default {
  title: 'Components/DescriptionList/DescriptionDetails',
  component: DescriptionDetails,
} as ComponentMeta<typeof DescriptionDetails>;

const useStyles = makeStyles(() => ({
  storyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
}));

const Template: ComponentStory<typeof DescriptionDetails> = ({ ...args }) => {
  const classes = useStyles({});
  return (
    <ul className={classes.storyList}>
      <DescriptionDetails {...args} />
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

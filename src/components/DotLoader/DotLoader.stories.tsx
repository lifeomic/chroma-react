import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { makeStyles } from '../../styles';

import { DotLoader } from './DotLoader';

const useStyles = makeStyles(() => ({
  styledLoader: {
    fill: 'black',
  },
}));

const meta: Meta<typeof DotLoader> = {
  title: 'Components/DotLoader',
  component: DotLoader,
  argTypes: {},
} as Meta<typeof DotLoader>;
export default meta;
type Story = StoryObj<typeof DotLoader>;

const Template: StoryFn<typeof DotLoader> = (args) => {
  const classes = useStyles({});
  return <DotLoader {...args} dotStyle={classes.styledLoader} />;
};

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 1,
  },
};

export const Styled: Story = {
  render: Template,
};

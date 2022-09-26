import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { Logo } from '../../assets/Logo';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Full = Template.bind({});
Full.args = {
  centerLogo: true,
  logo: <Logo />,
  left: <Button variant="text">Account 1</Button>,
  right: <Avatar size={0} name="Chroma" />,
};

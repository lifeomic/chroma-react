import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Header } from './Header';
import { Logo } from '../../assets/Logo';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    left: <Button variant="text">Header</Button>,
  },
};

export const Full: Story = {
  args: {
    centerLogo: true,
    logo: <Logo />,
    left: <Button variant="text">Account 1</Button>,
    right: <Avatar size={0} name="Chroma" />,
  },
};

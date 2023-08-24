import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Link } from './Link';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Link> = {
  component: Link,
  args: {
    to: '/',
    children: 'Link',
  },
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const NewTab: Story = {
  args: {
    newTab: true,
  },
};

export const InverseDark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

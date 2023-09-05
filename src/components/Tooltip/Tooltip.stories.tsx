import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Info } from '@lifeomic/chromicons';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  args: {
    title: 'Tooltip',
    children: <Button>Tooltip on hover</Button>,
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const Children: Story = {
  args: {
    children: (
      <p style={{ width: 'fit-content' }}>Other elements can be children too</p>
    ),
    title: 'Like this paragraph',
  },
};

export const IconChild: Story = {
  args: {
    children: <IconButton aria-label="Info icon tooltip" icon={Info} />,
    title: 'Icons are a common tooltip paradigm',
  },
};

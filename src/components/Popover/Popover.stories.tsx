import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Popover, PopoverRenderProps } from './Popover';
import { Button } from '../Button';
import { PopoverActions } from './PopoverActions';
import { PopoverList } from './PopoverList';
import { PopoverItem } from './PopoverItem';
import { Edit, Trash } from '@lifeomic/chromicons';

const meta: Meta<typeof Popover> = {
  component: Popover,
  args: {
    'aria-label': 'Popover',
    anchorElement: (
      <Button style={{ marginRight: '1rem' }}>Open Popover</Button>
    ),
    children: <p style={{ paddingLeft: '1rem' }}>Popover inner content</p>,
  },
  decorators: [(story) => <div style={{ height: '150px' }}>{story()}</div>],
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {};

export const Title: Story = {
  args: {
    title: 'Title',
  },
};

export const Portal: Story = {
  args: {
    usePortal: true,
  },
};

export const Placement: Story = {
  args: {
    placement: 'right',
  },
};

export const Gutter: Story = {
  args: {
    gutter: 50,
  },
};

export const UnstableOffset: Story = {
  args: {
    unstable_offset: [200, 50],
  },
};

export const Actions: Story = {
  render: (args) => (
    <Popover {...args}>
      {({ popover }: PopoverRenderProps) => (
        <>
          <p style={{ paddingLeft: '1rem' }}>Popover inner content</p>
          <PopoverActions justify="center">
            <Button onClick={() => popover.hide()}>Sign Out</Button>
          </PopoverActions>
        </>
      )}
    </Popover>
  ),
};

export const List: Story = {
  args: {
    children: (
      <>
        <PopoverList>
          <PopoverItem icon={Edit} text="Edit" />
          <PopoverItem icon={Trash} text="Delete" />
          <PopoverItem>Your custom content here!</PopoverItem>
        </PopoverList>
        <PopoverActions justify="center">
          <Button>Sign Out</Button>
        </PopoverActions>
      </>
    ),
    usePortal: true,
    placement: 'right-start',
  },
  parameters: {
    docs: {
      description: {
        story:
          'It is **highly** recommended that the `<Menu>` component be used instead; ' +
          'however, there may be existing use cases where a popover needs a list of items. ' +
          'This path is not 100% out-of-the-box accessible -- it works with a screen ' +
          'reader; however, keyboard support is not available with this just yet.',
      },
    },
  },
};

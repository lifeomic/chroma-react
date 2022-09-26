import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover, PopoverRenderProps } from './Popover';
import { Button } from '../Button';
import { PopoverActions } from './PopoverActions';
import { PopoverList } from './PopoverList';
import { PopoverItem } from './PopoverItem';
import { Edit, Trash } from '@lifeomic/chromicons';

export default {
  title: 'Components/Popover',
  component: Popover,
  argTypes: {},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    <p>Popover inner content</p>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'Popover',
  anchorElement: <Button style={{ marginRight: '1rem' }}>Open Popover</Button>,
};

export const Portal = Template.bind({});
Portal.args = {
  'aria-label': 'Popover',
  anchorElement: <Button style={{ marginRight: '1rem' }}>Open Popover</Button>,
  usePortal: true,
};

export const Actions: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
    {({ popover }: PopoverRenderProps) => (
      <>
        <p>Popover inner content</p>
        <PopoverActions justify="center">
          <Button onClick={() => popover.hide()}>Sign Out</Button>
        </PopoverActions>
      </>
    )}
  </Popover>
);
Actions.args = {
  'aria-label': 'Popover',
  anchorElement: <Button style={{ marginRight: '1rem' }}>Open Popover</Button>,
};

export const List: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args}>
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
  </Popover>
);
List.parameters = {
  docs: {
    description: {
      story:
        'It is **highly** recommended that the `<Menu>` component be used instead; ' +
        'however, there may be existing use cases where a popover needs a list of items. ' +
        'This path is not 100% out-of-the-box accessible -- it works with a screen ' +
        'reader; however, keyboard support is not available with this just yet.',
    },
  },
};
List.args = {
  'aria-label': 'Popover',
  anchorElement: <Button style={{ marginRight: '1rem' }}>Open Popover</Button>,
};

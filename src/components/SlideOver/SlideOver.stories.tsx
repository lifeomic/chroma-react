import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { SlideOver } from './SlideOver';
import { Header } from './Header';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { Body } from './Body';
import { Actions } from './Actions';
import { Button } from '../Button';
import { Settings } from '@lifeomic/chromicons';

const meta: Meta<typeof SlideOver> = {
  component: SlideOver,
  decorators: [
    (story: Function) => <div style={{ height: '200px' }}>{story()}</div>,
  ],
};
export default meta;
type Story = StoryObj<typeof SlideOver>;

const Template: StoryFn<typeof SlideOver> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle SlideOver
      </Button>
      <SlideOver {...args} isOpen={isOpen}>
        {args.children}
      </SlideOver>
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    children: (
      <>
        <Header title="Panel Title" onClose={() => {}} />
        <Body>
          <Text>Content</Text>
        </Body>
      </>
    ),
  },
};

export const HeaderWithIcon: Story = {
  render: Template,
  args: {
    children: (
      <>
        <Header title="Panel Title" titleIcon={Settings} onClose={() => {}} />
        <Body>
          <Text>Content</Text>
        </Body>
      </>
    ),
  },
};

export const CustomHeader: Story = {
  render: Template,
  args: {
    children: (
      <>
        <Header onClose={() => {}}>
          <Avatar name="Chroma" />
          <Text>Custom Header</Text>
        </Header>
        <Body>
          <Text>Content</Text>
        </Body>
      </>
    ),
  },
};

export const PanelActions: Story = {
  render: Template,
  args: {
    children: (
      <>
        <Header title="Panel Title" onClose={() => {}} />
        <Body>
          <Text>Content</Text>
        </Body>
        <Actions justify="flex-end">
          <Button variant="text">Cancel</Button>
          <Button>Save</Button>
        </Actions>
      </>
    ),
  },
};

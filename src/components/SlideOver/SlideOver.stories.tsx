import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SlideOver } from './SlideOver';
import { Header } from './Header';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { Body } from './Body';
import { Actions } from './Actions';
import { Button } from '../Button';
import { Settings } from '@lifeomic/chromicons';

export default {
  title: 'Components/SlideOver',
  component: SlideOver,
  argTypes: {},
  subcomponents: { Header, Body, Actions },
} as ComponentMeta<typeof SlideOver>;

const Template: ComponentStory<typeof SlideOver> = (args) => (
  <SlideOver {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Header title="Panel Title" onClose={() => {}} />
      <Body>
        <Text>Content</Text>
      </Body>
    </>
  ),
  isOpen: true,
};

export const HeaderWithIcon = Template.bind({});
HeaderWithIcon.args = {
  children: (
    <>
      <Header title="Panel Title" titleIcon={Settings} onClose={() => {}} />
      <Body>
        <Text>Content</Text>
      </Body>
    </>
  ),
  isOpen: true,
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
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
  isOpen: true,
};

export const PanelActions = Template.bind({});
PanelActions.args = {
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
  isOpen: true,
};

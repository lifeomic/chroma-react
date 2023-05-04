import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpinButton } from './SpinButton';

export default {
  title: 'Components/SpinButton',
  component: SpinButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof SpinButton>;

const Template: ComponentStory<typeof SpinButton> = (args) => (
  <SpinButton {...args}></SpinButton>
);

export const Default = Template.bind({});

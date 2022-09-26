import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonUnstyled } from './ButtonUnstyled';

export default {
  title: 'Components/ButtonUnstyled',
  component: ButtonUnstyled,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof ButtonUnstyled>;

const Template: ComponentStory<typeof ButtonUnstyled> = (args) => (
  <ButtonUnstyled {...args}>Button Unstyled</ButtonUnstyled>
);

export const Default = Template.bind({});
Default.args = {};

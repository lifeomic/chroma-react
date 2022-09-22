import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import { SecondaryNavigationItem } from './SecondaryNavigationItem';

export default {
  title: 'Components/SecondaryNavigation/SecondaryNavigationItem',
  component: SecondaryNavigationItem,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof SecondaryNavigationItem>;

const Template: ComponentStory<typeof SecondaryNavigationItem> = (args) => (
  <SecondaryNavigationItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
  label: 'Default',
};

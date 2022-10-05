import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecondaryNavigation } from './SecondaryNavigation';
import { MemoryRouter } from 'react-router-dom';
import { SecondaryNavigationItem } from './SecondaryNavigationItem';

export default {
  title: 'Components/SecondaryNavigation/SecondaryNavigation',
  component: SecondaryNavigation,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof SecondaryNavigation>;

const Template: ComponentStory<typeof SecondaryNavigation> = (args) => (
  <SecondaryNavigation {...args}>
    <SecondaryNavigationItem to="/link-1" label="Link 1" />
    <SecondaryNavigationItem to="/link-2" label="Link 2" />
  </SecondaryNavigation>
);

export const Default = Template.bind({});
Default.args = {};

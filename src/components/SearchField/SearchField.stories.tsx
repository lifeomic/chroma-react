import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchField } from './SearchField';

export default {
  title: 'Form Components/SearchField',
  component: SearchField,
  argTypes: {},
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => (
  <SearchField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'Search',
};

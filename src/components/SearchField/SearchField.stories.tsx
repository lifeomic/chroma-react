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

export const WithLabel = Template.bind({});
WithLabel.args = {};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  'aria-label': 'Search',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  'aria-label': 'Search',
  color: 'inverse',
};

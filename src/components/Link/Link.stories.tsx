import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
};

export const NewTab = Template.bind({});
NewTab.args = {
  to: '/',
  newTab: true,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  to: '/',
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  to: '/',
  color: 'inverse',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Breadcrumbs } from './Breadcrumbs';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  crumbs: [
    {
      text: 'Parent',
      url: 'root',
    },
    {
      text: 'Child',
      url: 'root/child',
    },
    {
      text: 'GrandChild',
      url: 'root/child/grand',
    },
  ],
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  crumbs: [
    {
      text: 'Parent',
      url: 'root',
    },
    {
      text: 'Child',
      url: 'root/child',
    },
    {
      text: 'GrandChild',
      url: 'root/child/grand',
    },
  ],
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  crumbs: [
    {
      text: 'Parent',
      url: 'root',
    },
    {
      text: 'Child',
      url: 'root/child',
    },
    {
      text: 'GrandChild',
      url: 'root/child/grand',
    },
  ],
  color: 'inverse',
};

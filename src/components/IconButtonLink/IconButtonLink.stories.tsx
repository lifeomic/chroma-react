import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButtonLink } from './IconButtonLink';
import { Edit } from '@lifeomic/chromicons';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/IconButtonLink',
  component: IconButtonLink,
  argTypes: {
    disabled: {
      description: '`boolean`',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof IconButtonLink>;

const Template: ComponentStory<typeof IconButtonLink> = (args) => (
  <IconButtonLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  'aria-label': 'IconButtonLink',
  icon: Edit,
  to: '/',
};

export const InternalLink = Template.bind({});
InternalLink.parameters = {
  docs: {
    description: {
      story:
        'The Icon Button Link component requires a "to" prop for the URL it should link ' +
        'to. By default, the component will generate a typical link.',
    },
  },
};
InternalLink.args = {
  'aria-label': 'IconButtonLink',
  icon: Edit,
  to: '/',
};

export const ExternalLink = Template.bind({});
ExternalLink.parameters = {
  docs: {
    description: {
      story:
        'By default, the Icon Button Link component will generate an "external" link when ' +
        'the "to" prop begins with "https".\n\n' +
        'When an external link is detected, it will auto-add the `target` and `rel` ' +
        'attributes as well.',
    },
  },
};
ExternalLink.args = {
  'aria-label': 'IconButtonLink',
  icon: Edit,
  to: 'https://www.lifeomic.com',
};

export const ExternalLinkSameTab = Template.bind({});
ExternalLinkSameTab.parameters = {
  docs: {
    description: {
      story:
        'To provide a link to an external href, but without opening a new tab, provide ' +
        'the "target" prop.',
    },
  },
};
ExternalLinkSameTab.args = {
  'aria-label': 'IconButtonLink',
  icon: Edit,
  to: 'https://www.lifeomic.com',
  target: '_self',
};

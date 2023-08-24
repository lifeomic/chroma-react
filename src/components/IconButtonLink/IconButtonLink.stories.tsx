import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { IconButtonLink } from './IconButtonLink';
import { Edit } from '@lifeomic/chromicons';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof IconButtonLink> = {
  component: IconButtonLink,
  args: {
    'aria-label': 'IconButtonLink',
    icon: Edit,
    to: '/',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof IconButtonLink>;

export const Default: Story = {};

export const InternalLink: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The Icon Button Link component requires a "to" prop for the URL it should link ' +
          'to. By default, the component will generate a typical link.',
      },
    },
  },
};

export const ExternalLink: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Icon Button Link component will generate an "external" link when ' +
          'the "to" prop begins with "https".\n\n' +
          'When an external link is detected, it will auto-add the `target` and `rel` ' +
          'attributes as well.',
      },
    },
  },
  args: {
    to: 'https://www.lifeomic.com',
  },
};

export const ExternalLinkSameTab: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'To provide a link to an external href, but without opening a new tab, provide ' +
          'the "target" prop.',
      },
    },
  },
  args: {
    to: 'https://www.lifeomic.com',
    target: '_self',
  },
};

export const InverseDark: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

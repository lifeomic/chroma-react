import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { ButtonLink } from './ButtonLink';
import { Edit } from '@lifeomic/chromicons';

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  args: {
    to: '/',
  },
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
};
export default meta;
type Story = StoryObj<typeof ButtonLink>;

const Template: StoryFn<typeof ButtonLink> = (args) => (
  <ButtonLink {...args}>Button Link</ButtonLink>
);

export const Default: Story = {
  render: Template,
};

export const InternalExternalToHref: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          '#### Internal href\n' +
          'The Button Link component requires a "to" prop for the URL it should link to. By ' +
          'default, the component will generate a typical link.\n' +
          '#### External href\n' +
          'By default, the Button Link component will generate an "external" link when the ' +
          '"to" prop begins with "https".' +
          '',
      },
    },
  },
  args: {
    to: 'https://example.com',
  },
};

export const TargetSelf: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'When an external link is detected, it will auto-add the `target` and `rel` attributes as well. ' +
          'To provide a link to an external href, but without opening a new tab, provide the "target" prop.',
      },
    },
  },
  args: {
    to: 'https://example.com',
    target: '_self',
  },
};

export const Disabled: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "The Button Float component takes an icon prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
      },
    },
  },
  args: {
    disabled: true,
  },
};

export const Icon: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "The Button Float component takes an icon prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
      },
    },
  },
  args: {
    to: 'https://example.com',
    icon: Edit,
  },
};

export const TrailingIcon: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "The Button Float component takes a `trailingIcon` prop. This icon will be rendered after the text. It's recommended to use the Chroma icon set.",
      },
    },
  },
  args: {
    to: 'https://example.com',
    trailingIcon: Edit,
  },
};

export const InverseDark: Story = {
  render: Template,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    color: 'inverse',
  },
};

export const InverseBlue: Story = {
  render: Template,
  parameters: {
    backgrounds: { default: 'blue' },
  },
  args: {
    color: 'inverse',
  },
};

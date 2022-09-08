import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { ButtonLink } from './ButtonLink';
import { Edit } from '@lifeomic/chromicons';

export default {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  argTypes: {},
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => (
  <ButtonLink {...args}>Button Link</ButtonLink>
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
};

export const InternalExternalToHref = Template.bind({});
InternalExternalToHref.parameters = {
  docs: {
    description: {
      story:
        '#### Internal href\n' +
        'The Button Link component requires a "to" prop for the URL it should link to. By' +
        'default, the component will generate a typical link.\n' +
        '#### External href\n' +
        'By default, the Button Link component will generate an "external" link when the' +
        '"to" prop begins with "https".' +
        '',
    },
  },
};
InternalExternalToHref.args = {
  to: 'https://example.com',
};

export const TargetSelf = Template.bind({});
TargetSelf.parameters = {
  docs: {
    description: {
      story:
        'When an external link is detected, it will auto-add the `target` and `rel` attributes as well.' +
        'To provide a link to an external href, but without opening a new tab, provide the "target" prop.',
    },
  },
};
TargetSelf.args = {
  to: 'https://example.com',
  target: '_self',
};

export const Icon = Template.bind({});
Icon.parameters = {
  docs: {
    description: {
      story:
        "The Button Float component takes an icon prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
    },
  },
};
Icon.args = {
  to: 'https://example.com',
  icon: Edit,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.parameters = {
  docs: {
    description: {
      story:
        "The Button Float component takes a `trailingIcon` prop. This icon will be rendered after the text. It's recommended to use the Chroma icon set.",
    },
  },
};
TrailingIcon.args = {
  to: 'https://example.com',
  trailingIcon: Edit,
};

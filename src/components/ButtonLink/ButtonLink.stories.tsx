import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { ButtonLink } from './ButtonLink';

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

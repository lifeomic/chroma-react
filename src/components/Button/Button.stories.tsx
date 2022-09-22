import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ChevronDown, Edit } from '@lifeomic/chromicons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});

export const Icon = Template.bind({});
Icon.parameters = {
  docs: {
    description: {
      story:
        "The Button component takes an `icon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
    },
  },
};
Icon.args = {
  icon: Edit,
};

export const TrailingIcon = Template.bind({});
TrailingIcon.parameters = {
  docs: {
    description: {
      story:
        "The Button component takes an `icon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.",
    },
  },
};
TrailingIcon.args = {
  trailingIcon: ChevronDown,
};

export const Color = Template.bind({});
Color.parameters = {
  docs: {
    description: {
      story:
        'The button component takes multiple different colors, for different styled ' +
        'buttons. Typically, the `inverse` color is used when a button needs to be ' +
        'on a dark-colored background. When the action of the button will have a ' +
        'negative or positive impact, `negative` or `positive` color are used.',
    },
  },
};
Color.args = {
  color: 'inverse',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const InverseDark = Template.bind({});
InverseDark.parameters = {
  backgrounds: { default: 'dark' },
};
InverseDark.args = {
  color: 'inverse',
};

export const InverseBlue = Template.bind({});
InverseBlue.parameters = {
  backgrounds: { default: 'blue' },
};
InverseBlue.args = {
  color: 'inverse',
};

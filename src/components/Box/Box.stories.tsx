import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
  </Box>
);

export const Default = Template.bind({});

export const Spacing = Template.bind({});
Spacing.parameters = {
  docs: {
    description: {
      story:
        'Numbers are multiplied by the default theme spacing for margin, padding, and gap' +
        '. Strings are are ' +
        'used as raw CSS. As well as `margin` and `padding`, the top, bottom, ' +
        'left, right, x and y versions of each are supported. For a more modern, ' +
        'straightforward approach to handle spacing between children, use the `gap` prop.',
    },
  },
};
Spacing.args = {
  margin: 2,
  padding: '1px',
  gap: 2,
};

export const Direction = Template.bind({});
Direction.parameters = {
  docs: {
    description: {
      story:
        'A direction can be applied. Valid options are `row` (default) or `column`.',
    },
  },
};
Direction.args = {
  direction: 'column',
};

export const ThemeColor = Template.bind({});
ThemeColor.parameters = {
  docs: {
    description: {
      story:
        'Color props take a string dot notation to the theme palette properties, or are passed as raw CSS.',
    },
  },
};
ThemeColor.args = {
  color: 'text.contrast',
  bgColor: 'common.black',
};

export const borderRadius = Template.bind({});
borderRadius.parameters = {
  docs: {
    description: {
      story:
        'Sets the `borderRadius` of a box using `theme.shape.borderRadius`.',
    },
  },
};
borderRadius.args = {
  color: 'text.contrast',
  bgColor: 'common.black',
  borderRadius: true,
};

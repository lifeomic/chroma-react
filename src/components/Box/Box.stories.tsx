import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
};
export default meta;
type Story = StoryObj<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => (
  <Box {...args}>
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>
  </Box>
);

export const Default: Story = {
  render: Template,
};

export const Spacing: Story = {
  render: Template,
  args: {
    margin: 2,
    padding: '1px',
    gap: 2,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Numbers are multiplied by the default theme spacing for margin, padding, and gap. ' +
          'Strings are are ' +
          'used as raw CSS. As well as `margin` and `padding`, the top, bottom, ' +
          'left, right, x and y versions of each are supported. For a more modern, ' +
          'straightforward approach to handle spacing between children, use the `gap` prop.',
      },
    },
  },
};

export const Direction: Story = {
  render: Template,
  args: {
    direction: 'column',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A direction can be applied. Valid options are `row` (default) or `column`.',
      },
    },
  },
};

export const ThemeColor: Story = {
  render: Template,
  args: {
    color: 'text.contrast',
    bgColor: 'common.black',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Color props take a string dot notation to the theme palette properties, or are passed as raw CSS.',
      },
    },
  },
};

export const borderRadius: Story = {
  render: Template,
  args: {
    color: 'text.contrast',
    bgColor: 'common.black',
    borderRadius: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sets the `borderRadius` of a box using `theme.shape.borderRadius`.',
      },
    },
  },
};

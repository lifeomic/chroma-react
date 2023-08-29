import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Paper } from './Paper';
import { Box } from '../Box';
import { Text } from '../Text';

const meta: Meta<typeof Paper> = {
  component: Paper,
};
export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    children: (
      <Box direction="column" gap={1}>
        <Text size="headline">Content</Text>
        <Text size="body">
          This is example content inside a Paper component
        </Text>
        <Text size="subbody">Truly astounding content</Text>
      </Box>
    ),
  },
};

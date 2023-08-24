import { StoryObj, Meta } from '@storybook/react';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  args: {
    label: 'Chip',
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const OnDelete: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The function to call when the removal button is clicked. Note that this does not ' +
          'actually do anything to the Chip component, removing the element from the DOM is ' +
          'up to the consumer to take care of.\n\n' +
          'To display a Chip, but not display the removal button, do not provide this prop.',
      },
    },
  },
};

export const DisableDelete: Story = {
  args: {
    disableDelete: true,
  },
};

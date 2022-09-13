import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Chip',
};

export const OnDelete = Template.bind({});
OnDelete.parameters = {
  docs: {
    description: {
      story:
        'The function to call when the removal button is clicked. Note that this does not ' +
        'actually do anything to the Chip component, removing the element from the DOM is ' +
        'up to the consumer to take care of.\n\n' +
        'To display a Chip, but not display the removal button, do not provide this prop.',
    },
  },
};
OnDelete.args = {
  label: 'Chip',
};

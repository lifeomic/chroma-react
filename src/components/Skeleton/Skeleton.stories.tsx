import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {},
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      >
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 100,
  width: 100,
};

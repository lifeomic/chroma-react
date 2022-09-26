import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KeymapHelp } from './KeymapHelp';

export default {
  title: 'Components/KeymapHelp',
  component: KeymapHelp,
  argTypes: {},
  decorators: [
    (story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p>Open with shift + ?</p>
        {story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof KeymapHelp>;

const Template: ComponentStory<typeof KeymapHelp> = (args) => (
  <KeymapHelp {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const AdditionalKeys = Template.bind({});
AdditionalKeys.args = {
  keyMapDocs: [
    {
      sequences: ['ctrl', 'alt', 'delete'],
      description: 'Bring up the help menu',
    },
  ],
};

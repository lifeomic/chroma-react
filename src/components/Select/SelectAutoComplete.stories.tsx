import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectAutoComplete } from './SelectAutoComplete';

export default {
  title: 'Components/SelectAutoComplete',
  component: SelectAutoComplete,
  argTypes: {},
} as ComponentMeta<typeof SelectAutoComplete>;

const items = [
  { title: 'Option 1', value: 'option 1' },
  {
    subtitle:
      'This is a subtitle. For options that need a little extra description.',
    title: 'Option 2',
    value: 'option 2',
  },
  { role: 'heading', title: 'Group 1' },
  { title: 'Option 3', value: 'option 3' },
  { title: 'Option 4', value: 'option 4' },
];

const Template: ComponentStory<typeof SelectAutoComplete> = (args) => (
  <>
    <SelectAutoComplete {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  items,
  label: 'Auto Complete Select',
  onInputChange: (inputValue) => console.log('input change', inputValue),
  onSelect: (selectedItem) => console.log('selected', selectedItem),
  selectedItem: items[1],
};

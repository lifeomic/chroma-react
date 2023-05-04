import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SpinButton } from './SpinButton';
import { Box } from '../Box';
import { TextField } from '../TextField';

export default {
  title: 'Components/SpinButton',
  component: SpinButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof SpinButton>;

const Template: ComponentStory<typeof SpinButton> = (args) => (
  <SpinButton {...args}></SpinButton>
);

export const Default = Template.bind({});

export const KeyboardSupport = () => {
  const [valueNow, setValueNow] = useState(0);
  return (
    <Box style={{ overflow: 'auto', width: '80%' }} direction="row">
      <TextField
        label="Current Number"
        disabled={true}
        value={valueNow}
        secondaryLabel="use the SpinButton to adjust value"
      />
      <SpinButton
        onDecrement={() => setValueNow(valueNow - 1)}
        onIncrement={() => setValueNow(valueNow + 1)}
      />
    </Box>
  );
};

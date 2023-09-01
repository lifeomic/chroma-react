import React from 'react';
import { StoryObj, StoryFn, Meta } from '@storybook/react';

import { SpinButton } from './SpinButton';
import { Box } from '../Box';
import { TextField } from '../TextField';

const meta: Meta<typeof SpinButton> = {
  component: SpinButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
export default meta;
type Story = StoryObj<typeof SpinButton>;

export const Default: Story = {};

export const KeyboardSupport: StoryFn<typeof SpinButton> = () => {
  const [valueNow, setValueNow] = React.useState(0);
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

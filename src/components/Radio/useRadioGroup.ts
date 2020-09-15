import * as React from 'react';
import { RadioProps } from './Radio';

interface RadioGroupState
  extends Pick<RadioProps, 'color' | 'name' | 'onChange' | 'value'> {}

export const RadioGroupContext = React.createContext<RadioGroupState>({
  color: 'default',
  name: undefined,
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => undefined,
  value: undefined,
});

export const useRadioGroup = () => React.useContext(RadioGroupContext);

import { EyeOff as FeatherEyeOff, Props } from 'react-feather';
import * as React from 'react';

export const EyeOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherEyeOff data-icon="eyeoff" {...rootProps} />
);

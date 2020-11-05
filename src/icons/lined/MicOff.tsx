import { MicOff as FeatherMicOff, Props } from 'react-feather';
import * as React from 'react';

export const MicOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMicOff data-icon="micoff" {...rootProps} />
);

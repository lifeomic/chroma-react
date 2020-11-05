import { BellOff as FeatherBellOff, Props } from 'react-feather';
import * as React from 'react';

export const BellOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBellOff data-icon="belloff" {...rootProps} />
);

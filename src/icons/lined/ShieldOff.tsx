import { ShieldOff as FeatherShieldOff, Props } from 'react-feather';
import * as React from 'react';

export const ShieldOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShieldOff data-icon="shieldoff" {...rootProps} />
);

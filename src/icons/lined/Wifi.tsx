import { Wifi as FeatherWifi, Props } from 'react-feather';
import * as React from 'react';

export const Wifi: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherWifi data-icon="wifi" {...rootProps} />
);

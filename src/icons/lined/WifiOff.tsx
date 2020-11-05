import { WifiOff as FeatherWifiOff, Props } from 'react-feather';
import * as React from 'react';

export const WifiOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherWifiOff data-icon="wifioff" {...rootProps} />
);

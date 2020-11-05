import {
  BatteryCharging as FeatherBatteryCharging,
  Props,
} from 'react-feather';
import * as React from 'react';

export const BatteryCharging: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBatteryCharging data-icon="batterycharging" {...rootProps} />
);

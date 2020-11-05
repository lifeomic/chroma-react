import { Bluetooth as FeatherBluetooth, Props } from 'react-feather';
import * as React from 'react';

export const Bluetooth: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBluetooth data-icon="bluetooth" {...rootProps} />
);

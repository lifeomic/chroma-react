import { Battery as FeatherBattery, Props } from 'react-feather';
import * as React from 'react';

export const Battery: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherBattery data-icon="battery" {...rootProps} />
);

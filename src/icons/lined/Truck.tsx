import { Truck as FeatherTruck, Props } from 'react-feather';
import * as React from 'react';

export const Truck: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTruck data-icon="truck" {...rootProps} />
);

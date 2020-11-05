import { Power as FeatherPower, Props } from 'react-feather';
import * as React from 'react';

export const Power: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPower data-icon="power" {...rootProps} />
);

import { Wind as FeatherWind, Props } from 'react-feather';
import * as React from 'react';

export const Wind: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherWind data-icon="wind" {...rootProps} />
);

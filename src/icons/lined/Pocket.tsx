import { Pocket as FeatherPocket, Props } from 'react-feather';
import * as React from 'react';

export const Pocket: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPocket data-icon="pocket" {...rootProps} />
);

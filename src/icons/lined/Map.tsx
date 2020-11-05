import { Map as FeatherMap, Props } from 'react-feather';
import * as React from 'react';

export const Map: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMap data-icon="map" {...rootProps} />
);

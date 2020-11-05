import { Layers as FeatherLayers, Props } from 'react-feather';
import * as React from 'react';

export const Layers: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherLayers data-icon="layers" {...rootProps} />
);

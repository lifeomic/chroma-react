import { VolumeX as FeatherVolumeX, Props } from 'react-feather';
import * as React from 'react';

export const VolumeX: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVolumeX data-icon="volumex" {...rootProps} />
);

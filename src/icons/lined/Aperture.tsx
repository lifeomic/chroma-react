import { Aperture as FeatherAperture, Props } from 'react-feather';
import * as React from 'react';

export const Aperture: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherAperture data-icon="aperture" {...rootProps} />
);

import { MapPin as FeatherMapPin, Props } from 'react-feather';
import * as React from 'react';

export const MapPin: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMapPin data-icon="mappin" {...rootProps} />
);

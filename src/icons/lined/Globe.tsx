import { Globe as FeatherGlobe, Props } from 'react-feather';
import * as React from 'react';

export const Globe: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherGlobe data-icon="globe" {...rootProps} />
);

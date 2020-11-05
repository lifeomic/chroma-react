import { Compass as FeatherCompass, Props } from 'react-feather';
import * as React from 'react';

export const Compass: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherCompass data-icon="compass" {...rootProps} />
);

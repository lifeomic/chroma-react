import { Sunset as FeatherSunset, Props } from 'react-feather';
import * as React from 'react';

export const Sunset: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSunset data-icon="sunset" {...rootProps} />
);

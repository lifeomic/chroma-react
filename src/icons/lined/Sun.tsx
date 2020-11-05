import { Sun as FeatherSun, Props } from 'react-feather';
import * as React from 'react';

export const Sun: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherSun data-icon="sun" {...rootProps} />
);

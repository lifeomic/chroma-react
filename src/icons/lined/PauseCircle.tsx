import { PauseCircle as FeatherPauseCircle, Props } from 'react-feather';
import * as React from 'react';

export const PauseCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPauseCircle data-icon="pausecircle" {...rootProps} />
);

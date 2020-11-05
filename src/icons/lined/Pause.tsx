import { Pause as FeatherPause, Props } from 'react-feather';
import * as React from 'react';

export const Pause: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPause data-icon="pause" {...rootProps} />
);

import { Clock as FeatherClock, Props } from 'react-feather';
import * as React from 'react';

export const Clock: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherClock data-icon="clock" {...rootProps} />
);

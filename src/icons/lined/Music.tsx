import { Music as FeatherMusic, Props } from 'react-feather';
import * as React from 'react';

export const Music: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMusic data-icon="music" {...rootProps} />
);

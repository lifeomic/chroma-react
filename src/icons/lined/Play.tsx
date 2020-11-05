import { Play as FeatherPlay, Props } from 'react-feather';
import * as React from 'react';

export const Play: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPlay data-icon="play" {...rootProps} />
);

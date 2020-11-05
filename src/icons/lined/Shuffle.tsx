import { Shuffle as FeatherShuffle, Props } from 'react-feather';
import * as React from 'react';

export const Shuffle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherShuffle data-icon="shuffle" {...rootProps} />
);

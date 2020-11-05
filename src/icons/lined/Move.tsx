import { Move as FeatherMove, Props } from 'react-feather';
import * as React from 'react';

export const Move: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherMove data-icon="move" {...rootProps} />
);

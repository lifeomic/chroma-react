import { PlayCircle as FeatherPlayCircle, Props } from 'react-feather';
import * as React from 'react';

export const PlayCircle: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPlayCircle data-icon="playcircle" {...rootProps} />
);

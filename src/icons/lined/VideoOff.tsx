import { VideoOff as FeatherVideoOff, Props } from 'react-feather';
import * as React from 'react';

export const VideoOff: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherVideoOff data-icon="videooff" {...rootProps} />
);

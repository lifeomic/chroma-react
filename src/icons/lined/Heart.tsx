import { Heart as FeatherHeart, Props } from 'react-feather';
import * as React from 'react';

export const Heart: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherHeart data-icon="heart" {...rootProps} />
);

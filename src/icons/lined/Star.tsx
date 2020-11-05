import { Star as FeatherStar, Props } from 'react-feather';
import * as React from 'react';

export const Star: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherStar data-icon="star" {...rootProps} />
);

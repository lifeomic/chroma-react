import { TrendingUp as FeatherTrendingUp, Props } from 'react-feather';
import * as React from 'react';

export const TrendingUp: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTrendingUp data-icon="trendingup" {...rootProps} />
);

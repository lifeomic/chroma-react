import { TrendingDown as FeatherTrendingDown, Props } from 'react-feather';
import * as React from 'react';

export const TrendingDown: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherTrendingDown data-icon="trendingdown" {...rootProps} />
);

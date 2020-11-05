import { Percent as FeatherPercent, Props } from 'react-feather';
import * as React from 'react';

export const Percent: React.FC<Props> = ({ ...rootProps }) => (
  <FeatherPercent data-icon="percent" {...rootProps} />
);
